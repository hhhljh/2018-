<?php 
	$sql = "DELETE FROM member where idx='{$idx}'";
	query($sql);
	alert("삭제되었습니다");
	move();
?>