<?php
    require '../../model/model_pais.php';
    $MU = new Modelo_Pais();//Instaciamos
    $pais = strtoupper(htmlspecialchars($_POST['pais'],ENT_QUOTES,'UTF-8'));
    $consulta = $MU->Registrar_Pais($pais);
    echo $consulta;

?>

