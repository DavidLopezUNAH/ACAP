<?php
    require '../../model/model_genero.php';
    $MU = new Modelo_Genero();//Instaciamos
    $id = strtoupper(htmlspecialchars($_POST['id'],ENT_QUOTES,'UTF-8'));   
    $gene = strtoupper(htmlspecialchars($_POST['gene'],ENT_QUOTES,'UTF-8'));   
    $consulta = $MU->Modificar_Genero($id,$gene);
    echo $consulta;

?>