<?php
    require_once  'model_conexion.php';

    class Modelo_Estado extends conexionBD{
    

        public function Listar_Estado(){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_LISTAR_ESTADO";
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
        
        public function Registrar_Estado($nombre_estado){
            $c = conexionBD::conexionPDO();
            $sql = "CALL INS_ESTADO(?)";
            $arreglo = array();
            $query  = $c->prepare($sql);            
            $query -> bindParam(1,$nombre_estado);
            $query -> execute();
            if($row = $query->fetchColumn()){
                return $row;
            }            
            conexionBD::cerrar_conexion();
        } 

        public function Modificar_Estado($cod_estado,$nombre_estado){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_MODIFICAR_ESTADO(?,?)";
            $arreglo = array();
            $query  = $c->prepare($sql);
            $query -> bindParam(1,$cod_estado);
            $query -> bindParam(2,$nombre_estado);
            $query->execute();
            if($row = $query->fetchColumn()){
                    return $row;
            }
            conexionBD::cerrar_conexion();
        }

        public function Eliminar_TipoSolicitud($cod_estado){
            $c = conexionBD::conexionPDO();                                                                                           
            $sql = "CALL ELIMINAR_ESTADO(?)";
            $arreglo = array();
            $query  = $c->prepare($sql);
            $query -> bindParam(1,$cod_estado);
            $query->execute();
            if($row = $query->fetchColumn()){
                    return $row;
            }
            conexionBD::cerrar_conexion();
        }

    }

?>