<?php
    require '../../model/model_estado.php';
    $MU = new Modelo_Estado();//Instaciamos
    $cod_estado = strtoupper(htmlspecialchars($_POST['cod_estado'],ENT_QUOTES,'UTF-8'));   
    $nombre_estado = strtoupper(htmlspecialchars($_POST['nombre_estado'],ENT_QUOTES,'UTF-8'));   
    $consulta = $MU->Modificar_Estado($cod_estado,$nombre_estado);
    echo $consulta;

?>