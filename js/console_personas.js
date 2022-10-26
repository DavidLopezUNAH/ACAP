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
            {"defaultContent":"<button class='editar btn btn-primary'><i class='fa fa-edit'></i></button>"},
            {"defaultContent":"<button class='eliminar btn btn-primary'><i class='fa fa-trash'></i></button>"},
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

function Cargar_Select_ECivil(){
    $.ajax({
        "url":"../controller/usuario/controlador_cargar_estadocivil.php",
        type:'POST'
    }).done(function(resp){
        let data = JSON.parse(resp);
        if(data.length>0){
            let cadena = "";
            for (let i = 0; i < data.length; i++) {
                cadena+="<option value='"+data[i][0]+"'>"+data[i][1]+"</option>";
            }
            document.getElementById('select_ecivil').innerHTML=cadena;
            document.getElementById('select_area_editar').innerHTML=cadena;

        }else{
            cadena+="<option value=''>No hay empleados disponibles</option>";
            document.getElementById('select_area').innerHTML=cadena;
            document.getElementById('select_area_editar').innerHTML=cadena;
        }
    })
}