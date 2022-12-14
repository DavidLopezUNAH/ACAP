var  tbl_persona;
function listar_personas(){
    tbl_persona = $("#tabla_personas").DataTable({
        "ordering":false,   
        "bLengthChange":true,
        "searching": { "regex": false },
        "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
        "pageLength": 10,
        "destroy":true,
        "async": false ,
        "processing": true,
        "ajax":{
            "url":"../controller/personas/controlador_listar_personas.php",
            type:'POST'
        },
        "columns":[
            {"defaultContent":""},
            {"data":"primer_nombre"},
            {"data":"segundo_nombre"},
            {"data":"primer_apellido"},
            {"data":"segundo_apellido"},
            {"data":"fecha_nac"},
            {"data":"grado_academico"},
            {"data":"nombre_estado_civil"},
            {"data":"nombre_tipo_persona"},
            {"data":"nombre_pais"},
            {"data":"nombre_genero"},
            {"defaultContent":"<button class='editar btn btn-primary btn-sm'><i class='fa fa-edit'></i></button>&nbsp;<button class='eliminar btn btn-danger btn-sm'><i class='fa fa-trash'></i></button>"},
        ],
  
        "language":idioma_espanol,
        select: true
    });
    tbl_persona.on('draw.td',function(){
      var PageInfo = $("#tabla_personas").DataTable().page.info();
      tbl_persona.column(0, {page: 'current'}).nodes().each(function(cell, i){
        cell.innerHTML = i + 1 + PageInfo.start;
      });
    });
}

function AbrirRegistro(){
    $("#modal_registro").modal({backdrop:'static',keyboard:false})
    $("#modal_registro").modal('show');
}


$('#tabla_personas').on('click','.editar',function(){
	var data = tbl_persona.row($(this).parents('tr')).data();//En tamaño escritorio
	if(tbl_persona.row(this).child.isShown()){
		var data = tbl_persona.row(this).data();
	}//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
    $("#modal_editar").modal('show');
    document.getElementById('txt_idpersona').value=data.cod_persona;
    document.getElementById('txt_pnombre_editar').value=data.primer_nombre;
    document.getElementById('txt_snombre_editar').value=data.segundo_nombre;
    document.getElementById('txt_papellido_editar').value=data.primer_apellido;
    document.getElementById('txt_sapellido_editar').value=data.segundo_apellido;
    document.getElementById('txt_fechnac_editar').value=data.fecha_nac;
    document.getElementById('txt_grado_editar').value=data.grado_academico;
    $("#select_ecivil_editar").select2().val(data.cod_estado_civil).trigger('change.select2');
    $("#select_tpersona_editar").select2().val(data.cod_tipo_persona).trigger('change.select2');
    $("#select_pais_editar").select2().val(data.cod_pais).trigger('change.select2');
    $("#select_genero_editar").select2().val(data.cod_genero).trigger('change.select2');
})

$('#tabla_personas').on('click','.eliminar',function(){
	var data = tbl_persona.row($(this).parents('tr')).data();//En tamaño escritorio
	if(tbl_persona.row(this).child.isShown()){
		var data = tbl_persona.row(this).data();
	}//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
    $("#modal_eliminar").modal('show');
    document.getElementById('txt_idpersona').value=data.cod_persona;
})

function Registrar_Persona(){
    let p_nombre = document.getElementById('txt_pnombre').value;
    let s_nombre = document.getElementById('txt_snombre').value;
    let p_apellido = document.getElementById('txt_papellido').value;
    let s_apellido = document.getElementById('txt_sapellido').value;
    let fech_nac = document.getElementById('txt_fechnac').value;
    let grado = document.getElementById('txt_grado').value;
    let e_civil = document.getElementById('select_ecivil').value;
    let t_persona = document.getElementById('select_tpersona').value;
    let pais = document.getElementById('select_pais').value;
    let genero = document.getElementById('select_genero').value;
    if(p_nombre.length==0 ||s_nombre.length==0 ||p_apellido.length==0 ||s_apellido.length==0 || fech_nac.length==0
      || grado.length==0 ||e_civil.length==0 ||t_persona.length==0 || pais.length==0 ||genero.length==0){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }
  
    $.ajax({
        "url":"../controller/personas/controlador_registro_personas.php",
        type:'POST',
        data:{
            p_nombre:p_nombre,
            s_nombre:s_nombre,
            p_apellido:p_apellido,
            s_apellido:s_apellido,
            fech_nac:fech_nac,
            grado : grado ,
            e_civil:e_civil,
            t_persona:t_persona,
            pais:pais,
            genero:genero
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Nueva Persona Registrada","success").then((value)=>{
                    document.getElementById('txt_pnombre').value="";
                    document.getElementById('txt_snombre').value="";
                    document.getElementById('txt_papellido').value="";
                    document.getElementById('txt_sapellido').value="";
                    document.getElementById('txt_fechnac').value="";
                    document.getElementById('txt_grado').value="";
                    document.getElementById('select_ecivil').value="";                  
                    document.getElementById('select_tpersona').value="";
                    document.getElementById('select_pais').value="";
                    document.getElementById('select_genero').value="";
                    tbl_persona.ajax.reload();
                    $("#modal_registro").modal('hide');
                });
            }else{
                Swal.fire("Mensaje de Advertencia","La persona ingresada ya se encuentra en la base de datos","warning");
            }
        }else{
            return Swal.fire("Mensaje de Error","No se completo el registro","error");            
        }
    })
  }

function Modificar_Persona(){
    let id = document.getElementById('txt_idpersona').value;
    let p_nombre = document.getElementById('txt_pnombre_editar').value;
    let s_nombre = document.getElementById('txt_snombre_editar').value;
    let p_apellido = document.getElementById('txt_papellido_editar').value;
    let s_apellido = document.getElementById('txt_sapellido_editar').value;
    let fech = document.getElementById('txt_fechnac_editar').value;
    let grado = document.getElementById('txt_grado_editar').value;
    let e_civil = document.getElementById('select_ecivil_editar').value;
    let t_persona = document.getElementById('select_tpersona_editar').value;
    let pais = document.getElementById('select_pais_editar').value;
    let genero = document.getElementById('select_genero_editar').value;
    if(id.length==0 || p_nombre.length==0 ||s_nombre.length==0 ||p_apellido.length==0 ||s_apellido.length==0 || fech.length==0
      || grado.length==0 ||e_civil.length==0 ||t_persona.length==0 || pais.length==0 ||genero.length==0){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }
  
    $.ajax({
        "url":"../controller/personas/controlador_modificar_personas.php",
        type:'POST',
        data:{
            id :id,
            p_nombre:p_nombre,
            s_nombre:s_nombre,
            p_apellido:p_apellido,
            s_apellido:s_apellido,
            fech:fech,
            grado : grado,
            e_civil:e_civil,
            t_persona:t_persona,
            pais:pais,
            genero:genero
        }
    }).done(function(resp){
        if(resp>0){            
                Swal.fire("Mensaje de Confirmacion","Datos de la persona actualizados","success").then((value)=>{
                    tbl_persona.ajax.reload();
                    $("#modal_editar").modal('hide');
                });
        }else{
            return Swal.fire("Mensaje de Error","No se completo la actualizacion","error");            
        }
    })
}


function Cargar_Select_EstadoCivil(){
    $.ajax({
        "url":"../controller/personas/controlador_cargar_estadocivil.php",
        type:'POST'
    }).done(function(resp){
        let data = JSON.parse(resp);
        if(data.length>0){
            let cadena = "";
            for (let i = 0; i < data.length; i++) {
                cadena+="<option value='"+data[i][0]+"'>"+data[i][1]+"</option>";
            }
            document.getElementById('select_ecivil').innerHTML=cadena;
            document.getElementById('select_ecivil_editar').innerHTML=cadena;

        }else{
            cadena+="<option value=''>No hay Estados Civiles disponibles</option>";
            document.getElementById('select_ecivil').innerHTML=cadena;            
            document.getElementById('select_ecivil_editar').innerHTML=cadena;
        }
    })
}

function Cargar_Select_TipoPersona(){
    $.ajax({
        "url":"../controller/personas/controlador_cargar_tipopersona.php",
        type:'POST'
    }).done(function(resp){
        let data = JSON.parse(resp);
        if(data.length>0){
            let cadena = "";
            for (let i = 0; i < data.length; i++) {
                cadena+="<option value='"+data[i][0]+"'>"+data[i][1]+"</option>";
            }
            document.getElementById('select_tpersona').innerHTML=cadena;
            document.getElementById('select_tpersona_editar').innerHTML=cadena;

        }else{
            cadena+="<option value=''>No hay Tipos de Personas disponibles</option>";
            document.getElementById('select_tpersona').innerHTML=cadena;
            document.getElementById('select_tpersona_editar').innerHTML=cadena;
        }
    })
}

function Cargar_Select_Pais(){
    $.ajax({
        "url":"../controller/personas/controlador_cargar_pais.php",
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
            cadena+="<option value=''>No hay Paises disponibles</option>";
            document.getElementById('select_pais').innerHTML=cadena;
            document.getElementById('select_pais_editar').innerHTML=cadena;
        }
    })
}

function Cargar_Select_Genero(){
    $.ajax({
        "url":"../controller/personas/controlador_cargar_genero.php",
        type:'POST'
    }).done(function(resp){
        let data = JSON.parse(resp);
        if(data.length>0){
            let cadena = "";
            for (let i = 0; i < data.length; i++) {
                cadena+="<option value='"+data[i][0]+"'>"+data[i][1]+"</option>";
            }
            document.getElementById('select_genero').innerHTML=cadena;
            document.getElementById('select_genero_editar').innerHTML=cadena;

        }else{
            cadena+="<option value=''>No hay Generos disponibles</option>";
            document.getElementById('select_genero').innerHTML=cadena;
            document.getElementById('select_genero_editar').innerHTML=cadena;
        }
    })
}

function Eliminar_Persona(){
    let id = document.getElementById('txt_idpersona').value;  

    $.ajax({
        "url":"../controller/personas/controlador_eliminar_persona.php",
        type:'POST',
        data:{
            id:id,
        }
    }).done(function(resp){
        Swal.fire("Mensaje de Confirmacion","Persona Eliminada","success").then((value)=>{
            tbl_persona.ajax.reload();
            $("#modal_eliminar").modal('hide');
        });        
    })
}