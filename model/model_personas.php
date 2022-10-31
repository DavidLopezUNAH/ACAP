<?php
    require_once  'model_conexion.php';

    class Modelo_Personas extends conexionBD{
    

        public function Listar_Personas(){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SEL_Personas()";
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

        public function Registrar_Persona($p_nombre, $s_nombre, $p_apellido, $s_apellido, $fech, $grado, $estadocivil, $t_persona, $npais, $ngenero){
            $c = conexionBD::conexionPDO();
            $sql = "CALL INS_PERSONAS(?,?,?,?,?,?,?,?,?,?)";
            $arreglo = array();
            $query  = $c->prepare($sql);            
            $query -> bindParam(1,$p_nombre);
            $query -> bindParam(2,$s_nombre);
            $query -> bindParam(3,$p_apellido);
            $query -> bindParam(4,$s_apellido);
            $query -> bindParam(5,$fech);
            $query -> bindParam(6,$grado);
            $query -> bindParam(7,$estadocivil);
            $query -> bindParam(8,$t_persona);
            $query -> bindParam(9,$npais);
            $query -> bindParam(10,$ngenero);
            $query -> execute();
            if($row = $query->fetchColumn()){
                return $row;
            }            
            conexionBD::cerrar_conexion();
        } 

        public function Modificar_Persona($id, $p_nombre, $s_nombre, $p_apellido, $s_apellido, $fech, $grado, $e_civil, $t_persona, $pais, $genero){
            $c = conexionBD::conexionPDO();
            $sql = "CALL MODIFICAR_PERSONAS(?,?,?,?,?,?,?,?,?,?,?)";
            $arreglo = array();
            $query  = $c->prepare($sql); 
            $query -> bindParam(1,$id);           
            $query -> bindParam(2,$p_nombre);
            $query -> bindParam(3,$s_nombre);
            $query -> bindParam(4,$p_apellido);
            $query -> bindParam(5,$s_apellido);
            $query -> bindParam(6,$fech);
            $query -> bindParam(7,$grado);
            $query -> bindParam(8,$_civil);
            $query -> bindParam(9,$t_persona);
            $query -> bindParam(10,$pais);
            $query -> bindParam(11,$genero);
            $query -> execute();
            $resul=$query->execute();
            if($resul){
                return 1;
            } else{
             return 0;                          
            }            
            conexionBD::cerrar_conexion();
        }

        public function Cargara_Select_ecivil(){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SEL_Estado_civil()";
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

        public function Cargara_Select_tipopersona(){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SEL_tipo_personas()";
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

        public function Cargara_Select_pais(){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SEL_pais()";
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

        public function Cargara_Select_Genero(){
            $c = conexionBD::conexionPDO();
            $sql = "CALL SEL_Genero()";
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

        public function Eliminar_Persona($id){
            $c = conexionBD::conexionPDO();                                                                                           
            $sql = "CALL ELIMINAR_PERSONA(?)";
            $arreglo = array();
            $query  = $c->prepare($sql);
            $query -> bindParam(1,$id);
            $query->execute();
            if($row = $query->fetchColumn()){
                    return $row;
            }
            conexionBD::cerrar_conexion();
        }
        
    }

?>