<?php
    require '../../model/model_universidad.php';
    $MU = new Modelo_Universidad();//Instaciamos
    $id = strtoupper(htmlspecialchars($_POST['id'],ENT_QUOTES,'UTF-8'));   
    $consulta = $MU->Eliminar_Universidad($id);
    echo $consulta;
?>