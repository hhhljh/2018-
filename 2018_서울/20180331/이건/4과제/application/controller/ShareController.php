<?php
	class ShareController extends Controller {

		// 내부공유
		function in(){
			$this->model->in($this->param->idx, $this->member->idx);
		}

		// 외부공유
		function out(){
			$this->model->out($this->param->idx, $this->member->idx);
		}
	}