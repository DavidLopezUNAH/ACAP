<?php
    require_once  'model_conexion.php';

    class Modelo_carrera extends conexionBD{
    

        public function Listar_carrera(){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_LISTAR_CARRERA()";
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

        public function Registrar_carrera($carrera,$uni,$gra,$tacre,$perso){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_REGISTRAR_CARRERA(?,?,?,?,?)";
            $arreglo = array();
            $query  = $c->prepare($sql);
            $query -> bindParam(1,$carrera);
            $query -> bindParam(2,$uni);
            $query -> bindParam(3,$gra);
            $query -> bindParam(4,$tacre);
            $query -> bindParam(5,$perso);
            $query->execute();
            if($row = $query->fetchColumn()){
                    return $row;
            }
            conexionBD::cerrar_conexion();
        }

        public function Cargara_Select_uni(){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_CARGAR_SELECT_UNIVERSIDAD()";
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

        public function Cargara_Select_gra(){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_CARGAR_SELECT_GRADO()";
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

        public function Cargara_Select_tacre(){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_CARGAR_SELECT_TIPODEACREDITACION()";
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

        public function Cargara_Select_perso(){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_CARGAR_SELECT_PERSONA()";
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