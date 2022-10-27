<?php
    require_once  'model_conexion.php';

    class Modelo_Area extends conexionBD{
    

        public function Listar_Area(){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_LISTAR_AREA()";
            $arreglo = array();
            $query  = $c->prepare($sql);
            $query->execute();
            $resultado = $query->fetchAll(PDO::FETCH_ASSOC);
            foreach($resultado as $resp){
                $arreglo["data"][]=$resp;
            }
            return $arreglo;
            conexionBD::cerrar_conexion();
        }

        public function Registrar_Area($area,$des,$dep){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_REGISTRAR_AREA(?,?,?)";
            $arreglo = array();
            $query  = $c->prepare($sql);
            $query -> bindParam(1,$area);
            $query -> bindParam(2,$des);
            $query -> bindParam(3,$dep);
            $query->execute();
            if($row = $query->fetchColumn()){
                    return $row;
            }
            conexionBD::cerrar_conexion();
        }

        public function Modificar_Area($area,$des,$dep){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_MODIFICAR_AREA(?,?,?)";
            $arreglo = array();
            $query  = $c->prepare($sql);
            $query -> bindParam(1,$area);
            $query -> bindParam(2,$des);
            $query -> bindParam(3,$dep);
            $query->execute();
            if($row = $query->fetchColumn()){
                    return $row;
            }
            conexionBD::cerrar_conexion();
        }

        public function Cargara_Select_dep(){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_CARGAR_SELECT_DEPARTAMENTO()";
            $arreglo = array();
            $query  = $c->prepare($sql);
            $query->execute();
            $resultado = $query->fetchAll();
            foreach($resultado as $resp){
                $arreglo[]=$resp;
            }
            return $arreglo;
            conexionBD::cerrar_conexion();
        }


        



    }

?>