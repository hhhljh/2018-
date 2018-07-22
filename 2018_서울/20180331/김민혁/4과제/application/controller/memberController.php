<?php
	Class memberController extends Controller{

		function mlist(){
			adminChk();
			$this->list = $this->model->memberList();
		}

		function add(){
			adminChk();
			$this->model->memberAction();
		}

		function update(){
			adminChk();
			$this->update = $this->model->memberUpdate();
			$this->model->memberAction();
		}

		function delete(){
			adminChk();
			$this->model->memberDelete();
		}

		function logout(){
			loginChk();
			access(session_destroy(),"로그아웃 되었습니다.","/");
		}
	}