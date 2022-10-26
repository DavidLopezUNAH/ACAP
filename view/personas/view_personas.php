<script src="../js/console_personas.js?rev=<?php echo time();?>"></script>
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">MANTENIMIENTO DE LAS PERSONAS</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Personas</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <!-- /.col-md-6 -->
          <div class="col-lg-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title"><b>Listado de Personas</b></h3>
                <button class="btn btn-danger btn-sm float-right" onclick="AbrirRegistro()"> <i class="fas fa-plus"> </i> Agregar una Nueva Persona</button>
              </div>
              <div class="card-body">
              <table id="tabla_personas" class="display" style="width:100%">
                  <thead>
                      <tr>
                          <th>Codigo</th>
                          <th>Primer Nombre</th>
                          <th>Segundo Nombre</th>
                          <th>Primer Apellido</th>
                          <th>Segundo Apellido</th>
                          <th>Fecha de Nacimiento</th>
                          <th>Grado Academico</th>
                          <th>Estado Civil</th>
                          <th>Tipo de Persona</th>
                          <th>Pais</th>
                          <th>Genero</th>
                          <th>Acción para Editar</th>
                          <th>Acción para Eliminar</th>
                      </tr>
                  </thead>
              </table>
              </div>
            </div>

          </div>
          <!-- /.col-md-6 -->
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->
<!-- Modal -->
<div class="modal fade" id="modal_registro" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">REGISTRO DE PERSONAS</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-12">
                <label for="">Ingrese el Primer Nombre:</label>
                <input type="text" class="form-control" id="txt_pnombre">
                <label for="">Ingrese el Segundo Nombre:</label>
                <input type="text" class="form-control" id="txt_snombre">
                <label for="">Ingrese el Primer Apellido:</label>
                <input type="text" class="form-control" id="txt_papellido">
                <label for="">Ingrese el Segundo Apellido:</label>
                <input type="text" class="form-control" id="txt_sapellido">
                <label for="">Ingrese la Fecha de Nacimiento:</label>
                <input type="date" class="form-control" id="txt_fechnac">
                <label for="">Ingrese el Grado que posee esta persona:</label>
                <input type="text" class="form-control" id="txt_grado">
                <div class="col-6">
              <label for="">AREA</label>
              <select class="js-example-basic-single" id="select_ecivil" style="width:100%">
              </select>
            </div>
                  <label for="">Ingrese el Tipo de Persona:</label>
                <select name="" id="select_tpersona" class="form-control">
                      <option value=1>PAR EVALUADOR</option>
                      <option value=2>PAR</option>
                  </select>
                <label for="">Ingrese el Pais:</label>
                <select name="" id="select_pais" class="form-control">
                      <option value=1>GUATEMALA</option>
                      <option value=2>BRASIL</option>
                  </select>
                <label for="">Ingrese el Genero:</label>
                <select name="" id="select_genero" class="form-control">
                      <option value=1>MASCULINO</option>
                      <option value=2>FEMENINO</option>
                  </select>             
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-success" onclick="Registrar_Persona()">Ingresar</button>
      </div>
    </div>
  </div>
</div>  
   <script>
      $(document).ready(function() {
        listar_personas();
      } );
    </script>