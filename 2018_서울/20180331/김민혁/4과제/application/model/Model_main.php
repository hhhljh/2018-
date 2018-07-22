<?php
	Class Model_main extends Model{

		function login(){
			if (isset($_POST['action'])) {
				extract($_POST);
				access(trim($id) == "" || trim($pw) == "","빈 값이 있습니다.");
				$pw = hash("sha256", $pw.$id);
				$this->sql = "SELECT * FROM member where id='{$id}' and pw='{$pw}'";
				access(!$this->query()->fetch(),"아이디 또는 비밀번호가 일치하지 않습니다.");
				$_SESSION['member'] = $this->query()->fetch();
				alert("로그인 되었습니다.");
				move("/file/file");
			}
		}

	}