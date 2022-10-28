<?php
    require '../../model/model_depto.php';
    $MU = new Modelo_Depto();//Instaciamos  
    $depto = htmlspecialchars($_POST['depto'],ENT_QUOTES,'UTF-8');
    $des = htmlspecialchars($_POST['des'],ENT_QUOTES,'UTF-8');    
    $consulta = $MU->Modificar_Depto($depto,$des);
    echo $consulta;

?>