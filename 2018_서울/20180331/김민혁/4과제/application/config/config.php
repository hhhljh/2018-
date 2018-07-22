<?php
	session_start();

	function alert($msg){
		echo "<script>alert('{$msg}');</script>";
	}

	function move($url = false){
		echo "<script>";
			echo $url ? "location.replace('{$url}');" : "history.back();";
		echo "</script>";
		exit;
	}

	function access($bool,$msg,$url = false){
		if ($bool) {
			alert($msg);
			move($url);
		}
	}

	function loginChk(){
		access(!isset($_SESSION['member']),"회원만 접근할 수 있습니다.","/");
	}

	function memberChk(){
		access(isset($_SESSION['member']),"이미 로그인 하셨습니다.","/file/file");
	}

	function adminChk(){
		access($_SESSION['member']->level != "10","관리자만 접근할 수 있습니다.");
	}

	function memberInfo(){
		if (isset($_SESSION['member'])) return $_SESSION['member'];
	}

	function file_upload($file){
		$tmp_name = $file['tmp_name'];
		$name = $file['name'];
		access($tmp_name == "","파일이 업로드 되지 않았습니다.");
		if (is_uploaded_file($tmp_name)) {
			$change_name = time().rand(0,9999).$name;
			if (move_uploaded_file($tmp_name, _DATA.$change_name)) {
				return $change_name;
			}
		}
	}

	function get_size($size){
		$size /= 1024*1024;
		if ($size > 1) {
			$size = number_format($size);
		} else{
			$size = floor($size * 1000) / 1000;
		}
		return $size."MB";
	}

	function __autoload($name){
		$name = strtolower($name);
		$name2 = preg_replace("/(model|application)(.*)/","$1", $name);
		switch ($name2) {
			case 'model': $dir = _MODEL; break;
			case 'application': $dir = _APP; break;
			default: $dir = _CTR; break;
		}
		require_once("{$dir}{$name}.php");
	}