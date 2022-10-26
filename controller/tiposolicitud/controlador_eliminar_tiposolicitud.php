<?php
    require '../../model/model_tiposolicitud.php';
    $MU = new Modelo_TipoSolicitud();//Instaciamos
    $cod_ts = strtoupper(htmlspecialchars($_POST['cod_ts'],ENT_QUOTES,'UTF-8'));   
    $consulta = $MU->Eliminar_TipoSolicitud($cod_ts);
    echo $consulta;
?>