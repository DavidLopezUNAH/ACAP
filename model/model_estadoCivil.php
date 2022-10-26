<?php
    require_once  'model_conexion.php';

    class Modelo_EstadoCivil extends conexionBD{
    

        public function Listar_EstadoCivil(){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_LISTAR_ESTADOCIVIL()";
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

        public function Registrar_EstadoCivil($estadocivil){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_REGISTRAR_ESTADOCIVIL(?)";
            $arreglo = array();
            $query  = $c->prepare($sql);
            $query -> bindParam(1,$estadocivil);
            $query->execute();
            if($row = $query->fetchColumn()){
                    return $row;
            }
            conexionBD::cerrar_conexion();
        }

        public function Modificar_EstadoCivil($id,$est){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_MODIFICAR_ESTADOCIVIL(?,?,?)";
            $arreglo = array();
            $query  = $c->prepare($sql);
            $query -> bindParam(1,$id);
            $query -> bindParam(2,$est);
            
            $query->execute();
            if($row = $query->fetchColumn()){
                    return $row;
            }
            conexionBD::cerrar_conexion();
        }



    }

?>