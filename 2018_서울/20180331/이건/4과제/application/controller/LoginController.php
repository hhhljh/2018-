<?php
	class LoginController extends Controller {

		// 로그인 페이지
		function login(){
			if($this->is_member){
				move("/file");
			}
		}

		// 로그 아웃
		function logout(){
			session_destroy();
			alert("로그아웃되었습니다.");
			move("/login");
		}
	}