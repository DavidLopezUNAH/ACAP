<?php
    require '../../model/model_pais.php';
    $MU = new Modelo_Pais();//Instaciamos
    $cod_pais= strtoupper(htmlspecialchars($_POST['cod_pais'],ENT_QUOTES,'UTF-8'));   
    $consulta = $MU->ELIMINAR_PAIS($cod_pais);
    echo $consulta;
?>