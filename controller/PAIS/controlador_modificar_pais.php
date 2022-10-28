<?php
    require '../../model/model_pais.php';
    $MU = new Modelo_pais();//Instaciamos  
    $cod_pais = strtoupper(htmlspecialchars($_POST['cod_pais'],ENT_QUOTES,'UTF-8'));  
    $nombre_pais = strtoupper(htmlspecialchars($_POST['nombre_pais'],ENT_QUOTES,'UTF-8'));  
    $consulta = $MU->Modificar_Pais($cod_pais,$nombre_pais);
    echo $consulta;

?>