var  tbl_tiposolicitudes;
function listar_tiposolicitud(){
    tbl_tiposolicitudes = $("#tabla_tiposolicitud").DataTable({
        "ordering":false,   
        "bLengthChange":true,
        "searching": { "regex": false },
        "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
        "pageLength": 10,
        "destroy":true,
        "async": false ,
        "processing": true,
        "ajax":{
            "url":"../controller/tiposolicitud/controlador_listar_tiposolicitud.php",
            type:'POST'
        },
        "columns":[
            {"defaultContent":""},
            {"data":"nombre_tipo_solicitud"},            
            {"defaultContent":"<button class='editar btn btn-primary'><i class='fa fa-edit'></i></button>&nbsp&nbsp;<button class='eliminar btn btn-danger'><i class='fa fa-trash'></i></button>"},
        ],
  
        "language":idioma_espanol,
        select: true
    });
    tbl_tiposolicitudes.on('draw.td',function(){
      var PageInfo = $("#tabla_tiposolicitud").DataTable().page.info();
      tbl_tiposolicitudes.column(0, {page: 'current'}).nodes().each(function(cell, i){
        cell.innerHTML = i + 1 + PageInfo.start;
      });
    });
}

$('#tabla_tiposolicitud').on('click','.editar',function(){
	var data = tbl_tiposolicitudes.row($(this).parents('tr')).data();//En tamaño escritorio
	if(tbl_tiposolicitudes.row(this).child.isShown()){
		var data = tbl_tiposolicitudes.row(this).data();
	}//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
    $("#modal_editar").modal('show');
    document.getElementById('txt_tiposolicitud_editar').value=data.nombre_tipo_soliciud;
    document.getElementById('txt_idtiposolicitud').value=data.cod_tipo_solicitud;
})

$('#tabla_tiposolicitud').on('click','.eliminar',function(){
	var data = tbl_tiposolicitudes.row($(this).parents('tr')).data();//En tamaño escritorio
	if(tbl_tiposolicitudes.row(this).child.isShown()){
		var data = tbl_tiposolicitudes.row(this).data();
	}//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
    $("#modal_eliminar").modal('show');
    document.getElementById('txt_idtiposolicitud').value=data.cod_tipo_solicitud;
})

function AbrirRegistro(){
    $("#modal_registro").modal({backdrop:'static',keyboard:false})
    $("#modal_registro").modal('show');
}

function Registrar_TipoSolicitud(){
    let tbl_tipo_solicitud = document.getElementById('txt_tiposolicitud').value;
    if(tbl_tipo_solicitud.length==0){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":"../controller/tiposolicitud/controlador_registro_tiposolicitud.php",
        type:'POST',
        data:{
            a:tbl_tipo_solicitud
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Nuevo Tipo de Solicitud Registrado","success").then((value)=>{
                    document.getElementById('txt_tiposolicitud').value="";
                    tbl_tiposolicitudes.ajax.reload();
                    $("#modal_registro").modal('hide');
                });
            }else{
                Swal.fire("Mensaje de Advertencia","El tipo de solicitud ingresada ya se encuentra en la base de datos","warning");
            }
        }else{
            return Swal.fire("Mensaje de Error","No se completo el registro","error");            
        }
    })
}

function Modificar_TipoSolicitud(){
    let id = document.getElementById('txt_idtiposolicitud').value;
    let nombre_ts = document.getElementById('txt_tiposolicitud_editar').value;
    if(nombre_ts.length==0 || id.length==0){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":"../controller/tiposolicitud/controlador_modificar_tiposolicitud.php",
        type:'POST',
        data:{
            id:id,
            nombre_ts:nombre_ts
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Datos Actualizados","success").then((value)=>{
                    tbl_tiposolicitudes.ajax.reload();
                    $("#modal_editar").modal('hide');
                });
            }else{
                Swal.fire("Mensaje de Advertencia","El tipo de solicitud ingresada ya se encuentra en la base de datos","warning");
            }
        }else{
            return Swal.fire("Mensaje de Error","No se completo la modificacion","error");            
        }
    })
}

function Eliminar_TipoSolicitud(){
    let cod_ts = document.getElementById('txt_idtiposolicitud').value;  

    $.ajax({
        "url":"../controller/tiposolicitud/controlador_eliminar_tiposolicitud.php",
        type:'POST',
        data:{
            cod_ts:cod_ts,
        }
    }).done(function(resp){
        Swal.fire("Mensaje de Confirmacion","Tipo de Solicitud Eliminada","success").then((value)=>{
            tbl_tiposolicitudes.ajax.reload();
            $("#modal_eliminar").modal('hide');
        });        
    })
}
