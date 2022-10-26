
<?php
    require '../../model/model_estadoCivil.php';
    $MU = new Modelo_EstadoCivil();//Instaciamos
    $consulta = $MU->Listar_EstadoCivil();
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