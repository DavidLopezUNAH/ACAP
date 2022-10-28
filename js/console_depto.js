var  tbl_departamento;
function Listar_depto(){
    tbl_departamento = $("#tabla_depto").DataTable({
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
            {"data":"nombre_depto"},
            {"data":"descripcion"},
            {"defaultContent":"<button class='editar btn btn-primary'><i class='fa fa-edit'></i></button>"},
            
        ],
  
        "language":idioma_espanol,
        select: true
    });
    tbl_departamento.on('draw.td',function(){
      var PageInfo = $("#tabla_depto").DataTable().page.info();
      tbl_departamento.column(0, {page: 'current'}).nodes().each(function(cell, i){
        cell.innerHTML = i + 1 + PageInfo.start;
      });
    });
}

$('#tabla_depto').on('click','.editar',function(){
	var data = tbl_departamento.row($(this).parents('tr')).data();//En tamaño escritorio
	if(tbl_departamento.row(this).child.isShown()){
		var data = tbl_departamento.row(this).data();
	}//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
    $("#modal_editar").modal('show');
    document.getElementById('txt_depto_editar').value=data.nombre_depto;
    document.getElementById('txt_des_editar').value=data.descripcion;
    
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
                    tbl_departamento.ajax.reload();
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

function Modificar_Depto(){
    let depto  = document.getElementById('txt_depto_editar').value;
    let des= document.getElementById('txt_des_editar').value;
    
    if(depto.length==0 || des.length==0){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":"../controller/Departamento/controlador_modificar_depto.php",
        type:'POST',
        data:{
            depto:depto,
            des:des
            
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Datos Actualizados","success").then((value)=>{
                    tbl_departamento.ajax.reload();
                    $("#modal_editar").modal('hide');
                });
            }else{
                Swal.fire("Mensaje de Advertencia","El departamento ingresado ya se encuentra en la base de datos","warning");
            }
        }else{
            return Swal.fire("Mensaje de Error","No se completo la modificacion","error");            
        }
    })
}