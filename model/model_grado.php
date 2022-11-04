<?php
    require_once  'model_conexion.php';

    class Modelo_Grado extends conexionBD{
    

        public function Listar_Grado(){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_LISTAR_GRADO()";
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

        public function Registrar_Grado($grado){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_REGISTRAR_GRADO(?)";
            $arreglo = array();
            $query  = $c->prepare($sql);
            $query -> bindParam(1,$grado);
            $query->execute();
            if($row = $query->fetchColumn()){
                    return $row;
            }
            conexionBD::cerrar_conexion();
        }

        public function Modificar_Grado($id,$grado){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_MODIFICAR_GRADO(?,?)";
            $arreglo = array();
            $query  = $c->prepare($sql);
            $query -> bindParam(1,$id);
            $query -> bindParam(2,$grado);
            $query->execute();
            if($row = $query->fetchColumn()){
                    return $row;
            }
            conexionBD::cerrar_conexion();
        }

        public function Eliminar_Grado($grado){
            $c = conexionBD::conexionPDO();                                                                                           
            $sql = "CALL SP_ELIMINAR_GRADO(?)";
            $arreglo = array();
            $query  = $c->prepare($sql);
            $query -> bindParam(1,$grado);
            $query->execute();
            if($row = $query->fetchColumn()){
                    return $row;
            }
            conexionBD::cerrar_conexion();
        }



    }

    ?>