<?php
	Class shareController extends Controller{

		function in_add(){
			loginChk();
			$this->model->in_add();
		}

		function in_list(){
			loginChk();
			$this->list = $this->model->in_list();
			$this->model->inDelete();
		}

		function down(){
			$data = $this->model->getFile();
			header("Content-Disposition: attachment; filename=\"{$data->name}\"");
			readfile(_DATA.$data->change_name);
			exit;
		}

		function out_add(){
			$this->model->out_add();
		}

	}