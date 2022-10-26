var  tbl_genero;
function Listar_Genero(){
    tbl_genero = $("#tabla_genero").DataTable({
        "ordering":false,   
        "bLengthChange":true,
        "searching": { "regex": false },
        "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
        "pageLength": 10,
        "destroy":true,
        "async": false ,
        "processing": true,
        "ajax":{
            "url":"../controlador/Genero/controlador_listar_genero.php",
            type:'POST'
        },
        "columns":[
            {"defaultContent":""},
            {"data":"nombre_genero"},

            {
                render: function(data,type,row){
                        if(data=='ACTIVO'){
                        return '<span class="badge bg-success">ACTIVO</span>';
                        }else{
                        return '<span class="badge bg-danger">INACTIVO</span>';
                        }
                }   
            },
            {"defaultContent":"<button class='editar btn btn-primary'><i class='fa fa-edit'></i></button>"},
            
        ],
  
        "language":idioma_espanol,
        select: true
    });
    tbl_genero.on('draw.td',function(){
      var PageInfo = $("#tabla_genero").DataTable().page.info();
      tbl_genero.column(0, {page: 'current'}).nodes().each(function(cell, i){
        cell.innerHTML = i + 1 + PageInfo.start;
      });
    });
}

$('#tabla_genero').on('click','.editar',function(){
	var data = tbl_genero.row($(this).parents('tr')).data();//En tamaño escritorio
	if(tbl_genero.row(this).child.isShown()){
		var data = tbl_genero.row(this).data();
	}//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
    $("#modal_editar").modal('show');
    document.getElementById('txt_genero_editar').value=data.nombre_genero;
    document.getElementById('txt_idgenero').value=data.cod_genero;

})


function AbrirRegistro(){
    $("#modal_registro").modal({backdrop:'static',keyboard:false})
    $("#modal_registro").modal('show');
}

function Registrar_Genero(){
    let genero = document.getElementById('txt_genero').value;
    if(genero.length==0){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":"../controlador/Genero/controlador_registrar_genero.php",
        type:'POST',
        data:{
            a:genero
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Nuevo genero Registrado","success").then((value)=>{
                    document.getElementById('txt_genero').value="";
                    tbl_genero.ajax.reload();
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
    let id   = document.getElementById('txt_idgenero').value;
    let genero = document.getElementById('txt_genero_editar').value;
    let esta = document.getElementById('select_estatus').value;
    if(genero.length==0 || id.length==0){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":"../controlador/Genero/controlador_modificar_genero.php",
        type:'POST',
        data:{
            id:id,
            are:genero,
            esta:esta
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Datos Actualizados","success").then((value)=>{
                    tbl_genero.ajax.reload();
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