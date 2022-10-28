<?php
    require '../../model/model_documentos.php';
    $MU = new Modelo_Documentos();//Instaciamos
    $consulta = $MU->Listar_Documentos();
    if($consulta){
        echo json_encode($consulta);
    }else{
        echo '{
		    "sEcho": 1,
		    "iTotalRecords": "0",
		    "iTotalDisplayRecords": "0",
		    "aaData": []
		}';
    }
?>