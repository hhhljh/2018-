<?php
	Class fileController extends Controller{

		function file(){
			loginChk();
			$this->fileList = $this->model->fileList();
			$this->folderList = $this->model->folderList();
			$this->parent = $this->model->parent();
			$this->model->fileAction();
		}

		function add(){
			loginChk();
			$this->model->fileAction();
		}

		function update(){
			loginChk();
			$this->update = $this->model->getName();
			$this->model->fileAction();
		}

		function delete(){
			loginChk();
			$this->model->delete();
		}

		function down(){
			loginChk();
			$data = $this->model->getName();
			header("Content-Disposition: attachment; filename=\"{$data->name}\"");
			readfile(_DATA.$data->change_name);
			exit;
		}

	}