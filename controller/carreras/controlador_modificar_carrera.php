<?php
    require '../../model/model_carrera.php';
    $MU = new Modelo_carrera();//Instaciamos
    $id = strtoupper(htmlspecialchars($_POST['id'],ENT_QUOTES,'UTF-8')); 
    $carrera = strtoupper(htmlspecialchars($_POST['carrera'],ENT_QUOTES,'UTF-8'));
    $uni = strtoupper(htmlspecialchars($_POST['uni'],ENT_QUOTES,'UTF-8'));
    $gra = strtoupper(htmlspecialchars($_POST['gra'],ENT_QUOTES,'UTF-8'));
    $tacre = strtoupper(htmlspecialchars($_POST['tacre'],ENT_QUOTES,'UTF-8'));
    $perso = strtoupper(htmlspecialchars($_POST['perso'],ENT_QUOTES,'UTF-8'));     
    $consulta = $MU->Modificar_Carrera($id,$carrera,$uni,$gra,$tacre,$perso);
    echo $consulta;

?>