var  tbl_estado;
function listar_estado(){
    tbl_estado = $("#tabla_estado").DataTable({
        "ordering":false,   
        "bLengthChange":true,
        "searching": { "regex": false },
        "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
        "pageLength": 10,
        "destroy":true,
        "async": false ,
        "processing": true,
        "ajax":{
            "url":"../controller/estado/controlador_listar_estado.php",
            type:'POST'
        },
        "columns":[
            {"defaultContent":""},
            {"data":"nombre_estado"},            
            {"defaultContent":"<button class='editar btn btn-primary'><i class='fa fa-edit'></i></button>"},
            {"defaultContent":"<button class='eliminar btn btn-primary'><i class='fa fa-trash'></i></button>"},
        ],
  
        "language":idioma_espanol,
        select: true
    });
    tbl_estado.on('draw.td',function(){
      var PageInfo = $("#tabla_estado").DataTable().page.info();
      tbl_estado.column(0, {page: 'current'}).nodes().each(function(cell, i){
        cell.innerHTML = i + 1 + PageInfo.start;
      });
    });
}

$('#tabla_estado').on('click','.editar',function(){
	var data = tbl_estado.row($(this).parents('tr')).data();//En tamaño escritorio
	if(tbl_estado.row(this).child.isShown()){
		var data = tbl_estado.row(this).data();
	}//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
    $("#modal_editar").modal('show');
    document.getElementById('txt_estado_editar').value=data.nombre_estado;
    document.getElementById('txt_idtestado').value=data.cod_estado;
})

$('#tabla_estado').on('click','.eliminar',function(){
	var data = tbl_estado.row($(this).parents('tr')).data();//En tamaño escritorio
	if(tbl_estado.row(this).child.isShown()){
		var data = tbl_estado.row(this).data();
	}//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
    $("#modal_eliminar").modal('show');
    document.getElementById('txt_idestado').value=data.cod_estado;
})

function AbrirRegistro(){
    $("#modal_registro").modal({backdrop:'static',keyboard:false})
    $("#modal_registro").modal('show');
}

function Registrar_estado(){
    let tbl_estado = document.getElementById('txt_estado').value;
    if(tbl_estado.length==0){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":"../controller/estado/controlador_registro_estado.php",
        type:'POST',
        data:{
            a:tbl_estado
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Nuevo Estado Registrado","success").then((value)=>{
                    document.getElementById('txt_estado').value="";
                    tbl_estado.ajax.reload();
                    $("#modal_registro").modal('hide');
                });
            }else{
                Swal.fire("Mensaje de Advertencia","El Estado ingresado ya se encuentra en la base de datos","warning");
            }
        }else{
            return Swal.fire("Mensaje de Error","No se completo el registro","error");            
        }
    })
}

function Modificar_Estado(){
    let cod_estado = document.getElementById('txt_idestado').value;
    let nombre_estado = document.getElementById('txt_estado_editar').value;
    if(nombre_estado.length==0 || cod_estado.length==0){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":"../controller/estado/controlador_modificar_estado.php",
        type:'POST',
        data:{
            cod_estado:cod_estado,
            nombre_estado:nombre_estado
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Datos Actualizados","success").then((value)=>{
                    tbl_estado.ajax.reload();
                    $("#modal_editar").modal('hide');
                });
            }else{
                Swal.fire("Mensaje de Advertencia","El estado ingresado ya se encuentra en la base de datos","warning");
            }
        }else{
            return Swal.fire("Mensaje de Error","No se completo la modificacion","error");            
        }
    })
}

function Eliminar_estado(){
    let cod_estado = document.getElementById('txt_idestado').value;  

    $.ajax({
        "url":"../controller/estado/controlador_eliminar_estado.php",
        type:'POST',
        data:{
            cod_estado:cod_estado,
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Estado Eliminada","success").then((value)=>{
                    tbl_estado.ajax.reload();
                    $("#modal_eliminar").modal('hide');
                });
            }else{
                Swal.fire("Mensaje de Advertencia","El estado ya se encuentra en la base de datos","success");
            }
        }else{
            return Swal.fire("Mensaje de Error","No se completo la modificacion","error");            
        }
    })
}
