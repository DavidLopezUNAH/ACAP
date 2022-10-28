var  tbl_departamentos;
function Listar_depto(){
    tbl_departamentos = $("#tabla_depto").DataTable({
        "ordering":false,   
        "bLengthChange":true,
        "searching": { "regex": false },
        "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
        "pageLength": 10,
        "destroy":true,
        "async": false ,
        "processing": true,
        "ajax":{
            "url":"../controller/Departamento/controlador_listar_depto.php",
            type:'POST'
        },
        "columns":[
            {"defaultContent":""},
            {"data":"cod_departamento"},
            {"data":"nombre_depto"},
            {"data":"descripcion"},
            {"defaultContent":"<button class='editar btn btn-primary'><i class='fa fa-edit'></i></button>"},
            
        ],
  
        "language":idioma_espanol,
        select: true
    });
    tbl_departamentos.on('draw.td',function(){
      var PageInfo = $("#tabla_depto").DataTable().page.info();
      tbl_departamentos.column(0, {page: 'current'}).nodes().each(function(cell, i){
        cell.innerHTML = i + 1 + PageInfo.start;
      });
    });
}

$('#tabla_depto').on('click','.editar',function(){
	var data = tbl_departamentos.row($(this).parents('tr')).data();//En tamaño escritorio
	if(tbl_departamentos.row(this).child.isShown()){
		var data = tbl_departamentos.row(this).data();
	}//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
    $("#modal_editar").modal('show');
    document.getElementById('txt_depto_editar').value=data.nombre_depto;
    document.getElementById('txt_id_depto').value=data.cod_departamento;
    document.getElementById('txt_des').value=data.descripcion;
    
})


function AbrirRegistro(){
    $("#modal_registro").modal({backdrop:'static',keyboard:false})
    $("#modal_registro").modal('show');
}

function Registrar_Depto(){
    let depto = document.getElementById('txt_depto').value;
    let des = document.getElementById('txt_des').value;
    if(depto.length==0 || des.length==0){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":"../controller/Departamento/controlador_registrar_depto.php",
        type:'POST',
        data:{
            depto:depto,
            des:des
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Nuevo Departamentop registrado","success").then((value)=>{
                    document.getElementById('txt_depto').value="";
                    document.getElementById('txt_des').value="";
                    tbl_departamentos.ajax.reload();
                    $("#modal_registro").modal('hide');
                });
            }else{
                Swal.fire("Mensaje de Advertencia","El Departamento ingresado ya se encuentra en la base de datos","warning");
            }
        }else{
            return Swal.fire("Mensaje de Error","No se completo el registro","error");            
        }
    })
}

/*function Modificar_EstadoCivil(){
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
                    tbl_departamentosivil.ajax.reload();
                    $("#modal_editar").modal('hide');
                });
            }else{
                Swal.fire("Mensaje de Advertencia","El area ingresada ya se encuentra en la base de datos","warning");
            }
        }else{
            return Swal.fire("Mensaje de Error","No se completo la modificacion","error");            
        }
    })
}*/