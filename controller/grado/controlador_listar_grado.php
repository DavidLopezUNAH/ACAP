<?php
    require '../../model/model_grado.php';
    $MU = new Modelo_Grado();//Instaciamos
    $consulta = $MU->Listar_Grado();
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