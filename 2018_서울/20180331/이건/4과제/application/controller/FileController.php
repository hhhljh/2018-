<?php
	class FileController extends Controller {

		// 파일 목록 페이지
		function file(){
			$this->parent = isset($_GET['parent']) ? $_GET['parent'] : 0;
			if($this->parent != 0) $this->upParent = $this->model->getUpParent($this->parent);
			$this->list = $this->model->getFileList($this->parent);
		}

		// 파일 수정 페이지
		function update(){
			$this->data = $this->model->getFile($this->param->idx);
		}

		// 파일/디렉토리 삭제
		function delete(){
			switch ($_GET['type']) {
				case 'folder':
					$this->model->deleteFolder($this->param->idx);
					break;
				case 'file':
					$this->model->deleteFile($this->param->idx);
					break;
			}
		}
	}