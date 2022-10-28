var  tbl_tipoacreditacion;
function listar_tipoacreditacion(){
    tbl_tipoacreditacion = $("#tabla_tipoacreditacion").DataTable({
        "ordering":false,   
        "bLengthChange":true,
        "searching": { "regex": false },
        "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
        "pageLength": 10,
        "destroy":true,
        "async": false ,
        "processing": true,
        "ajax":{
            "url":"../controller/tipoacreditacion/controlador_listar_tipoacreditacion.php",
            type:'POST'
        },
        "columns":[
            {"defaultContent":""},
            {"data":"nombre_tipo_acreditacion"},
            {"data":"cod_grado",
           
            },
            {"defaultContent":"<button class='editar btn btn-primary'><i class='fa fa-edit'></i></button>"},
            
        ],
  
        "language":idioma_espanol,
        select: true
    });
    tbl_tipoacreditacion.on('draw.td',function(){
      var PageInfo = $("#tabla_tipoacreditacion").DataTable().page.info();
      tbl_tipoacreditacion.column(0, {page: 'current'}).nodes().each(function(cell, i){
        cell.innerHTML = i + 1 + PageInfo.start;
      });
    });
}

$('#tabla_tipoacreditacion').on('click','.editar',function(){
	var data = tbl_tipoacreditacion.row($(this).parents('tr')).data();//En tamaño escritorio
	if(tbl_tipoacreditacion.row(this).child.isShown()){
		var data = tbl_tipoacreditacion.row(this).data();
	}//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
    $("#modal_editar").modal('show');
    document.getElementById('txt_tipoacreditacion_editar').value=data.nombre_tipo_acreditacion;
    document.getElementById('select_grado_editar').value=data.cod_grado;
})


function AbrirRegistro(){
    $("#modal_registro").modal({backdrop:'static',keyboard:false})
    $("#modal_registro").modal('show');
}

function Registrar_TipoAcreditacion(){
    let tipoacreditacion = document.getElementById('txt_tipoacreditacion').value;
    let grado = document.getElementById('select_grado').value;
    if(tipoacreditacion.length==0 || grado.length==0){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":"../controller/tipoacreditacion/controlador_registro_tipoacreditacion.php",
        type:'POST',
        data:{
            tipoacreditacion:tipoacreditacion,
            grado:grado
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Nuevo Tipo Acreditacion Registrado","success").then((value)=>{
                    document.getElementById('txt_tipoacreditacion').value="";
                    document.getElementById('select_grado').value=""
                    tbl_tipoacreditacion.ajax.reload();
                    $("#modal_registro").modal('hide');
                });
            }else{
                Swal.fire("Mensaje de Advertencia","El tipo de acreditacion ingresada ya se encuentra registrada","warning");
            }
        }else{
            return Swal.fire("Mensaje de Error","No se completo el registro","error");            
        }
    })
}

function Modificar_TipoAcreditacion(){
    let tipoacreditacion   = document.getElementById('txt_tipoacreditacion_editar').value;
    let grado = document.getElementById('select_grado_editar').value;
    if(tipoacreditacion.length==0 || grado.length==0){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":"../controller/tipoacreditacion/controlador_modificar_tipoacreditacion.php",
        type:'POST',
        data:{
            tipoacreditacion:tipoacreditacion,
            grado:grado
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Datos Actualizados","success").then((value)=>{
                    tbl_tipoacreditacion.ajax.reload();
                    $("#modal_editar").modal('hide');
                });
            }else{
                Swal.fire("Mensaje de Advertencia","El tipo de acreditacion ingresada ya se encuentra en la base de datos","warning");
            }
        }else{
            return Swal.fire("Mensaje de Error","No se completo la modificacion","error");            
        }
    })
}

function Cargar_Select_grado(){
    $.ajax({
        "url":"../controller/tipoacreditacion/controlador_cargar_select_grado.php",
        type:'POST'
    }).done(function(resp){
        let data = JSON.parse(resp);
        if(data.length>0){
            let cadena = "";
            for (let i = 0; i < data.length; i++) {
                cadena+="<option value='"+data[i][0]+"'>"+data[i][1]+"</option>";
            }
            document.getElementById('select_grado').innerHTML=cadena;
            document.getElementById('select_grado_editar').innerHTML=cadena;

        }else{
            cadena+="<option value=''>No hay grado disponible</option>";
            document.getElementById('select_grado').innerHTML=cadena;
            document.getElementById('select_grado_editar').innerHTML=cadena;

        }
    })
}

