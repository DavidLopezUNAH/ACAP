<?php
    require '../../model/model_genero.php';
    $MU = new Modelo_Genero();//Instaciamos
    $nombre_genero= strtoupper(htmlspecialchars($_POST['genero'],ENT_QUOTES,'UTF-8'));   
    $consulta = $MU->Registrar_Genero($nombre_genero);
    echo $consulta;
?>