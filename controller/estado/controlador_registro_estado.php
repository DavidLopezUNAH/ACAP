<?php
    require '../../model/model_estado.php';
    $MU = new Modelo_estado();//Instaciamos
    $nombre_estado = strtoupper(htmlspecialchars($_POST['a'],ENT_QUOTES,'UTF-8'));   
    $consulta = $MU->Registrar_Estado($nombre_estado);
    echo $consulta;
?>