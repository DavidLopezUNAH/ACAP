<?php
    require '../../modelo/model_estadoCivil.php';
    $MU = new Modelo_EstadoCivil();//Instaciamos
    $id = htmlspecialchars($_POST['id'],ENT_QUOTES,'UTF-8');   
    $estadocivil = htmlspecialchars($_POST['estadocivil'],ENT_QUOTES,'UTF-8');  
    $consulta = $MU->Modificar_EstadoCivil($id,$estadocivil);
    echo $consulta;

?>