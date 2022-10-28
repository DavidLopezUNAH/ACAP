<?php
    require '../../model/model_cargo.php';
    $MU = new Modelo_Cargo();//Instaciamos
    $consulta = $MU->Cargara_Select_area();
    echo json_encode($consulta);

?>