<?php
    require '../../model/model_genero.php';
    $MU = new Modelo_Genero();//Instaciamos
    $genero= strtoupper(htmlspecialchars($_POST['a'],ENT_QUOTES,'UTF-8'));   
    $consulta = $MU->Registrar_Genero($genero);
    echo $consulta;
?>