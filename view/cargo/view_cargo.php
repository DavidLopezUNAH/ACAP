<script src="../js/console_cargo.js?rev=<?php echo time();?>"></script>
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">MANTENIMIENTO CARGO</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Cargo</li>
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
                <h5 class="card-title"><b>Listado de cargos</b></h5>
                <button class="btn btn-danger btn-sm float-right" onclick="AbrirRegistro()"> <i class="fas fa-plus"> </i>Nuevo Registro</button>
              </div>
              <div class="card-body">
              <table id="tabla_cargo" class="display" style="width:100%">
                  <thead>
                      <tr>
                          <th>#</th>
                          <th>Cargo</th>
                          <th>Descripcion</th>
                          <th>Area</th>
                          <th>Departamento</th>
                
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

<!-- Modal REGISTRO-->
<div class="modal fade" id="modal_registro"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">REGISTRO DE CARGO</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-12">
                <label for="">CARGO</label>
                <input type="text" class="form-control" id="txt_cargo">
            </div>
            <div class="col-12">
                <label for="">Descripcion</label>
                <input type="text" class="form-control" id="txt_des">
            </div>
            <div class="col-6">
              <label for="">Area</label>
              <select class="js-example-basic-single" id="select_area" style="width:100%">
              </select>
            </div>
            <div class="col-6">
              <label for="">Departamento</label>
              <select class="js-example-basic-single" id="select_dep" style="width:100%">
              </select>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success" onclick="Registrar_Cargo()">REGISTRAR</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal de editar-->
<div class="modal fade" id="modal_editar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">EDITAR DATOS DE CARGO</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-12">
                <label for="">CARGO</label>
                <input type="text" class="form-control" id="txt_cargo_editar">
                <input type="text" id="txt_cargo" hidden>
            </div>
            <div class="col-12">
                <label for="">DESCRIPCION</label>
                <input type="text" class="form-control" id="txt_des_editar">
                <input type="text" id="txt_des" hidden>
            </div>
            <div class="col-12">
                <label for="">AREA</label>
                <select class="js-example-basic-single" id="select_area_editar" style="width:100%">
              </select>
            </div>
            <div class="col-12">
                <label for="">DEPARTAMENTO</label>
                <select class="js-example-basic-single" id="select_dep_editar" style="width:100%">
              </select>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success" onclick="Modificar_Cargo()">MODIFICAR</button>
      </div>
    </div>
  </div>
</div>  

    <!-- Modal -->
    <!-- /.content -->
    <script>
      $(document).ready(function() {
        listar_cargo();
        $('.js-example-basic-single').select2();
        Cargar_Select_area();
      } );
    </script>
    
    <script>
      $(document).ready(function() {
        listar_cargo();
        $('.js-example-basic-single').select2();
        Cargar_Select_dep();
      } );
    </script>