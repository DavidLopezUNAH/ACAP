<?php
    require '../../model/model_tiposolicitud.php';
    $MU = new Modelo_TipoSolicitud();//Instaciamos
    $id = strtoupper(htmlspecialchars($_POST['id'],ENT_QUOTES,'UTF-8'));   
    $nombre_ts = strtoupper(htmlspecialchars($_POST['nombre_ts'],ENT_QUOTES,'UTF-8'));   
    $consulta = $MU->Modificar_TipoSolicitud($id,$nombre_ts);
    echo $consulta;

?>