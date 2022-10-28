<?php
    require_once  'model_conexion.php';

    class Modelo_Universidad extends conexionBD{
    

        public function Listar_Universidad(){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SP_LISTAR_UNIVERSIDAD()";
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
    


    public function Registrar_Universidad($universidad,$nomb){
        $c = conexionBD::conexionPDO();
        $sql = "CALL REGISTRAR_UNIVERSIDAD(?,?)";
        $arreglo = array();
        $query  = $c->prepare($sql);
        $query -> bindParam(1,$universidad);
        $query -> bindParam(2,$nomb);
        $query->execute();
        if($row = $query->fetchColumn()){
                return $row;
        }
        conexionBD::cerrar_conexion();
    }

    public function Cargara_Select_pais(){
        $c = conexionBD::conexionPDO();
        $sql = "CALL SP_CARGAR_SELECT_PAIS()";
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

    public function Modificar_Universidad($id,$uni){
        $c = conexionBD::conexionPDO();
        $sql = "CALL SP_MODIFICAR_UNIVERSIDAD(?,?)";
        $arreglo = array();
        $query  = $c->prepare($sql);
        $query -> bindParam(1,$id);
        $query -> bindParam(2,$uni);
        $query->execute();
        if($row = $query->fetchColumn()){
                return $row;
        }
        conexionBD::cerrar_conexion();
    }

    }
?>