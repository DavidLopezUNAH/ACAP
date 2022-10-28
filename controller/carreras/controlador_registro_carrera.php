<?php
    require '../../model/model_carrera.php';
    $MU = new Modelo_carrera();//Instaciamos
    $carrera = strtoupper(htmlspecialchars($_POST['carrera'],ENT_QUOTES,'UTF-8'));
    $uni = strtoupper(htmlspecialchars($_POST['uni'],ENT_QUOTES,'UTF-8'));
    $gra = strtoupper(htmlspecialchars($_POST['gra'],ENT_QUOTES,'UTF-8'));
    $tacre = strtoupper(htmlspecialchars($_POST['tacre'],ENT_QUOTES,'UTF-8'));
    $perso = strtoupper(htmlspecialchars($_POST['perso'],ENT_QUOTES,'UTF-8'));       
    $consulta = $MU->Registrar_carrera($carrera,$uni,$gra,$tacre,$perso);
    echo $consulta;

?>