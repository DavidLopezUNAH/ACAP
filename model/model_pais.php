<?php
    require_once  'model_conexion.php';

    class Modelo_Pais extends conexionBD{
    

        public function Listar_Pais(){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_LISTAR_PAIS()";
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

        public function Registrar_Pais($pais){
            $c = conexionBD::conexionPDO();
            $sql = "CALL 	INS_PAIS(?)";
            $arreglo = array();
            $query  = $c->prepare($sql);
            $query -> bindParam(1,$pais);
            $query->execute();
            if($row = $query->fetchColumn()){
                    return $row;
            }
            conexionBD::cerrar_conexion();
        }
        public function Eliminar_Pais($cod_pais){
            $c = conexionBD::conexionPDO();
            $sql = "CALL ELIMINAR_PAIS(?)";
            $arreglo = array();
            $query  = $c->prepare($sql);
            $query -> bindParam(1,$cod_pais);
            $query->execute();
            if($row = $query->fetchColumn()){
                    return $row;
            }
            conexionBD::cerrar_conexion();
        }

        public function Modificar_pais($cod_pais,$nombre_pais){
            $c = conexionBD::conexionPDO();
            $sql = "CALL ACTUALIZAR_PAIS(?,?)";
            $arreglo = array();
            $query  = $c->prepare($sql);
            $query -> bindParam(1,$cod_pais);
            $query -> bindParam(2,$nombre_pais);
            $query->execute();
            if($row = $query->fetchColumn()){
                    return $row;
            }
            conexionBD::cerrar_conexion();
        }     

    }

?>