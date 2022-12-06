<?php
        class Conexion{
            var $username="root";
            var $password="";
            var $host="localhost";
            var $db="simv";
            var $mysqli;

            function __construct(){
                $this->mysqli = new mysqli($this->host, $this->username,$this->password, $this->db);
                if($this->mysqli->connect_error){
                    die("Error de conexión (" . $this->mysqli -> connect_errno . ")" . $this->mysqli -> connect_error);
                }
            }
            function executeQuery($sql){
                
                $res = $this->mysqli->query($sql);
                return $res;  
            }        
             function close(){
                 $this->mysqli->close();
            }

            function lastId(){
                return $this->mysqli->insert_id;
            }
        }
	?>