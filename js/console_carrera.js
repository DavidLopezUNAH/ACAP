var  tbl_carrerasuniversitarias;
function listar_carrera(){
    tbl_carrerasuniversitarias = $("#tabla_carrerasuniversitarias").DataTable({
        "ordering":false,   
        "bLengthChange":true,
        "searching": { "regex": false },
        "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
        "pageLength": 10,
        "destroy":true,
        "async": false ,
        "processing": true,
        "ajax":{
            "url":"../controller/carreras/controlador_listar_carrera.php",
            type:'POST'
        },
        "columns":[
            {"defaultContent":""},
            {"data":"nombre_carrera"},
            {"data":"nombre_universidad"},
            {"data":"nombre_grado"},
            {"data":"nombre_tipo_acreditacion"},
            {"data":"primer_nombre"},
            {"defaultContent":"<button class='editar btn btn-primary'><i class='fa fa-edit'></i></button>"},
            
        ],
  
        "language":idioma_espanol,
        select: true
    });
    tbl_carrerasuniversitarias.on('draw.td',function(){
      var PageInfo = $("#tabla_carrerasuniversitarias").DataTable().page.info();
      tbl_carrerasuniversitarias.column(0, {page: 'current'}).nodes().each(function(cell, i){
        cell.innerHTML = i + 1 + PageInfo.start;
      });
    });
}

$('#tabla_carrerasuniversitarias').on('click','.editar',function(){
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

function Registrar_carrera(){
    let carrera = document.getElementById('txt_carrera').value;
    let uni = document.getElementById('select_uni').value;
    let gra = document.getElementById('select_grado').value;
    let tacre = document.getElementById('select_tacre').value;
    let perso= document.getElementById('select_perso').value;
    if(carrera.length==0 || uni.length==0 || gra.length==0 || tacre.length==0 || perso.length==0){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":"../controller/carreras/controlador_registro_carrera.php",
        type:'POST',
        data:{
            carrera:carrera,
            uni:uni,
            gra:gra,
            tacre:tacre,
            perso:perso
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Nuevo carrera Registrada","success").then((value)=>{
                     document.getElementById('txt_carrera').value;
                     document.getElementById('select_uni').value;
                     document.getElementById('select_grado').value;
                     document.getElementById('select_tacre').value;
                     document.getElementById('select_perso').value;
                     tbl_carrerasuniversitarias.ajax.reload();
                    $("#modal_registro").modal('hide');
                });
            }else{
                Swal.fire("Mensaje de Advertencia","La carrera ingresada ya se encuentra registrada","warning");
            }
        }else{
            return Swal.fire("Mensaje de Error","No se completo el registro","error");            
        }
    })
}

function Cargar_Select_uni(){
    $.ajax({
        "url":"../controller/carreras/controlador_cargar_select_uni.php",
        type:'POST'
    }).done(function(resp){
        let data = JSON.parse(resp);
        if(data.length>0){
            let cadena = "";
            for (let i = 0; i < data.length; i++) {
                cadena+="<option value='"+data[i][0]+"'>"+data[i][1]+"</option>";
            }
            document.getElementById('select_uni').innerHTML=cadena;
            document.getElementById('select_dep_editar').innerHTML=cadena;

        }else{
            cadena+="<option value=''>No hay universidad disponible</option>";
            document.getElementById('select_uni').innerHTML=cadena;
            document.getElementById('select_dep_editar').innerHTML=cadena;

        }
    })
}

function Cargar_Select_gra(){
    $.ajax({
        "url":"../controller/carreras/controlador_cargar_select_gra.php",
        type:'POST'
    }).done(function(resp){
        let data = JSON.parse(resp);
        if(data.length>0){
            let cadena = "";
            for (let i = 0; i < data.length; i++) {
                cadena+="<option value='"+data[i][0]+"'>"+data[i][1]+"</option>";
            }
            document.getElementById('select_grado').innerHTML=cadena;
            document.getElementById('select_dep_editar').innerHTML=cadena;

        }else{
            cadena+="<option value=''>No hay grado disponible</option>";
            document.getElementById('select_grado').innerHTML=cadena;
            document.getElementById('select_dep_editar').innerHTML=cadena;

        }
    })
}

function Cargar_Select_tacre(){
    $.ajax({
        "url":"../controller/carreras/controlador_cargar_select_tacre.php",
        type:'POST'
    }).done(function(resp){
        let data = JSON.parse(resp);
        if(data.length>0){
            let cadena = "";
            for (let i = 0; i < data.length; i++) {
                cadena+="<option value='"+data[i][0]+"'>"+data[i][1]+"</option>";
            }
            document.getElementById('select_tacre').innerHTML=cadena;
            document.getElementById('select_dep_editar').innerHTML=cadena;

        }else{
            cadena+="<option value=''>No hay grado disponible</option>";
            document.getElementById('select_tacre').innerHTML=cadena;
            document.getElementById('select_dep_editar').innerHTML=cadena;

        }
    })
}   

function Cargar_Select_perso(){
    $.ajax({
        "url":"../controller/carreras/controlador_cargar_select_perso.php",
        type:'POST'
    }).done(function(resp){
        let data = JSON.parse(resp);
        if(data.length>0){
            let cadena = "";
            for (let i = 0; i < data.length; i++) {
                cadena+="<option value='"+data[i][0]+"'>"+data[i][1]+"</option>";
            }
            document.getElementById('select_perso').innerHTML=cadena;
            document.getElementById('select_dep_editar').innerHTML=cadena;

        }else{
            cadena+="<option value=''>No hay grado disponible</option>";
            document.getElementById('select_perso').innerHTML=cadena;
            document.getElementById('select_dep_editar').innerHTML=cadena;

        }
    })
}