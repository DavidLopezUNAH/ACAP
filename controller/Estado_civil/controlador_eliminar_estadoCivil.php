<?php
    require '../../model/model_estadoCivil.php';
    $MU = new Modelo_EstadoCivil();//Instaciamos
    $id= (htmlspecialchars($_POST['id'],ENT_QUOTES,'UTF-8'));   
    $consulta = $MU->Eliminar_EstadoCivil($id);
    echo $consulta;
?>