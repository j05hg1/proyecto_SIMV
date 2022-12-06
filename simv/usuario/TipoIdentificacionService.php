<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");


include_once("TipoIdentificacion.php");

//obtención del metodo empleado por el cliente para hacer la petición
$metodo =  $_SERVER['REQUEST_METHOD'];

if($metodo == "GET"){

    //creación de objeto producto
    $tipo_identificacion = new TipoIdentificacion();
    $tipos_identificaciones = array();
    //si la consulta trae algun parameto
        if(isset($_GET['id'])){
            
           $tipos_identificaciones = $tipo_identificacion->consultarTipo($_GET['id']);
            
        }else{
            //si la consulta o trae parametros se consultan todos
          $tipos_identificaciones =  $tipo_identificacion->consultar();
        }
        // Se envia encabezado con el estado de la solicitud
        header("HTTP/1.1 200 OK");
        //codifico los datos en formato JSON
        echo json_encode($tipos_identificaciones);
        exit();
}