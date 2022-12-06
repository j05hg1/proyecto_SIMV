<?php 
include_once("Conexion.php");

class TipoIdentificacion{
    var $id;
    var $nombre;


    function __construct(){}


    
    function consultar(){
        $sql="select * from tipo_identificacion";
        $conexion = new Conexion();
        $res = $conexion->executeQuery($sql);
        $tipos_identificaciones = array();

        while($p = $res->fetch_object()){
            array_push($tipos_identificaciones,$p);
        }
        $conexion->close();

        return $tipos_identificaciones;
    }
    
    function consultarTipo($id){
        $sql="select nombre from tipo_identificacion where id = $id";
        $conexion = new Conexion();
        $res = $conexion->executeQuery($sql);
        $tipos_identificaciones = array();
        while($p = $res->fetch_object()){
            array_push($tipos_identificaciones,$p);
        }
        $conexion->close();

        return $tipos_identificaciones;
    }



}