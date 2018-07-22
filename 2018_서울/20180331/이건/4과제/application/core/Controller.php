<?php
	class Controller {
		var $param;
		var $model;
		var $include_file;

		function __construct(){
			$this->paramSet();
			$this->modelSet();
			$this->action();
			$this->index();
		}

		function paramSet(){
			$get_param = null;
			if(isset($_GET['param'])) $get_param = explode("/",$_GET['param']);
			$param['type'] = isset($get_param[0]) && $get_param[0] != '' ? $get_param[0] : "login";
			$param['action'] = isset($get_param[1]) && $get_param[1] != '' ? $get_param[1] : null;
			$param['idx'] = isset($get_param[2]) && $get_param[2] != '' ? $get_param[2] : null;
			$this->include_file = isset($param['action']) ? $param['action'] : $param['type'];
			$this->is_member = isset($_SESSION['member']); 
			$this->member = $this->is_member ? $_SESSION['member'] : null;
			$this->param = (Object)$param; 
		}

		function modelSet(){
			$model_name = ucfirst($this->param->type)."Model";
			$this->model = new $model_name($this);
		}

		function action(){
			if(isset($_POST['action'])){
				$this->model->action();
			}
			if(method_exists($this,$this->include_file)){
				$method = $this->include_file;
				$this->$method();
			}
		}

		function index(){
			$this_arr = (Array)$this;
			extract($this_arr);
			include_once(VIEW_PATH."/template/header.php");
			include_once(VIEW_PATH."/{$param->type}/{$include_file}.php");
			include_once(VIEW_PATH."/template/footer.php");
		}
	}