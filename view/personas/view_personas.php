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
                <button class="btn btn-success btn-sm float-right" onclick="AbrirRegistro()"> <i class="fas fa-plus"> </i> Agregar una Nueva Persona</button>
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
                          <th>Acción</th>
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
          <div class="col-6">
            <label for="">Primer Nombre:</label>
            <input type="text" class="form-control" id="txt_pnombre">
          </div>
          <div class="col-6">
            <label for="">Segundo Nombre:</label>
            <input type="text" class="form-control" id="txt_snombre">
          </div>
          <div class="col-6">
            <label for="">Primer Apellido:</label>
            <input type="text" class="form-control" id="txt_papellido">
          </div>
          <div class="col-6">
            <label for="">Segundo Apellido:</label>
            <input type="text" class="form-control" id="txt_sapellido">
          </div>
          <div class="col-6">
            <label for="">Fecha de Nacimiento:</label>
            <input type="date" class="form-control" id="txt_fechnac">
          </div>
          <div class="col-6">
            <label for="">Grado Academico:</label>
            <input type="text" class="form-control" id="txt_grado">
          </div>
          <div class="col-6">
              <label for="">Estado Civil:</label>
              <select class="js-example-basic-single" id="select_ecivil" style="width:100%">
              </select>
            </div>
            <div class="col-6">
              <label for="">Tipo de Persona:</label>
              <select class="js-example-basic-single" id="select_tpersona" style="width:100%">
              </select>
            </div>
            <div class="col-6">
              <label for="">Pais:</label>
              <select class="js-example-basic-single" id="select_pais" style="width:100%">
              </select>
            </div>
            <div class="col-6">
              <label for="">Genero:</label>
              <select class="js-example-basic-single" id="select_genero" style="width:100%">
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
<div class="modal fade" id="modal_editar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">EDITAR DATOS DE LAS PERSONAS</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">   
        <div class="col-12">
            <label for="">Persona</label>
            <input type="text" class="form-control" id="txt_idpersona" hidden>            
          </div>
          <div class="col-6">
            <label for="">Primer Nombre:</label>
            <input type="text" class="form-control" id="txt_pnombre_editar">            
          </div>
          <div class="col-6">
            <label for="">Segundo Nombre:</label>
            <input type="text" class="form-control" id="txt_snombre_editar">
          </div>
          <div class="col-6">
            <label for="">Primer Apellido:</label>
            <input type="text" class="form-control" id="txt_papellido_editar">
          </div>
          <div class="col-6">
            <label for="">Segundo Apellido:</label>
            <input type="text" class="form-control" id="txt_sapellido_editar">
          </div>
          <div class="col-6">
            <label for="">Fecha de Nacimiento:</label>
            <input type="date" class="form-control" id="txt_fechnac_editar">
          </div>
          <div class="col-6">
            <label for="">Grado Academico:</label>
            <input type="text" class="form-control" id="txt_grado_editar">
          </div>
          <div class="col-6">
              <label for="">Estado Civil:</label>
              <select class="js-example-basic-single" id="select_ecivil_editar" style="width:100%">
              </select>
            </div>
            <div class="col-6">
              <label for="">Tipo de Persona:</label>
              <select class="js-example-basic-single" id="select_tpersona_editar" style="width:100%">
              </select>
            </div>
            <div class="col-6">
              <label for="">Pais:</label>
              <select class="js-example-basic-single" id="select_pais_editar" style="width:100%">
              </select>
            </div>
            <div class="col-6">
              <label for="">Genero:</label>
              <select class="js-example-basic-single" id="select_genero_editar" style="width:100%">
              </select>
            </div>
                
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-success" onclick="Modificar_Persona()">Modificar</button>
      </div>
    </div>
  </div>
</div> 
<div class="modal fade" id="modal_eliminar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">ELIMINAR LA PERSONA</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-12">
                <label for="">¿Desea eliminar a la persona seleccionado?</label>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
        <button type="button" class="btn btn-success" onclick="Eliminar_Persona()">Eliminar</button>
      </div>
    </div>
  </div>
</div>  
   <script>
      $(document).ready(function() {
        listar_personas();
        $('.js-example-basic-single').select2();
        Cargar_Select_ecivil();
        Cargar_Select_tipopersona();
        Cargar_Select_pais();
        Cargar_Select_genero();
      } );
    </script>