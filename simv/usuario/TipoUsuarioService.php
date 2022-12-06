<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");


include_once("TipoUsuario.php");

//obtención del metodo empleado por el cliente para hacer la petición
$metodo =  $_SERVER['REQUEST_METHOD'];

if($metodo == "GET"){

    //creación de objeto producto
    $tipo_usuario = new TipoUsuario();
    $tipos_usuarios = array();
    //si la consulta trae algun parameto
        if(isset($_GET['param'])){
            $tipos_usuarios = $tipo_usuario->consultar($_GET['param']);
            
        }else{
            //si la consulta o trae parametros se consultan todos
          $tipos_usuarios =  $tipo_usuario->consultar();
        }
        // Se envia encabezado con el estado de la solicitud
        header("HTTP/1.1 200 OK");
        //codifico los datos en formato JSON
        echo json_encode($tipos_usuarios);
        exit();
}