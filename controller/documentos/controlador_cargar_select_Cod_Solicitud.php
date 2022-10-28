<?php
    require '../../model/model_documentos.php';
    $MU = new Modelo_Documentos();//Instaciamos
    $consulta = $MU->Cargara_Select_Cod_Solicitud();
    echo json_encode($consulta);

?>