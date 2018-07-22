<?php 
	session_start();

	define("DIR_PATH",dirname(__DIR__));
	define("CONFIG",DIR_PATH."/config");
	define("VIEW_PATH",DIR_PATH."/view");
	define("DATA_PATH",DIR_PATH."/data");

	define("HOME_URL","");
	define("CSS_URL",HOME_URL."/css");
	define("IMG_URL",HOME_URL."/img");
	define("JS_URL",HOME_URL."/js");

	$param = null;
	isset($_GET['param']) ? $param = $_GET['param'] : null;
	$param = explode("/",$_GET['param']);
	$type = isset($param[0]) && $param[0] != '' ? $param[0] : "login";
	$action = isset($param[1]) ? $param[1] : NULL;
	$idx = isset($param[2]) ? $param[2] : NULL;
	$include_file = isset($action) ? $action : $type;
	$path = isset($_GET['path']) ? $_GET['path'] : 0;

	$is_member = isset($_SESSION['member']);
	$member = isset($is_member) ? $is_member : NULL;