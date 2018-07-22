<?php
	class Application {
		static function run(){
			if(isset($_GET['q'])){
				ShareController::outShare();
			}
			$param = explode("/",$_GET['param']);
			$type = isset($param[0]) && $param[0] != '' ? $param[0] : "login";
			$controller_name = ucfirst($type)."Controller";
			$controller = new $controller_name();
		}
	}