<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");


include_once("Usuario.php");

//obtención del metodo empleado por el cliente para hacer la petición
$metodo =  $_SERVER['REQUEST_METHOD'];

if($metodo == "GET"){

    //creación de objeto producto
    $usuario = new Usuario();
    $usuarios = array();
    //si la consulta trae algun parameto
        if(isset($_GET['param'])){
            $usuarios = $usuario->consultarUsuarioLike($_GET['param']);
            
        }else{
            //si la consulta o trae parametros se consultan todos
          $usuarios =  $usuario->consultarUsuarios();
        }
        // Se envia encabezado con el estado de la solicitud
        header("HTTP/1.1 200 OK");
        //codifico los datos en formato JSON
        echo json_encode($usuarios);
        exit();
}

if($metodo =="POST"){

    //se obtienen los contenidos de la petición 
    $postdata = file_get_contents("php://input");
    //se decodifican los datos que vienen en JSON
    $request = json_decode($postdata);
    //Se crea el procuto  con los datos obtenidos
    $usuario = new Usuario();
    $usuario->id_tipo_usuario= $request->id_tipo_usuario;
    $usuario->id_identificacion= $request->id_identificacion;
    $usuario->numero_identificacion= $request->numero_identificacion;
    $usuario->nombre1= $request->nombre1;
    $usuario->nombre2= $request->nombre2;
    $usuario->apellido1= $request->apellido2;
    $usuario->apellido2= $request->apellido2;
    $usuario->direccion= $request->direccion;
    $usuario->telefono= $request->telefono;
    $usuario->celular= $request->celular;
    $usuario->correo= $request->correo;
    $usuario->pass= $request->pass;
    
    //se llama la función de registo
    $usuario->registrarUsuario();

    //se crean las cabeceras para la respuesta del servicio
    header("HTTP/1.1 200 OK");
    //se definen los contenidos de respuesta
    $request->recibido = 'OK';
    //se envian los contenidos en formato JSON
    echo json_encode($request);
    exit();
}

if($metodo =="PUT"){

    //se obtienen los contenidos de la petición 
    $postdata = file_get_contents("php://input");
    //se decofican los datos que vienen en JSON
    $request = json_decode($postdata);
    //Se crea el procuto  con los datos obtenidos
    $producto = new Producto();
    $producto->id = $request->id;
    $producto->nombre= $request->nombre;
    $producto->precio= $request->precio;
    $producto->stock= $request->stock;
    $producto->estado= $request->estado;
    //se llama la función de registo
    $producto->actualizarProducto();
        
    //se crean las cabeceras para la respuesta del servicio
    header("HTTP/1.1 200 OK");
    //se definen los contenidos de respuesta
    $request->recibido = 'OK';
    //se envian los contenidos en formato JSON
    echo json_encode($request);
    exit();    

}

if($metodo =="DELETE"){
    
    $usuario = new Usuario();
    if(isset($_GET['param'])){
    $usuario ->eliminarUsuario($_GET['param']);
    echo json_encode($request);
    }
    header("HTTP/1.1 200 OK");
    echo json_encode($request);
    exit(); 

}

//login

if($metodo == "GET"){

    //creación de objeto producto
    $usuario = new Usuario();
    $usuarios = array();
    //si la consulta trae algun parameto
        if(isset($_GET['param'])){
            $usuarios = $usuario->consultarUsuarioLogin($_GET['param']);
            
        }else{
            //si la consulta o trae parametros se consultan todos
          $usuarios =  $usuario->consultarUsuarioLogin();
        }
        // Se envia encabezado con el estado de la solicitud
        header("HTTP/1.1 200 OK");
        //codifico los datos en formato JSON
        echo json_encode($usuarios);
        exit();
}

/*
if($metodo =="POST"){

    //se obtienen los contenidos de la petición 
    $postdata = file_get_contents("php://input");
    //se decofican los datos que vienen en JSON
    $request = json_decode($postdata);
    //Se crea el procuto  con los datos obtenidos
    $usuario = new Usuario();
    $usuario->id_tipo_usuario= $request->id_tipo_usuario;
    $usuario->id_identificacion= $request->id_identificacion;
    $usuario->numero_identificacion= $request->numero_identificacion;
    $usuario->nombre1= $request->nombre1;
    $usuario->nombre2= $request->nombre2;
    $usuario->apellido1= $request->apellido2;
    $usuario->apellido2= $request->apellido2;
    $usuario->direccion= $request->direccion;
    $usuario->telefono= $request->telefono;
    $usuario->celular= $request->celular;
    $usuario->correo= $request->correo;
    $usuario->pass= $request->pass;
    
    //se llama la función de registo
    $usuario->consultarUsuarioLogin();

    //se crean las cabeceras para la respuesta del servicio
    header("HTTP/1.1 200 OK");
    //se definen los contenidos de respuesta
    $request->recibido = 'OK';
    //se envian los contenidos en formato JSON
    echo json_encode($request);
    exit();
}
*/
?>