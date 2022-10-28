var  tbl_generos;
function listar_genero(){
    tbl_generos = $("#tabla_genero").DataTable({
        "ordering":false,   
        "bLengthChange":true,
        "searching": { "regex": false },
        "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
        "pageLength": 10,
        "destroy":true,
        "async": false ,
        "processing": true,
        "ajax":{
            "url":"../controller/genero/controlador_listar_genero.php",
            type:'POST'
        },
        "columns":[
            {"defaultContent":""},
            {"data":"nombre_genero"},
            {"defaultContent":"<button class='editar btn btn-primary'><i class='fa fa-edit'></i></button>"},
         
            
        ],
  
        "language":idioma_espanol,
        select: true
    });
    tbl_generos.on('draw.td',function(){
      var PageInfo = $("#tabla_genero").DataTable().page.info();
      tbl_generos.column(0, {page: 'current'}).nodes().each(function(cell, i){
        cell.innerHTML = i + 1 + PageInfo.start;
      });
    });
}

$('#tabla_genero').on('click','.editar',function(){
	var data = tbl_generos.row($(this).parents('tr')).data();//En tamaño escritorio
	if(tbl_generos.row(this).child.isShown()){
		var data = tbl_generos.row(this).data();
	}//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
    $("#modal_editar").modal('show');
    document.getElementById('txt_genero_editar').value=data.nombre_genero;
    

})

$('#tabla_genero').on('click','.eliminar',function(){
	var data = tbl_generos.row($(this).parents('tr')).data();//En tamaño escritorio
	if(tbl_generos.row(this).child.isShown()){
		var data = tbl_generos.row(this).data();
	}//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
    $("#modal_eliminar").modal('show');
    document.getElementById('txt_idtiposolicitud').value=data.cod_genero;
})

function AbrirRegistro(){
    $("#modal_registro").modal({backdrop:'static',keyboard:false})
    $("#modal_registro").modal('show');
}

function Registrar_Genero(){
    let tbl_genero = document.getElementById('txt_genero').value;
    if(tbl_genero.length==0){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":"../controller/genero/controlador_registro_genero.php",
        type:'POST',
        data:{
            a : tbl_genero
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Nuevo genero Registrado","success").then((value)=>{
                    document.getElementById('txt_genero').value="";
                    tbl_generos.ajax.reload();
                    $("#modal_registro").modal('hide');
                });
            }else{
                Swal.fire("Mensaje de Advertencia","El genero ingresada ya se encuentra en la base de datos","warning");
            }
        }else{
            return Swal.fire("Mensaje de Error","No se completo el registro","error");            
        }
    })
}

function Modificar_Genero(){
    let id  = document.getElementById('txt_idgenero').value;
    let genero = document.getElementById('txt_genero_editar').value;
    if(genero.length==0 || id.length==0){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":"../controller/genero/controlador_modificar_genero.php",
        type:'POST',
        data:{
            id:id,
           gene:genero
 
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Datos Actualizados","success").then((value)=>{
                    tbl_generos.ajax.reload();
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
 
    function Eliminar_Genero(){
        let cod_genero = document.getElementById('txt_idgenero').value;  
    
        $.ajax({
            "url":"../controller/genero/controlador_eliminar_genero.php",
            type:'POST',
            data:{
                cod_genero:cod_genero,
            }
        }).done(function(resp){
            if(resp>0){
                if(resp==1){
                    Swal.fire("Mensaje de Confirmacion","Genero Eliminado","success").then((value)=>{
                        tbl_generos.ajax.reload();
                        $("#modal_eliminar").modal('hide');
                    });
                }else{
                    Swal.fire("Mensaje de Advertencia","El tipo de genero ingresado ya se encuentra en la base de datos","warning");
                }
            }else{
                return Swal.fire("Mensaje de Error","No se completo la modificacion","error");            
            }
        })
    }   
