<?php
    require '../../model/model_estado.php';
    $MU = new Modelo_Estado();//Instaciamos
    $consulta = $MU->Listar_Estado();
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