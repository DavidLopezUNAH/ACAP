<?php
    require_once  'model_conexion.php';

    class Modelo_TipoAcreditacion extends conexionBD{
    

        public function Listar_TipoAcreditacion(){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_LISTAR_TIPOACREDITACION()";
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

        public function Registrar_TipoAcreditacion($tipoacredtacion,$grado){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_REGISTRAR_TIPOACREDITACION(?,?)";
            $arreglo = array();
            $query  = $c->prepare($sql);
            $query -> bindParam(1,$tipoacreditacion);
            $query -> bindParam(2,$grado);
            $query->execute();
            if($row = $query->fetchColumn()){
                    return $row;
            }
            conexionBD::cerrar_conexion();
        }

        public function Modificar_TipoAcreditacion($tipoacreditacion,$grado){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_MODIFICAR_TIPOACREDITACION(?,?)";
            $arreglo = array();
            $query  = $c->prepare($sql);
            $query -> bindParam(1,$tipoacreditacion);
            $query -> bindParam(2,$grado);
            $query->execute();
            if($row = $query->fetchColumn()){
                    return $row;
            }
            conexionBD::cerrar_conexion();
        }

        public function Cargar_Select_grado(){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_CARGAR_SELECT_TIPOACREDITACION()";
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