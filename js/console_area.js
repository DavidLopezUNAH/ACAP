var  tbl_area;
function listar_area(){
    tbl_area = $("#tabla_area").DataTable({
        "ordering":false,   
        "bLengthChange":true,
        "searching": { "regex": false },
        "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
        "pageLength": 10,
        "destroy":true,
        "async": false ,
        "processing": true,
        "ajax":{
            "url":"../controller/area/controlador_listar_area.php",
            type:'POST'
        },
        "columns":[
            {"defaultContent":""},
            {"data":"nombre_area"},
            {"data":"descripcion"},
            {"data":"cod_departamento",
           
            },
            {"defaultContent":"<button class='editar btn btn-primary'><i class='fa fa-edit'></i></button>"},
            
        ],
  
        "language":idioma_espanol,
        select: true
    });
    tbl_area.on('draw.td',function(){
      var PageInfo = $("#tabla_area").DataTable().page.info();
      tbl_area.column(0, {page: 'current'}).nodes().each(function(cell, i){
        cell.innerHTML = i + 1 + PageInfo.start;
      });
    });
}

$('#tabla_area').on('click','.editar',function(){
	var data = tbl_area.row($(this).parents('tr')).data();//En tamaño escritorio
	if(tbl_area.row(this).child.isShown()){
		var data = tbl_area.row(this).data();
	}//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
    $("#modal_editar").modal('show');
    document.getElementById('txt_idearea').value=data.cod_area;
    document.getElementById('txt_area_editar').value=data.nombre_area;
    document.getElementById('txt_des_editar').value=data.descripcion;
    $("#select_dep_editar").select2().val(data.cod_departamento).trigger('change.select2');
})


function AbrirRegistro(){
    $("#modal_registro").modal({backdrop:'static',keyboard:false})
    $("#modal_registro").modal('show');
}

function Registrar_Area(){
    let area = document.getElementById('txt_area').value;
    let des = document.getElementById('txt_des').value;
    let dep = document.getElementById('select_dep').value;
    if(area.length==0 || des.length==0 || dep.length==0){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":"../controller/area/controlador_registro_area.php",
        type:'POST',
        data:{
            area:area,
            des:des,
            dep:dep
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Nuevo Area Registrado","success").then((value)=>{
                    document.getElementById('txt_area').value="";
                    document.getElementById('txt_des').value="";
                    document.getElementById('select_dep').value=""
                    tbl_area.ajax.reload();
                    $("#modal_registro").modal('hide');
                });
            }else{
                Swal.fire("Mensaje de Advertencia","El area ingresada ya se encuentra registrada","warning");
            }
        }else{
            return Swal.fire("Mensaje de Error","No se completo el registro","error");            
        }
    })
}

function Modificar_Area(){
    let id   = document.getElementById('txt_idearea').value;
    let area   = document.getElementById('txt_area_editar').value;
    let des = document.getElementById('txt_des_editar').value;
    let dep = document.getElementById('select_dep_editar').value;
    if(id.length==0 ||area.length==0 || des.length==0 || dep.length==0){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":"../controller/area/controlador_modificar_area.php",
        type:'POST',
        data:{
            id:id,
            area:area,
            des:des,
            dep:dep
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Datos Actualizados","success").then((value)=>{
                    tbl_area.ajax.reload();
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

function Cargar_Select_dep(){
    $.ajax({
        "url":"../controller/area/controlador_cargar_select_departamento.php",
        type:'POST'
    }).done(function(resp){
        let data = JSON.parse(resp);
        if(data.length>0){
            let cadena = "";
            for (let i = 0; i < data.length; i++) {
                cadena+="<option value='"+data[i][0]+"'>"+data[i][1]+"</option>";
            }
            document.getElementById('select_dep').innerHTML=cadena;
            document.getElementById('select_dep_editar').innerHTML=cadena;

        }else{
            cadena+="<option value=''>No hay departamento disponible</option>";
            document.getElementById('select_dep').innerHTML=cadena;
            document.getElementById('select_dep_editar').innerHTML=cadena;

        }
    })
}

