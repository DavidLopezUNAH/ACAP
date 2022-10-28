<?php
    require '../../model/model_cargo.php';
    $MU = new Modelo_Cargo();//Instaciamos
    $cargo = strtoupper(htmlspecialchars($_POST['cargo'],ENT_QUOTES,'UTF-8'));  
    $des = strtoupper(htmlspecialchars($_POST['des'],ENT_QUOTES,'UTF-8'));  
    $area = strtoupper(htmlspecialchars($_POST['area'],ENT_QUOTES,'UTF-8'));   
    $dep = strtoupper(htmlspecialchars($_POST['dep'],ENT_QUOTES,'UTF-8')); 
    $consulta = $MU->Registrar_Cargo($cargo, $des, $area, $dep);
    echo $consulta;

?>
