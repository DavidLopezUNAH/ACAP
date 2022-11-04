<?php
    require '../../model/model_grado.php';
    $MU = new Modelo_Grado();//Instaciamos
    $grado= strtoupper(htmlspecialchars($_POST['grado'],ENT_QUOTES,'UTF-8'));   
    $consulta = $MU->Eliminar_Grado($grado);
    echo $consulta;
?>