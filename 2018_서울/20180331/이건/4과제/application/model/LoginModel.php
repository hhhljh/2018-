<?php
	class LoginModel extends Model{

		function action(){
			extract($_POST);
			switch ($action) {
				case 'login':
					$pw = hash("sha256",$pw.$id);
					access($member = $this->fetch("SELECT * FROM member where id = '{$id}' and pw = '{$pw}'"),"아이디 또는 비밀번호가 잘못되었습니다.");
					$_SESSION['member'] = $member;
					alert("로그인 되었습니다.");
					move("/file");
					break;
			}
		}
	}