<?php
    require '../../model/model_grado.php';
    $MU = new Modelo_Grado();//Instaciamos
    $grado= strtoupper(htmlspecialchars($_POST['a'],ENT_QUOTES,'UTF-8'));   
    $consulta = $MU->Registrar_Grado($grado);
    echo $consulta;

?>