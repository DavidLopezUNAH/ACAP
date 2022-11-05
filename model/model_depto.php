<?php
    require_once  'model_conexion.php';

    class Modelo_Depto extends conexionBD{
    

        public function Listar_Depto(){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_LISTAR_DEPARTAMENTO()";
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

       public function Registrar_Depto($depto,$des){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_REGISTRAR_DEPARTAMENTO(?,?)";
            $arreglo = array();
            $query  = $c->prepare($sql);
            $query -> bindParam(1,$depto);
            $query -> bindParam(2,$des);
            $query->execute();
            if($row = $query->fetchColumn()){
                    return $row;
            }
            conexionBD::cerrar_conexion();
        }

        public function Modificar_Depto($id,$depto,$des){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_MODIFICAR_DEPARTAMENTO(?,?,?)";
            $arreglo = array();
            $query  = $c->prepare($sql);
            $query -> bindParam(1,$id);
            $query -> bindParam(2,$depto);
            $query -> bindParam(3,$des);
            
            $query->execute();
            if($row = $query->fetchColumn()){
                    return $row;
            }
            conexionBD::cerrar_conexion();
        }

       


        



    }

?>