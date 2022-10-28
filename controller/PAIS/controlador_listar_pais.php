<?php
    require '../../model/model_pais.php';
    $MU = new Modelo_Pais();//Instaciamos
    $consulta = $MU->Listar_Pais();
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