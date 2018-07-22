<?php 
	extract($_POST);
	$msg = "완료";
	switch ($action) {
		case 'insert':
			$sql = "SELECT * FROM member where id='{$id}'";
			access(rowCount($sql) == 0,"중복된 아이디가 있습니다");
			$pw = hash("sha256",$pw.$id);
			$member = $_SESSION['member'];
			$sql = "INSERT INTO member SET
					id='{$id}',
					pw='{$pw}',
					name='{$name}',
					level='{$level}'
					";
			$url = HOME_URL."/member/member_list";
		break;
		case 'update':
			$sql = "SELECT * FROM member where idx='{$idx}'";
			access(rowCount($sql) == 0,"중복된 아이디가 있습니다");
			$pw = hash("sha256",$pw.$id);
			$sql = "UPDATE member SET
				id='{$id}',
				pw='{$pw}',
				name='{$name}',
				level='{$level}'
			";
			$url = HOME_URL."/member/member_list";
		break;
	}

	query($sql);
	alert($msg);
	move($url);
 ?>