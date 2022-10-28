<?php
    require '../../model/model_estadoCivil.php';
    $MU = new Modelo_EstadoCivil();//Instaciamos
    $estadocivil = htmlspecialchars($_POST['est'],ENT_QUOTES,'UTF-8');   
    $consulta = $MU->Registrar_EstadoCivil($estadocivil);
    echo $consulta;

?>