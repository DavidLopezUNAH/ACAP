var tbl_grados;
function listar_grado(){
    tbl_grados = $("#tabla_grado").DataTable({
        "ordering":false,   
        "bLengthChange":true,
        "searching": { "regex": false },
        "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
        "pageLength": 10,
        "destroy":true,
        "async": false ,
        "processing": true,
        "ajax":{
            "url":"../controller/grado/controlador_listar_grado.php",
            type:'POST'
        },
        "columns":[
            {"defaultContent":""},
            {"data":"nombre_grado"},
            {"defaultContent":"<button class='editar btn btn-primary'><i class='fa fa-edit'></i></button>&nbsp&nbsp;<button class='eliminar btn btn-danger'><i class='fa fa-trash'></i></button>"},
            
        ],
  
        "language":idioma_espanol,
        select: true
    });
    tbl_grados.on('draw.td',function(){
      var PageInfo = $("#tabla_grado").DataTable().page.info();
      tbl_grados.column(0, {page: 'current'}).nodes().each(function(cell, i){
        cell.innerHTML = i + 1 + PageInfo.start;
      });
    });
}

$('#tabla_grado').on('click','.editar',function(){
	var data = tbl_grados.row($(this).parents('tr')).data();//En tamaño escritorio
	if(tbl_grados.row(this).child.isShown()){
		var data = tbl_grados.row(this).data();
	}//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
    $("#modal_editar").modal('show');
    document.getElementById('txt_grado_editar').value=data.nombre_grado;
    document.getElementById('txt_idgrado').value=data.cod_grado;

})

$('#tabla_grado').on('click','.eliminar',function(){
	var data = tbl_grados.row($(this).parents('tr')).data();//En tamaño escritorio
	if(tbl_grados.row(this).child.isShown()){
		var data = tbl_grados.row(this).data();
	}//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
    $("#modal_eliminar").modal('show');
    document.getElementById('txt_idgrado').value=data.cod_grado;
})

function AbrirRegistro(){
    $("#modal_registro").modal({backdrop:'static',keyboard:false})
    $("#modal_registro").modal('show');
}
function Registrar_Grado(){
    let tbl_grado= document.getElementById('txt_grado').value;
    if(tbl_grado.length==0){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":"../controller/grado/controlador_registro_grado.php",
        type:'POST',
        data:{
            a:tbl_grado
           
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Nuevo Grado Academico  Registrado","success").then((value)=>{
                    document.getElementById('txt_grado').value="";
                    tbl_grados.ajax.reload();
                    $("#modal_registro").modal('hide');
                });
            }else{
                Swal.fire("Mensaje de Advertencia","El grado academico ya se encuentra en la base de datos","warning");
            }
        }else{
            return Swal.fire("Mensaje de Error","No se completo el registro","error");            
        }
    })
}

function Modificar_Grado(){
    let id   = document.getElementById('txt_idgrado').value;
    let grado = document.getElementById('txt_grado_editar').value;
    if(grado.length==0 || id.length==0){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":"../controller/grado/controlador_modificar_grado.php",
        type:'POST',
        data:{
            id:id,
            gra:grado
            
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Datos Actualizados","success").then((value)=>{
                    tbl_grados.ajax.reload();
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

function Eliminar_Grado(){
    let grado = document.getElementById('txt_idgrado').value;  
    $.ajax({
        "url":"../controller/grado/controlador_eliminar_grado.php",
        type:'POST',
        data:{
            grado:grado,
        }
    }).done(function(resp){
        Swal.fire("Mensaje de Confirmacion","Grado academico Eliminado","success").then((value)=>{
            tbl_grados.ajax.reload();
            $("#modal_eliminar").modal('hide');
        });        
    })
}




















