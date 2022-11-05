<?php
    require '../../model/model_depto.php';
    $MU = new Modelo_Depto();//Instaciamos
    $des = htmlspecialchars($_POST['des'],ENT_QUOTES,'UTF-8');
    $depto =htmlspecialchars($_POST['depto'],ENT_QUOTES,'UTF-8');  
    $consulta = $MU->Registrar_Depto($depto,$des);
    echo $consulta;

?>