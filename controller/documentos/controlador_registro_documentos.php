<?php
    require '../../model/model_documentos.php';
    $MU = new Modelo_Documentos();//Instaciamos
    $nombre_documento = strtoupper(htmlspecialchars($_POST['nombre_documento'],ENT_QUOTES,'UTF-8'));
    $URL = strtoupper(htmlspecialchars($_POST['URL'],ENT_QUOTES,'UTF-8'));
    $tipo_doc = strtoupper(htmlspecialchars($_POST['tipo_doc'],ENT_QUOTES,'UTF-8'));     
    $solicitd = strtoupper(htmlspecialchars($_POST['solicitd'],ENT_QUOTES,'UTF-8'));     
    $consulta = $MU->Registrar_Documentos( $nombre_documento, $URL ,  $tipo_doc ,$solicitd);
    echo $consulta;

?>
