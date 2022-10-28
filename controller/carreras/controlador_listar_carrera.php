<?php
    require '../../model/model_carrera.php';
    $MU = new Modelo_carrera();//Instaciamos
    $consulta = $MU->Listar_carrera();
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