var  tbl_universidad;
function listar_universidad(){
    tbl_universidad= $("#tabla_universidad").DataTable({
        "ordering":false,   
        "bLengthChange":true,
        "searching": { "regex": false },
        "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
        "pageLength": 10,
        "destroy":true,
        "async": false ,
        "processing": true,
        "ajax":{
            "url":"../controller/universidad/controlador_listar_universidad.php",
            type:'POST'
        },
        "columns":[
            {"defaultContent":""},
            {"data":"nombre_universidad"},
            {"data":"nombre_pais"},
            {"defaultContent":"<button class='editar btn btn-primary'><i class='fa fa-edit'></i></button>"},   
        ],
  
        "language":idioma_espanol,
        select: true
    });
    tbl_universidad.on('draw.td',function(){
      var PageInfo = $("#tabla_universidad").DataTable().page.info();
      tbl_universidad.column(0, {page: 'current'}).nodes().each(function(cell, i){
        cell.innerHTML = i + 1 + PageInfo.start;
      });
    });
}

$('#tabla_universidad').on('click','.editar',function(){
	var data = tbl_universidad.row($(this).parents('tr')).data();//En tamaño escritorio
	if(tbl_universidad.row(this).child.isShown()){
		var data = tbl_universidad.row(this).data();
	}//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
    $("#modal_editar").modal('show');
    document.getElementById('txt_universidad_editar').value=data.nombre_universidad;
    document.getElementById('txt_iduniversidad').value=data.cod_universidad;
    document.getElementById('select_pais_editar').value=data.nombre_pais;
    
})

function AbrirRegistro(){
    $("#modal_registro").modal({backdrop:'static',keyboard:false})
    $("#modal_registro").modal('show');
}

function Registrar_Universidad(){
    let universidad = document.getElementById('txt_universidad').value;
    let nomb = document.getElementById('select_pais').value;
  
    if(universidad.length==0 || nomb.length==0){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":"../controller/universidad/controlador_registro_universidad.php",
        type:'POST',
        data:{
            universidad:universidad,
            nomb:nomb
            
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Nuevo Universidad Registrada","success").then((value)=>{
                    document.getElementById('txt_universidad').value="";
                    document.getElementById('select_pais').value="";
                    tbl_universidad.ajax.reload();
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

function Cargar_Select_pais(){
    $.ajax({
        "url":"../controller/universidad/controlador_cargar_select_pais.php",
        type:'POST'
    }).done(function(resp){
        let data = JSON.parse(resp);
        if(data.length>0){
            let cadena = "";
            for (let i = 0; i < data.length; i++) {
                cadena+="<option value='"+data[i][0]+"'>"+data[i][1]+"</option>";
            }
            document.getElementById('select_pais').innerHTML=cadena;
            document.getElementById('select_pais_editar').innerHTML=cadena;

        }else{
            cadena+="<option value=''>No hay paises disponible</option>";
            document.getElementById('select_pais').innerHTML=cadena;
            document.getElementById('select_pais_editar').innerHTML=cadena;

        }
    })
}


function Modificar_Universidad(){
    let id   = document.getElementById('txt_iduniversidad').value;
    let universidad = document.getElementById('txt_universidad_editar').value;
    if(universidad.length==0 || id.length==0){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":"../controller/universidad/controlador_modificar_universidad.php",
        type:'POST',
        data:{
            id:id,
            uni:universidad
            
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Datos Actualizados","success").then((value)=>{
                    tbl_universidad.ajax.reload();
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

