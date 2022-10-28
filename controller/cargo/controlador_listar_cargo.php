<?php
    require '../../model/model_cargo.php';
    $MU = new Modelo_Cargo();//Instaciamos
    $consulta = $MU->Listar_Cargo();
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