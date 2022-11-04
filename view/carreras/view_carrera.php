<script src="../js/console_carrera.js?rev=<?php echo time();?>"></script>
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">CARRERAS UNIVERSITARIAS</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">CARRERAS</li>
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
                <h3 class="card-title"><b>Listado de carreras</b></h3>
                <button class="btn btn-danger btn-sm float-right" onclick="AbrirRegistro()"> <i class="fas fa-plus"> </i>Nuevo Registro</button>
              </div>
              <div class="card-body">
              <table id="tabla_carrerasuniversitarias" class="display" style="width:100%">
                  <thead>
                      <tr>
                          <th>#</th>
                          <th>Nombre de carrera</th>
                          <th>Universidad</th>
                          <th>Grado Academico</th>
                          <th>Tipo de Acreditacion</th>
                          <th>Persona</th>
                          <th>Accion</th>
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
    <!-- Modal de registro -->
<div class="modal fade" id="modal_registro"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">REGISTRO DE CARRERAS</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-12">
                <label for="">CARRERA</label>
                <input type="text" class="form-control" id="txt_carrera"onkeypress="return soloLetras(event)">
            </div>
            <div class="col-6">
              <label for="">Universidad</label>
              <select class="js-example-basic-single" id="select_uni" style="width:100%">
              </select>
            </div>
            <div class="col-6">
              <label for="">Grado</label>
              <select class="js-example-basic-single" id="select_grado" style="width:100%">
              </select>
            </div>
            <div class="col-6">
              <label for="">Tipo de acreditacion</label>
              <select class="js-example-basic-single" id="select_tacre" style="width:100%">
              </select>
            </div>
            <div class="col-6">
              <label for="">Persona</label>
              <select class="js-example-basic-single" id="select_perso" style="width:100%">
              </select>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success" onclick="Registrar_carrera()">REGISTRAR</button>
      </div>
    </div>
  </div>
</div>
<!-- Modal de editar -->
<div class="modal fade" id="modal_editar" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">EDITAR DATOS DE CARRERA</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-12">
                <input type="text" id="txt_idcarrera" hidden>
                <label for="">CARRERA</label>
                <input type="text" class="form-control" id="txt_carrera_editar"onkeypress="return soloLetras(event)">
            </div>
            <div class="col-6">
              <label for="">Universidad</label>
              <select class="js-example-basic-single" id="select_uni_editar" style="width:100%">
              </select>
            </div>
            <div class="col-6">
              <label for="">Grado</label>
              <select class="js-example-basic-single" id="select_grado_editar" style="width:100%">
              </select>
            </div>
            <div class="col-6">
              <label for="">Tipo de acreditacion</label>
              <select class="js-example-basic-single" id="select_tacre_editar" style="width:100%">
              </select>
            </div>
            <div class="col-6">
              <label for="">Persona</label>
              <select class="js-example-basic-single" id="select_perso_editar" style="width:100%">
              </select>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success" onclick="Modificar_Carrera()">MODIFICAR</button>
      </div>
    </div>
  </div>
</div-->   
     <!-- Modal -->
    <!-- /.content -->
    <script>
      $(document).ready(function() {
        listar_carrera();
        $('.js-example-basic-single').select2();
        Cargar_Select_uni();
        Cargar_Select_gra();
        Cargar_Select_tacre();
        Cargar_Select_perso();
      } );
    </script>