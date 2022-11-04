<script src="../js/console_documentos.js?rev=<?php echo time();?>"></script>
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">MANTENIMIENTO DOCUMENTOS </h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Documentos</li>
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
                <button class="btn btn-danger btn-sm float-right" onclick="AbrirRegistro()"> <i class="fas fa-plus"> </i>Nuevo Registro</button>
              </div>
              <div class="card-body">
              <table id="tabla_documentos" class="display" style="width:100%">
                  <thead>
                      <tr>
                          <th>#</th>
                          <th>Nombre de Documento</th>
                          <th>URL</th>
                          <th>Cod Tipo  Documento</th>
                          <th>Cod Solicitud</th>
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
        <h5 class="modal-title" id="exampleModalLabel">REGISTRO DE DOCUMENTOS</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-12">
                <label for="">Nombre de Documentos</label>
                <input type="text" class="form-control" id="txt_area">
            </div>
            <div class="col-12">
                <label for="">URL</label>
                <input type="text" class="form-control" id="txt_des">
            </div>
            <div class="col-6">
              <label for="">Cod Tipo Documento</label>
              <select class="js-example-basic-single" id="select_tipo_doc" style="width:100%">
              </select>
            </div>
            <div class="col-6">
              <label for="">Cod Solicitud </label>
              <select class="js-example-basic-single" id="select_solicitd" style="width:100%">
              </select>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success" onclick="Registrar_Documentos()">REGISTRAR</button>
      </div>
    </div>
  </div>
</div>
<!-- Modal de editar -->
<div class="modal fade" id="modal_editar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">EDITAR DATOS DE DOCUMENTOS</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
        <div class="col-12">
                <label for="">Nombre de Documentos</label>
                <input type="text" class="form-control" id="txt_docu">
            </div>
            <div class="col-12">
                <label for="">URL</label>
                <input type="text" class="form-control" id="txt_url">
            </div>
            <div class="col-6">
              <label for="">Cod Tipo Documento</label>
              <select class="js-example-basic-single" id="select_tipo_doc_editar" style="width:100%">
              </select>
            </div>
            <div class="col-6">
              <label for="">Cod Solicitud </label>
              <select class="js-example-basic-single" id="select_solicitd_editar" style="width:100%">
              </select>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success" onclick="Modificar_Documentos()">MODIFICAR</button>
      </div>
    </div>
  </div>
</div>    
    <!-- Modal -->
    <!-- /.content -->
    <script>
      $(document).ready(function() {
        listar_documentos();
        $('.js-example-basic-single').select2();
        Cargar_Select_tipo_documento();
        Cargar_Select_Cod_Solicitud();
      } );
    </script>