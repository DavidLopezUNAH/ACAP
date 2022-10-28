<?php
    require '../../model/model_universidad.php';
    $MU = new Modelo_Universidad();//Instaciamos
    $universidad = strtoupper(htmlspecialchars($_POST['a'],ENT_QUOTES,'UTF-8'));   
    $nomb = strtoupper(htmlspecialchars($_POST['nomb'],ENT_QUOTES,'UTF-8')); 

    $consulta = $MU->Registrar_Universidad($universidad,$nomb);
    echo $consulta;

?>