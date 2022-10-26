<?php
    require_once  'model_conexion.php';

    class Modelo_Genero extends conexionBD{
    

        public function Listar_Genero(){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SEL_Genero";
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
        
        public function Registrar_Genero($nombre_genero){
            $c = conexionBD::conexionPDO();
            $sql = "CALL Ingresar_Genero(?)";
            $arreglo = array();
            $query  = $c->prepare($sql);            
            $query -> bindParam(1,$nombre_genero);
            $query -> execute();
            if($row = $query->fetchColumn()){
                return $row;
            }            
            conexionBD::cerrar_conexion();
        } 

        public function Modificar_Genero($cod_genero,$nombre_genero){
            $c = conexionBD::conexionPDO();
            $sql = "CALL ACTUALIZAR_GENERO(?,?)";
            $arreglo = array();
            $query  = $c->prepare($sql);
            $query -> bindParam(1,$cod_genero);
            $query -> bindParam(2,$nombre_genero);
            $query->execute();
            if($row = $query->fetchColumn()){
                    return $row;
            }
            conexionBD::cerrar_conexion();
        }

        public function Eliminar_Genero($cod_genero){
            $c = conexionBD::conexionPDO();
            $sql = "CALL ELIMINAR_GENERO(?)";
            $arreglo = array();
            $query  = $c->prepare($sql);
            $query -> bindParam(1,$cod_genero);
            $query->execute();
            if($row = $query->fetchColumn()){
                    return $row;
            }
            conexionBD::cerrar_conexion();
        }

    }

?>