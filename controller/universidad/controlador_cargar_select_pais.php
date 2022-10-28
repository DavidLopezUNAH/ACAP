<?php
    require '../../model/model_universidad.php';
    $MU = new Modelo_Universidad();//Instaciamos
    $consulta = $MU->Cargara_Select_pais();
    echo json_encode($consulta);

?>