<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");


include_once("Usuario.php");

$metodo =  $_SERVER['REQUEST_METHOD'];

//login

if($metodo == "GET"){

    //Se crea el usuario  con los datos obtenidos
    $usuario = new Usuario();
    $usuarios = array();            

    //si la consulta trae algun parameto
    if (isset($_GET['correo'])) {
            $usuarios = $usuario->obtenerUsuarioPorCorreo($_GET['correo']);
        } else {
            $usuarios = $usuario->consultarUsuarioLogin($_GET['param'], $_GET['param1']);
        }
          
        //if (isset($_GET['correo'])) {
        //    $usuarios = $usuario->obtenerUsuarioPorCorreo($_GET['correo']);
        //}
    //$usuarios = $usuario->consultarUsuarioLogin($_GET['param'], $_GET['param1']);
    //$usuarios = $usuario->consultarCorreoPassword();
    // Se envia encabezado con el estado de la solicitud
    header("HTTP/1.1 200 OK");
    //codifico los datos en formato JSON
    echo json_encode($usuarios);
    exit();
}
?>