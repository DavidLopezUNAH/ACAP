<?php
    require '../../model/model_tipoacreditacion.php';
    $MU = new Modelo_TipoAcreditacion();//Instaciamos
    $consulta = $MU->Listar_TipoAcreditacion();
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