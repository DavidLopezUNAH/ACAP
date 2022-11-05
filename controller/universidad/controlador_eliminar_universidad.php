<?php
    require '../../model/model_universidad.php';
    $MU = new Modelo_Universidad();//Instaciamos
    $uni = strtoupper(htmlspecialchars($_POST['uni'],ENT_QUOTES,'UTF-8'));   
    $consulta = $MU->Eliminar_Universidad($uni);
    echo $consulta;
?>