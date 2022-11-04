<?php
    require '../../model/model_personas.php';
    $MU = new Modelo_Personas();//Instaciamos
    $consulta = $MU->Cargara_Select_Genero();
    echo json_encode($consulta);
?>