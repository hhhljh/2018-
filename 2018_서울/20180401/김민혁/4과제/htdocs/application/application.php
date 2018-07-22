<?php
	Class Application{

		function __construct(){
			$this->getParam();
			$ctr = "{$this->param->type}Controller";
			new $ctr($this->param);
		}

		function getParam(){
			if (isset($_GET['param'])) $get = explode("/", $_GET['param']);
			$param['type'] = isset($get[0]) && $get[0] != "" ? $get[0] : "main";
			$param['page'] = isset($get[1]) && $get[1] != "" ? $get[1] : NULL;
			$param['idx'] = isset($get[2]) && $get[2] != "" ? $get[2] : NULL;
			$param['path'] = isset($_GET['path']) ? $_GET['path'] : "0";
			$this->param = (object)$param;
		}

	}