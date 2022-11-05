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
            {"data":"cod_estado_civil"},
            {"data":"nombre_estado_civil"},
            {"defaultContent":"<button class='editar btn btn-primary btn-sm'><i class='fa fa-edit'></i></button>&nbsp;<button class='eliminar btn btn-danger btn-sm'><i class='fa fa-trash'></i></button>"},
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
    document.getElementById('txt_estadocivil_editar').value=data.nombre_estado_civil;
    document.getElementById('txt_idestadocivil').value=data.cod_estado_civil;
    
})


$('#tabla_estadocivil').on('click','.eliminar',function(){
	var data = tbl_estadoC.row($(this).parents('tr')).data();//En tamaño escritorio
	if(tbl_estadoC.row(this).child.isShown()){
		var data = tbl_estadoC.row(this).data();
	}//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
    $("#modal_eliminar").modal('show');
    document.getElementById('txt_idestadocivil').value=data.cod_estado_civil;
})

function AbrirRegistro(){
    $("#modal_registro").modal({backdrop:'static',keyboard:false})
    $("#modal_registro").modal('show');
}

function Registrar_EstadoCivil(){
    let est = document.getElementById('txt_estadocivil').value;
    if(est.length==0){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":"../controller/Estado_civil/controlador_registrar_estadoCivil.php",
        type:'POST',
        data:{
            est:est
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Nuevo estado civil registrado","success").then((value)=>{
                    document.getElementById('txt_estadocivil').value="";
                    tbl_estadoC.ajax.reload();
                    $("#modal_registro").modal('hide');
                });
            }else{
                Swal.fire("Mensaje de Advertencia","El estado civil ingresado ya se encuentra en la base de datos","warning");
            }
        }else{
            return Swal.fire("Mensaje de Error","No se completo el registro","error");            
        }
    })
}

function Modificar_EstadoCivil(){
    let id   = document.getElementById('txt_idestadocivil').value;
    let estadocivil = document.getElementById('txt_estadocivil_editar').value;
    
    if(estadocivil.length==0 || id.length==0){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":"../controller/Estado_civil/controlador_modificar_estadoCivil.php",
        type:'POST',
        data:{
            id:id,
            estadocivil:estadocivil,
            
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Datos Actualizados","success").then((value)=>{
                    tbl_estadoC.ajax.reload();
                    $("#modal_editar").modal('hide');
                });
            }else{
                Swal.fire("Mensaje de Advertencia","El estado civil ingresado ya se encuentra en la base de datos","warning");
            }
        }else{
            return Swal.fire("Mensaje de Error","No se completo la modificacion","error");            
        }
    })
    
}


function Eliminar_EstadoCivil(){
    let id = document.getElementById('txt_idestadocivil').value;  

    $.ajax({
        "url":"../controller/Estado_civil/controlador_eliminar_estadoCivil.php",
        type:'POST',
        data:{
            id:id,
        }
    }).done(function(resp){
        Swal.fire("Mensaje de Confirmacion","Estado Civil Eliminado","success").then((value)=>{
            tbl_estadoC.ajax.reload();
            $("#modal_eliminar").modal('hide');
        });        
    })
}

