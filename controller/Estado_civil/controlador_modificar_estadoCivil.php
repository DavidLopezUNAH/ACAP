<?php
    require '../../modelo/modelo_EstadoCivil.php';
    $MU = new Modelo_EstadoCivil();//Instaciamos
    $id = strtoupper(htmlspecialchars($_POST['cod'],ENT_QUOTES,'UTF-8'));   
    $est = strtoupper(htmlspecialchars($_POST['estadoc'],ENT_QUOTES,'UTF-8'));  
    $consulta = $MU->Modificar_EstadoCivil($cod,$estadoc);
    echo $consulta;

?>