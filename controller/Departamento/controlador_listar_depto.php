<?php
    require '../../model/model_depto.php';
    $MU = new Modelo_Depto();//Instaciamos
    $consulta = $MU->Listar_Depto();
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