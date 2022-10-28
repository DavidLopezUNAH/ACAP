<?php
    require '../../model/model_pais.php';
    $MU = new Modelo_Pais();//Instaciamos
    $nombre_pais = strtoupper(htmlspecialchars($_POST['a'],ENT_QUOTES,'UTF-8'));
    $consulta = $MU->Registrar_Pais($nombre_pais);
    echo $consulta;

?>

