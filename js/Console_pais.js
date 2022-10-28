var  tbl_pais;
function listar_pais(){
    tbl_pais = $("#tabla_pais").DataTable({
        "ordering":false,   
        "bLengthChange":true,
        "searching": { "regex": false },
        "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
        "pageLength": 10,
        "destroy":true,
        "async": false ,
        "processing": true,
        "ajax":{
            "url":"../controller/pais/controlador_listar_pais.php",
            type:'POST'
        },
        "columns":[
            {"defaultContent":""},
            {"data":"nombre_pais"},
            {"defaultContent":"<button class='editar btn btn-primary'><i class='fa fa-edit'></i></button>"},
            {"defaultContent":"<button class='eliminar btn btn-primary'><i class='fa fa-trash'></i></button>"},
        ],
  
        "language":idioma_espanol,
        select: true
    });
    tbl_pais.on('draw.td',function(){
      var PageInfo = $("#tabla_pais").DataTable().page.info();
      tbl_pais.column(0, {page: 'current'}).nodes().each(function(cell, i){
        cell.innerHTML = i + 1 + PageInfo.start;
      });
    });
}

$('#tabla_pais').on('click','.editar',function(){
	var data = tbl_pais.row($(this).parents('tr')).data();//En tamaño escritorio
	if(tbl_pais.row(this).child.isShown()){
		var data = tbl_pais.row(this).data();
	}//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
    $("#modal_editar").modal('show');
    document.getElementById('txt_pais_editar').value=data.nombre_pais;
    document.getElementById('txt_idpais').value=data.cod_pais;
})

$('#tabla_pais').on('click','.eliminar',function(){
	var data = tbl_pais.row($(this).parents('tr')).data();//En tamaño escritorio
	if(tbl_pais.row(this).child.isShown()){
		var data = tbl_pais.row(this).data();
	}//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
    $("#modal_eliminar").modal('show');
    document.getElementById('txt_idpais').value=data.cod_pais;
})
function AbrirRegistro(){
    $("#modal_registro").modal({backdrop:'static',keyboard:false})
    $("#modal_registro").modal('show');
}

function Registrar_Pais(){
    let tbl_pais = document.getElementById('txt_pais').value;
    if(tbl_pais.length==0 ){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":"../controller/PAIS/controlador_registro_pais.php",
        type:'POST',
        data:{
           a:tbl_pais,
            
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Datos Actualizados","success").then((value)=>{
                    tbl_tiposolicitudes.ajax.reload();
                    $("#modal_editar").modal('hide');
                });
            }else{
                Swal.fire("Mensaje de Confirmacion","El pais   se registro en la base de datos","success");
            }
        }else{
            return Swal.fire("Mensaje de Error","No se completo la modificacion","error");            
        }
    })
}

function Modificar_Pais(){
    let cod_pais = document.getElementById('txt_idpais').value;
    let nombre_pais  = document.getElementById('txt_pais_editar').value;
    if(nombre_pais.length==0 || cod_pais.length==0){
        Swal.fire("Mensaje de Confirmacion","Datos Actualizados","success");
    }

    $.ajax({
        "url":"../controller/PAIS/controlador_modificar_pais.php",
        type:'POST',
        data:{
            cod_pais:cod_pais,
            nombre_pais:nombre_pais
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Datos Actualizados","success").then((value)=>{
                    tbl_area.ajax.reload();
                    $("#modal_editar").modal('hide');
                });
            }else{
                Swal.fire("Mensaje de Confirmacion","Datos Actualizados","success");
            }
        }else{
            Swal.fire("Mensaje de Confirmacion","Datos Actualizados","success");           
        }
    })
}
function Eliminar_pais(){
    let cod_pais = document.getElementById('txt_idpais').value;  

    $.ajax({
        "url":"../controller/PAIS/controlador_eliminar_pais.php",
        type:'POST',
        data:{
            cod_pais:cod_pais,
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","pais eliminado","success").then((value)=>{
                    tbl_pais.ajax.reload();
                    $("#modal_eliminar").modal('hide');
                });
            }else{
                Swal.fire("Mensaje de Advertencia","El tipo de solicitud ingresada ya se encuentra en la base de datos","warning");
            }
        }else{
            return Swal.fire("Mensaje de Error","No se completo la modificacion","error");            
        }
    })
}
