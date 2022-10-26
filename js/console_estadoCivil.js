var  tbl_estadoC;
function Listar_estadoCivil(){
    tbl_estadoC = $("#tabla_estadocivil").DataTable({
        "ordering":false,   
        "bLengthChange":true,
        "searching": { "regex": false },
        "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
        "pageLength": 10,
        "destroy":true,
        "async": false ,
        "processing": true,
        "ajax":{
            "url":"../controller/Estado_Civil/controlador_listar_estadoCivil.php",
            type:'POST'
        },
        "columns":[
            {"defaultContent":""},
            {"data":"cod_estadoCivil"},
            {"data":"nombre_estadoCivil"},
            {"defaultContent":"<button class='editar btn btn-primary'><i class='fa fa-edit'></i></button>"},
            
        ],
  
        "language":idioma_espanol,
        select: true
    });
    tbl_estadoC.on('draw.td',function(){
      var PageInfo = $("#tabla_estadocivil").DataTable().page.info();
      tbl_estadoC.column(0, {page: 'current'}).nodes().each(function(cell, i){
        cell.innerHTML = i + 1 + PageInfo.start;
      });
    });
}

$('#tabla_estadocivil').on('click','.editar',function(){
	var data = tbl_estadoC.row($(this).parents('tr')).data();//En tamaño escritorio
	if(tbl_estadoC.row(this).child.isShown()){
		var data = tbl_estadoC.row(this).data();
	}//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
    $("#modal_editar").modal('show');
    document.getElementById('txt_estadocivil_editar').value=data.nombre_estadoCivil;
    document.getElementById('txt_cod_estadoCivil').value=data.cod_estadoCivil;
    
})


function AbrirRegistro(){
    $("#modal_registro").modal({backdrop:'static',keyboard:false})
    $("#modal_registro").modal('show');
}

function Registrar_EstadoCivil(){
    let tbl_estadocivil = document.getElementById('txt_estadocivil').value;
    if(tbl_estadocivil.length==0){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":"../controller/Estado_civil/controlador_registro_estadoCivil.php",
        type:'POST',
        data:{
            a:tbl_estadocivil
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Nuevo Universidad Registrada","success").then((value)=>{
                    document.getElementById('txt_estadocivil').value="";
                    tbl_estadocivil.ajax.reload();
                    $("#modal_registro").modal('hide');
                });
            }else{
                Swal.fire("Mensaje de Advertencia","La universidad ingresada ya se encuentra en la base de datos","warning");
            }
        }else{
            return Swal.fire("Mensaje de Error","No se completo el registro","error");            
        }
    })
}

function Modificar_EstadoCivil(){
    let id   = document.getElementById('txt_cod').value;
    let est = document.getElementById('txt_estadoCivil_editar').value;
    
    if(est.length==0 || id.length==0){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":"../controller/area/controlador_modificar_estadoCivil.php",
        type:'POST',
        data:{
            id:id,
            est:est,
            
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Datos Actualizados","success").then((value)=>{
                    tbl_estadocivil.ajax.reload();
                    $("#modal_editar").modal('hide');
                });
            }else{
                Swal.fire("Mensaje de Advertencia","El area ingresada ya se encuentra en la base de datos","warning");
            }
        }else{
            return Swal.fire("Mensaje de Error","No se completo la modificacion","error");            
        }
    })
}