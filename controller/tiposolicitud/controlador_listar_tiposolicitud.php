<?php
    require '../../model/model_tiposolicitud.php';
    $MU = new Modelo_TipoSolicitud();//Instaciamos
    $consulta = $MU->Listar_TipoSolicitud();
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