var  tbl_cargo;
function listar_cargo(){
    tbl_cargo = $("#tabla_cargo").DataTable({
        "ordering":false,   
        "bLengthChange":true,
        "searching": { "regex": false },
        "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
        "pageLength": 10,
        "destroy":true,
        "async": false ,
        "processing": true,
        "ajax":{
            "url":"../controller/cargo/controlador_listar_cargo.php",
            type:'POST'
        },
        "columns":[
            {"defaultContent":""},
            {"data":"nombre_cargo"},
            {"data":"descripcion"},
            {"data":"cod_area"},
            {"data":"cod_departamento"},
            
            {"defaultContent":"<button class='editar btn btn-primary'><i class='fa fa-edit'></i></button>"},

        ],
  
        "language":idioma_espanol,
        select: true
    });
    tbl_cargo.on('draw.td',function(){
      var PageInfo = $("#tabla_cargo").DataTable().page.info();
      tbl_cargo.column(0, {page: 'current'}).nodes().each(function(cell, i){
        cell.innerHTML = i + 1 + PageInfo.start;
      });
    });
}

$('#tabla_cargo').on('click','.editar',function(){
	var data = tbl_cargo.row($(this).parents('tr')).data();//En tamaño escritorio
	if(tbl_cargo.row(this).child.isShown()){
		var data = tbl_cargo.row(this).data();
	}//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
    $("#modal_editar").modal('show');
    document.getElementById('txt_cargo_editar').value=data.nombre_cargo;
    document.getElementById('txt_des_editar').value=data.descripcion;
    document.getElementById('select_area_editar').value=data.cod_area;
    document.getElementById('select_dep_editar').value=data.cod_departamento;

})

function AbrirRegistro(){
    $("#modal_registro").modal({backdrop:'static',keyboard:false})
    $("#modal_registro").modal('show');
}

function Registrar_Cargo(){
    let cargo = document.getElementById('txt_cargo').value;
    let des = document.getElementById('txt_des').value;
    let area = document.getElementById('select_area').value;
    let dep = document.getElementById('select_dep').value;
    if(cargo.length==0 || des.length==0 || area.length==0 || dep.length==0){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":"../controller/cargo/controlador_registro_cargo.php",
        type:'POST',
        data:{
            cargo:cargo,
            des:des,
            area:area,
            dep:dep
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Nuevo Cargo Registrado","success").then((value)=>{
                    document.getElementById('txt_cargo').value="";
                    document.getElementById('txt_des').value="";
                    document.getElementById('select_area').value="";                  
                    document.getElementById('select_dep').value="";
                    tbl_cargo.ajax.reload();
                    $("#modal_registro").modal('hide');
                });
            }else{
                Swal.fire("Mensaje de Advertencia","El cargo ingresada ya se encuentra en la base de datos","warning");
            }
        }else{
            return Swal.fire("Mensaje de Error","No se completo el registro","error");            
        }
    })
}

function Modificar_Cargo(){
    let cargo   = document.getElementById('txt_cargo_editar').value;
    let des = document.getElementById('txt_des_editar').value;
    let area = document.getElementById('select_area_editar').value;
    let dep = document.getElementById('select_dep_editar').value;
    if(cargo.length==0 || des.length==0 || area.length==0 || dep.length==0){
        return Swal.fire("Mensaje de Advertencia","Tiene campos vacios","warning");
    }

    $.ajax({
        "url":"../controller/cargo/controlador_modificar_cargo.php",
        type:'POST',
        data:{
            cargo:cargo,
            des:des,
            area:area,
            dep:dep
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmacion","Datos Actualizados","success").then((value)=>{
                    tbl_cargo.ajax.reload();
                    $("#modal_editar").modal('hide');
                });
            }else{
                Swal.fire("Mensaje de Advertencia","El cargo ingresada ya se encuentra en la base de datos","warning");
            }
        }else{
            return Swal.fire("Mensaje de Error","No se completo la modificacion","error");            
        }
    })
}

function Cargar_Select_area(){
    $.ajax({
        "url":"../controller/cargo/controlador_cargar_select_area.php",
        type:'POST'
    }).done(function(resp){
        let data = JSON.parse(resp);
        if(data.length>0){
            let cadena = "";
            for (let i = 0; i < data.length; i++) {
                cadena+="<option value='"+data[i][0]+"'>"+data[i][1]+"</option>";
            }
            document.getElementById('select_area').innerHTML=cadena;
            document.getElementById('select_area_editar').innerHTML=cadena;

        }else{
            cadena+="<option value=''>No hay area disponible</option>";
            document.getElementById('select_area').innerHTML=cadena;
            document.getElementById('select_area_editar').innerHTML=cadena;

        }
    })
}

function Cargar_Select_dep(){
    $.ajax({
        "url":"../controller/cargo/controlador_cargar_select_departamento.php",
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

