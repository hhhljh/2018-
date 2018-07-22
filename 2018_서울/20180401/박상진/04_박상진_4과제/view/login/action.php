<?php 
	extract($_POST);
	if($action){
		$sql = "SELECT * FROM member where id='{$id}' and pw='{$pw}'";
		access(cnt($sql) == 0,"아이디 또는 비밀번호가 틀립니다");
		$pw = hash("sha256",$pw.$id);
		query($sql);
		alert("로그인 완료");
		move(HOME_URL."/file");
	}

?>