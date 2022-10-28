<?php
    require '../../model/model_tipoacreditacion.php';
    $MU = new Modelo_TipoAcreditacion();//Instaciamos
    $consulta = $MU->Cargar_Select_grado();
    echo json_encode($consulta);
?>