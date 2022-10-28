<?php
    require '../../model/model_area.php';
    $MU = new Modelo_Area();//Instaciamos
    $consulta = $MU->Cargara_Select_dep();
    echo json_encode($consulta);

?>