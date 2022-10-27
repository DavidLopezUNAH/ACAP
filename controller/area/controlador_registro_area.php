<?php
    require '../../model/model_area.php';
    $MU = new Modelo_Area();//Instaciamos
    $area = strtoupper(htmlspecialchars($_POST['area'],ENT_QUOTES,'UTF-8'));
    $des = strtoupper(htmlspecialchars($_POST['des'],ENT_QUOTES,'UTF-8'));
    $dep = strtoupper(htmlspecialchars($_POST['dep'],ENT_QUOTES,'UTF-8'));       
    $consulta = $MU->Registrar_Area($area,$des,$dep);
    echo $consulta;

?>
