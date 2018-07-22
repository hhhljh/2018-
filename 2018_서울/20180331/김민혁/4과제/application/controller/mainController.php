<?php
	Class mainController extends Controller{

		function basic(){
			memberChk();
			$this->model->login();
		}
		
	}