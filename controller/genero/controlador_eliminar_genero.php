<?php
    require '../../model/model_genero.php';
    $MU = new Modelo_Genero();//Instaciamos
    $cod_genero = strtoupper(htmlspecialchars($_POST['cod_genero'],ENT_QUOTES,'UTF-8'));   
    $consulta = $MU->Eliminar_Genero($cod_genero);
    echo $consulta;
?>