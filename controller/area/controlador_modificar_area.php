<?php
    require '../../model/model_area.php';
    $MU = new Modelo_Area();//Instaciamos 
    $id = strtoupper(htmlspecialchars($_POST['id'],ENT_QUOTES,'UTF-8'));
    $area = strtoupper(htmlspecialchars($_POST['area'],ENT_QUOTES,'UTF-8'));
    $des = strtoupper(htmlspecialchars($_POST['des'],ENT_QUOTES,'UTF-8'));    
    $dep = strtoupper(htmlspecialchars($_POST['dep'],ENT_QUOTES,'UTF-8'));   
    $consulta = $MU->Modificar_Area($id,$area,$des,$dep);
    echo $consulta;

?>