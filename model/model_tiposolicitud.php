<?php
    require_once  'model_conexion.php';

    class Modelo_TipoSolicitud extends conexionBD{
    

        public function Listar_TipoSolicitud(){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SEL_Tipo_de_solicitud";
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
        
        public function Registrar_TipoSolicitud($nombre_ts){
            $c = conexionBD::conexionPDO();
            $sql = "CALL INS_TIPO_SOLICITUD(?)";
            $arreglo = array();
            $query  = $c->prepare($sql);            
            $query -> bindParam(1,$nombre_ts);
            $query -> execute();
            if($row = $query->fetchColumn()){
                return $row;
            }            
            conexionBD::cerrar_conexion();
        } 

        public function Modificar_TipoSolicitud($cod_ts,$nombre_ts){
            $c = conexionBD::conexionPDO();
            $sql = "CALL ACTUALIZAR_TIPOSOLICITUD(?,?)";
            $arreglo = array();
            $query  = $c->prepare($sql);
            $query -> bindParam(1,$cod_ts);
            $query -> bindParam(2,$nombre_ts);
            $query->execute();
            if($row = $query->fetchColumn()){
                    return $row;
            }
            conexionBD::cerrar_conexion();
        }

        public function Eliminar_TipoSolicitud($cod_ts){
            $c = conexionBD::conexionPDO();                                                                                           
            $sql = "CALL ELIMINAR_TIPOSOLICITUD(?)";
            $arreglo = array();
            $query  = $c->prepare($sql);
            $query -> bindParam(1,$cod_ts);
            $query->execute();
            if($row = $query->fetchColumn()){
                    return $row;
            }
            conexionBD::cerrar_conexion();
        }

    }

?>