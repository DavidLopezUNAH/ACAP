<script src="../js/console_tiposolicitud.js?rev=<?php echo time();?>"></script>
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">MANTENIMIENTO TIPO DE SOLICITUD</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Tipo Solicitud</li>
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
                <h3 class="card-title"><b>Listado de Tipos de Solicitud</b></h3>
                <button class="btn btn-success btn-sm float-right" onclick="AbrirRegistro()"> <i class="fas fa-plus"> </i> Agregar un Nuevo Tipo de Solicitud</button>
              </div>
              <div class="card-body">
              <table id="tabla_tiposolicitud" class="display" style="width:100%">
                  <thead>
                      <tr>
                          <th>Codigo</th>
                          <th>Nombre Tipo de Solicitud</th>
                          <th>Acción </th>
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
        <h5 class="modal-title" id="exampleModalLabel">REGISTRO DE TIPO DE SOLICITUD</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-12">
                <label for="">Ingrese el Nombre del Tipo de Solicitud:</label>
                <input type="text" class="form-control" id="txt_tiposolicitud" onkeypress="return soloLetras(event)">
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-success" onclick="Registrar_TipoSolicitud()">Ingresar</button>
      </div>
    </div>
  </div>
</div>    
<!-- Modal -->
<div class="modal fade" id="modal_editar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">EDITAR DATOS DEL TIPO DE SOLICITUD</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-12">
                <label for="">Nombre del Tipo de Solicitud:</label>
                <input type="text" class="form-control" id="txt_tiposolicitud_editar" onkeypress="return soloLetras(event)">
                <input type="text" id="txt_idtiposolicitud" hidden>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-success" onclick="Modificar_TipoSolicitud()">Modificar</button>
      </div>
    </div>
  </div>
</div>   
<div class="modal fade" id="modal_eliminar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">ELIMINAR DATOS DEL TIPO DE SOLICITUD</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-12">
                <label for="">¿Desea eliminar el tipo de solicitud seleccionado?</label>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
        <button type="button" class="btn btn-success" onclick="Eliminar_TipoSolicitud()">Eliminar</button>
      </div>
    </div>
  </div>
</div>   
   <script>
      $(document).ready(function() {
        listar_tiposolicitud();
      } );
      $('#modal_registro').on('shown.bs.modal', function () {
        $('#txt_tiposolicitud').trigger('focus')
       })
    </script>