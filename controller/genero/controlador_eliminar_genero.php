<?php
    require '../../model/model_genero.php';
    $MU = new Modelo_Genero();//Instaciamos
    $genero = strtoupper(htmlspecialchars($_POST['genero'],ENT_QUOTES,'UTF-8'));   
    $consulta = $MU->Eliminar_Genero($genero);
    echo $consulta;
?>