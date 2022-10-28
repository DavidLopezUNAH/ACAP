<?php
    require '../../model/model_grado.php';
    $MU = new Modelo_Grado();//Instaciamos
    $id = strtoupper(htmlspecialchars($_POST['id'],ENT_QUOTES,'UTF-8'));  
    $gra = strtoupper(htmlspecialchars($_POST['gra'],ENT_QUOTES,'UTF-8'));       
    $consulta = $MU->Modificar_Grado($id, $gra);
    echo $consulta;

?>