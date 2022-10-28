var  tbl_documentos;
function listar_documentos(){
    tbl_documentos = $("#tabla_documentos").DataTable({
        "ordering":false,   
        "bLengthChange":true,
        "searching": { "regex": false },
        "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
        "pageLength": 10,
        "destroy":true,
        "async": false ,
        "processing": true,
        "ajax":{
            "url":"../controller/documentos/controlador_listar_documentos.php",
            type:'POST'
        },
        "columns":[
            {"defaultContent":""},
            {"data":"nombre_documento"},
            {"data":"URL"},
            {"data":"cod_tipo_documento"},
            {"data":"cod_solicitud"},
            
            {"defaultContent":"<button class='editar btn btn-primary'><i class='fa fa-edit'></i></button>"},
            
        ],
  
        "language":idioma_espanol,
        select: true
    });
    tbl_documentos.on('draw.td',function(){
      var PageInfo = $("#tabla_documentos").DataTable().page.info();
      tbl_documentos.column(0, {page: 'current'}).nodes().each(function(cell, i){
        cell.innerHTML = i + 1 + PageInfo.start;
      });
    });
}

$('#tabla_documentos').on('click','.editar',function(){
	var data = tbl_documentos.row($(this).parents('tr')).data();//En tamaño escritorio
	if(tbl_documentos.row(this).child.isShown()){
		var data = tbl_documentos.row(this).data();
	}//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
    $("#modal_editar").modal('show');
    document.getElementById('txt_nombre_documento_editar').value=data.nombre_documento;
    document.getElementById('txt_URL_editar').value=data.URL;
    document.getElementById('select_tipo_doc_editar').value=data.cod_tipo_documento;
    document.getElementById('select_solicitd_editar').value=data.cod_solicitud;

})


function AbrirRegistro(){
    $("#modal_registro").modal({backdrop:'static',keyboard:false})
    $("#modal_registro").modal('show');
}

function Registrar_Documentos(){
    let nombre_documento = document.getElementById('txt_nombre_documento').value;
    let URL = document.getElementById('txt_URL').value;
    let tipo_doc = document.getElementById('select_tipo_doc').value;
    let solicitd = document.getElementById('select_solicitd').value;
    if(nombre_documento.length==0 || URL.length==0 || tipo_doc.length==0 | solicitd.length==0    ){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":"../controller/documentos/controlador_registro_documentos.php",
        type:'POST',
        data:{
            nombre_documento:nombre_documento,
            URL:URL,
            tipo_doc:tipo_doc,
            solicitd: solicitd,
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Nuevo Area Registrado","success").then((value)=>{
                    document.getElementById('txt_nombre_documento').value="";
                    document.getElementById('txt_URL').value="";
                    document.getElementById('select_tipo_doc').value=""
                    solicitd = document.getElementById('select_solicitd').value=""
                    tbl_documentos.ajax.reload();
                    $("#modal_registro").modal('hide');
                });
            }else{
                Swal.fire("Mensaje de Advertencia","El documento ingresado ya se encuentra registrado","warning");
            }
        }else{
            return Swal.fire("Mensaje de Error","No se completo el registro","error");            
        }
    })
}

function Modificar_Documento(){
    let nombre_documento = document.getElementById('txt_nombre_documento').value;
    let URL = document.getElementById('txt_URL').value;
    let tipo_doc = document.getElementById('select_tipo_doc').value;
    let solicitd = document.getElementById('select_solicitd').value;
    if(nombre_documento.length==0 || URL.length==0 || tipo_doc.length==0 | solicitd.length==0    ){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":"../controller/documentos/controlador_modificar_documentos.php",
        type:'POST',
        data:{
            nombre_documento:nombre_documento,
            URL:URL,
            tipo_doc:tipo_doc,
            solicitd: solicitd
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Datos Actualizados","success").then((value)=>{
                    tbl_documentos.ajax.reload();
                    $("#modal_editar").modal('hide');
                });
            }else{
                Swal.fire("Mensaje de Advertencia","El documento ingresado ya se encuentra en la base de datos","warning");
            }
        }else{
            return Swal.fire("Mensaje de Error","No se completo la modificacion","error");            
        }
    })
}

function Cargar_Select_tipo_documento(){
    $.ajax({
        "url":"../controller/documentos/controlador_cargar_select_tipo_documento.php",
        type:'POST'
    }).done(function(resp){
        let data = JSON.parse(resp);
        if(data.length>0){
            let cadena = "";
            for (let i = 0; i < data.length; i++) {
                cadena+="<option value='"+data[i][0]+"'>"+data[i][1]+"</option>";
            }
            document.getElementById('select_tipo_doc').innerHTML=cadena;
            document.getElementById('select_tipo_doc_editar').innerHTML=cadena;

        }else{
            cadena+="<option value=''>No hay departamento disponible</option>";
            document.getElementById('select_tipo_doc').innerHTML=cadena;
            document.getElementById('select_tipo_doc_editar').innerHTML=cadena;

        }
    })
}   
function Cargar_Select_Cod_Solicitud(){
    $.ajax({
        "url":"../controller/documentos/controlador_cargar_select_Cod_Solicitud.php",
        type:'POST'
    }).done(function(resp){
        let data = JSON.parse(resp);
        if(data.length>0){
            let cadena = "";
            for (let i = 0; i < data.length; i++) {
                cadena+="<option value='"+data[i][0]+"'>"+data[i][1]+"</option>";
            }
            document.getElementById('select_solicitd').innerHTML=cadena;
            document.getElementById('select_solicitd_editar').innerHTML=cadena;

        }else{
            cadena+="<option value=''>No hay departamento disponible</option>";
            document.getElementById('select_solicitd').innerHTML=cadena;
            document.getElementById('select_solicitd_editar').innerHTML=cadena;

        }
    })
}