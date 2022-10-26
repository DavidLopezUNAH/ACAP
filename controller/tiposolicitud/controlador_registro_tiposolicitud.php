<?php
    require '../../model/model_tiposolicitud.php';
    $MU = new Modelo_TipoSolicitud();//Instaciamos
    $nombre_ts = strtoupper(htmlspecialchars($_POST['a'],ENT_QUOTES,'UTF-8'));   
    $consulta = $MU->Registrar_TipoSolicitud($nombre_ts);
    echo $consulta;
?>