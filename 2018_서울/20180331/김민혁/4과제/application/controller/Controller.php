<?php
	Class Controller{

		function __construct($param){
			$this->param = $param;
			$model = "Model_{$this->param->type}";
			new $model($this->param);
			$this->model = new $model($this->param);
			$this->index();
		}

		function index(){
			$method = isset($this->param->page) ? $this->param->page : "basic";
			if (method_exists($this, $method)) $this->$method();
			require_once(_VIEW."header.php");
			if (isset($this->param->page)) {
				require_once(_VIEW."{$this->param->type}/{$this->param->page}.php");
			} else{
				require_once(_VIEW."main.php");
			}
			require_once(_VIEW."footer.php");
		}

	}