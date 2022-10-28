<?php
    require '../../model/model_tipoacreditacion.php';
    $MU = new Modelo_TipoAcreditacion();//Instaciamos
    $tipoacreditacion = strtoupper(htmlspecialchars($_POST['tipoacreditacion'],ENT_QUOTES,'UTF-8'));
    $cargo = strtoupper(htmlspecialchars($_POST['cargo'],ENT_QUOTES,'UTF-8'));       
    $consulta = $MU->Registrar_TipoAcreditacion($tipoacreditacion, $cargo);
    echo $consulta;

?>
