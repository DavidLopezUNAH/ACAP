<?php
    require_once  'model_conexion.php';

    class Modelo_Documentos extends conexionBD{
    

        public function Listar_Documentos(){
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

        public function Registrar_Documentos($nombre_documento,$URL,$tipo_doc,$solicitd){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_REGISTRAR_AREA(?,?,?,?)";
            $arreglo = array();
            $query  = $c->prepare($sql);
            $query -> bindParam(1,$nombre_documento);
            $query -> bindParam(2,$URL);
            $query -> bindParam(3,$tipo_doc);
            $query -> bindParam(4,$solicitd);
            $query->execute();
            if($row = $query->fetchColumn()){
                    return $row;
            }
            conexionBD::cerrar_conexion();
        }

        public function Modificar_Documento($nombre_documento,$URL,$tipo_doc,$solicitd){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_MODIFICAR_AREA(?,?,?,?)";
            $arreglo = array();
            $query  = $c->prepare($sql);
            $query -> bindParam(1,$nombre_documento);
            $query -> bindParam(2,$URL);
            $query -> bindParam(3,$tipo_doc);
            $query -> bindParam(4,$solicitd);
            $query->execute();
            if($row = $query->fetchColumn()){
                    return $row;
            }
            conexionBD::cerrar_conexion();
        }

        public function Cargara_Select_tipo_documento(){
            $c = conexionBD::conexionPDO();
            $sql = "SP_CARGAR_SELECT_tipo_documento  ";
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
        
        public function Cargara_Select_Cod_Solicitud(){
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