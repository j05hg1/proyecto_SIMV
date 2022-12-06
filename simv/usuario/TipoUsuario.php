<?php 
include_once("Conexion.php");

class TipoUsuario{
    var $id;
    var $nombre;


    function __construct(){}


    
    function consultar(){
        $sql="select * from tipo_usuario";
        $conexion = new Conexion();
        $res = $conexion->executeQuery($sql);
        $tipo_usuarios = array();

        while($p = $res->fetch_object()){
            array_push($tipo_usuarios,$p);
        }
        $conexion->close();

        return $tipo_usuarios;
    }
    



}