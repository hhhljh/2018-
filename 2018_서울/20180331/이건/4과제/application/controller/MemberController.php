<?php
	class MemberController extends Controller {

		function member(){
			access($this->member->level == 10, "접근 권한이 없습니다.");
			$this->list = $this->model->getMemberList();
		}

		function update(){
			$this->data = $this->model->getMember($this->param->idx);
		}

		function delete(){
			$this->model->deleteMember($this->param->idx);
		}
	}