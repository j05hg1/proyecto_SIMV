<?php 
include_once("Conexion.php");

class Usuario{
    var $id;
    var $id_tipo_usuario;
    var $id_identificacion;
    var $numero_identificacion;
    var $nombre1;
    var $nombre2;
    var $apellido1;
    var $apellido2;
    var $direccion;
    var $telefono;
    var $celular;
    var $correo;
    var $password;


    function __construct(){}


    function registrarUsuario(){
        $sql="insert into usuarios(id_tipo_usuario,id_identificacion,numero_identificacion,
        nombre1,nombre2,apellido1,apellido2,direccion,telefono,celular,correo,pass)
         values($this->id_tipo_usuario,$this->id_identificacion,$this->numero_identificacion,'$this->nombre1',
         '$this->nombre2','$this->apellido1','$this->apellido2','$this->direccion',$this->telefono,'$this->celular','$this->correo','$this->pass')";
        $conexion = new Conexion();
        if($conexion->executeQuery($sql)){
            $conexion->close();
            return true;
        }
    }

    //pendiente

    function actualizarProducto(){
        $sql= "update usuarios set nombre='$this->nombre', precio=$this->precio, 
        stock=$this->stock, estado = '$this->estado' where id =$this->id";
        
        $conexion = new Conexion();
        if($conexion->executeQuery($sql)){
            $conexion->close();
            return true;
        }
        
    }

    //pendiente
    function eliminarUsuario($param){
        $sql= "delete from usuarios where id= '$param' ";
        $conexion = new Conexion();
        if($conexion->executeQuery($sql)){
            $conexion->close();
            return true;
        }
        
    }

    //pendiente

    function consultarUsuarios(){
        $sql="select * from usuarios";
        $conexion = new Conexion();
        $res = $conexion->executeQuery($sql);
        $usuarios = array();

        while($p = $res->fetch_object()){
            array_push($usuarios,$p);
        }
        $conexion->close();

        return $usuarios;
    }

    //pendiente
    function consultarUsuarioLike($param){
        $sql="select * from usuarios where id ='$param'";
        $conexion = new Conexion();
        $res = $conexion->executeQuery($sql);
        $usuarios = array();
        while($p = $res->fetch_object()){
            array_push($usuarios,$p);
        }
        $conexion->close();

        return $usuarios;
    }

    //Parte Login

    function consultarCorreoPassword(){
        
        // Consulta segura para evitar inyecciones SQL.
        $sql = "select correo, password from usuarios";
        // Crear conexión con la base de datos.
        $conexion = new Conexion();
        $res = $conexion->executeQuery($sql);
        $usuarios = array();

        while($users = $res->fetch_object()){
            array_push($usuarios,$users);
        }
        $conexion->close();        
            
            return $usuarios;
    }

    function consultarUsuarioLogin($param, $param1){
        
        // Consulta segura para evitar inyecciones SQL.
        $sql = "select correo, password from usuarios where correo = '$param' and '$param1' ";
        // Crear conexión con la base de datos.
        $conexion = new Conexion();
        $res = $conexion->executeQuery($sql);
        $usuarios = array();

        while($users = $res->fetch_object()){
            array_push($usuarios,$users);
        }
        $conexion->close();        
            
            return $usuarios;
    }

    function obtenerUsuarioPorCorreo($correo){
        // Consulta segura para evitar inyecciones SQL.
        $sql="select correo, password from usuarios where correo = '$this->correo' limit 1";                            
        // Crear conexión con la base de datos.
        $conexion = new Conexion();
        $res = $conexion->executeQuery($sql);
        $usuarios = array();
        while($u = $res->fetch_object()){
            array_push($usuarios,$u);
        }
        $conexion->close();     
            return $usuarios;
    }

    function usuarioExiste($correo){
        // Consulta segura para evitar inyecciones SQL.
        $sql="select correo from usuarios where correo = '$this->correo' limit 1";
        $sql->execute([$correo]);
        // Crear conexión con la base de datos.
        $conexion = new Conexion();
        $res = $conexion->executeQuery($sql);
        $usuarios = array();        
        $conexion->close();                    
        return $sql->rowCount() > 0;
        //return $usuarios;
    }

/*
    function iniciarSesion(){
    $sql = "select * from usuarios where correo = '$this->correo'";
    $conexion = new Conexion();
    $res = $conexion->executeQuery($sql);
    $usuarios = array();    
    //$user = $res->fetch_object();
    while($u = $res->fetch_object()){
            array_push($usuarios,$u);
        }
    $conexion->close();
    return $usuarios;
    }
*/
    
}


?>