<?php
    require '../../model/model_personas.php';
    $MU = new Modelo_Personas();//Instaciamos
    $id = strtoupper(htmlspecialchars($_POST['id'],ENT_QUOTES,'UTF-8'));  
    $p_nombre = strtoupper(htmlspecialchars($_POST['p_nombre'],ENT_QUOTES,'UTF-8'));   
    $s_nombre = strtoupper(htmlspecialchars($_POST['s_nombre'],ENT_QUOTES,'UTF-8'));   
    $p_apellido = strtoupper(htmlspecialchars($_POST['p_apellido'],ENT_QUOTES,'UTF-8'));   
    $s_apellido = strtoupper(htmlspecialchars($_POST['s_apellido'],ENT_QUOTES,'UTF-8'));   
    $fech = strtoupper(htmlspecialchars($_POST['fech'],ENT_QUOTES,'UTF-8'));   
    $grado = strtoupper(htmlspecialchars($_POST['grado'],ENT_QUOTES,'UTF-8'));   
    $e_civil = strtoupper(htmlspecialchars($_POST['e_civil'],ENT_QUOTES,'UTF-8'));   
    $t_persona = strtoupper(htmlspecialchars($_POST['t_persona'],ENT_QUOTES,'UTF-8'));   
    $pais = strtoupper(htmlspecialchars($_POST['pais'],ENT_QUOTES,'UTF-8'));   
    $genero = strtoupper(htmlspecialchars($_POST['genero'],ENT_QUOTES,'UTF-8'));   
    $consulta = $MU->Modificar_Persona($id, $p_nombre, $s_nombre, $p_apellido, $s_apellido, $fech, $grado, $e_civil, $t_persona, $pais, $genero);
    echo $consulta;
?>