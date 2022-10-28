<?php
    require '../../model/model_universidad.php';
    $MU = new Modelo_Universidad();//Instaciamos
    $id = strtoupper(htmlspecialchars($_POST['id'],ENT_QUOTES,'UTF-8'));  
    $uni = strtoupper(htmlspecialchars($_POST['uni'],ENT_QUOTES,'UTF-8'));       
    $consulta = $MU->Modificar_Universidad($id, $uni);
    echo $consulta;

?>