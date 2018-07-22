<?php 
	function query($sql){
		$db = new PDO("mysql:host=127.0.0.1;dbname=0331;charset=utf8","root","");
		$db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_OBJ);
		if($res = $db->query($sql)){
			return $res;
		} else {
			echo $sql;
			echo "<pre>";
			print_r($db->errorInfo());
			echo "</pre>";
		}
	}

	function fetchAll($sql){
		return query($sql)->fetchAll();
	}

	function fetch($sql){
		return query($sql)->fetch();
	}

	function rowCount($sql){
		return query($sql)->rowCount();
	}

	function alert($msg){
		echo "<script>alert('{$msg}')</script>";
	}

	function move($url = false){
		echo "<script>";
		echo $url ? "document.location.replace('{$url}')" : "history.back()";
		echo "</script>";
		exit;
	}

	function access($bool,$msg,$url = false){
		if(!$bool){
			alert($msg);
			move($url);
		}
	}

	function file_upload($file){
		$tmp_name = $file['tmp_name'];
		$com_name = $file['name'];
		if(is_uploaded_file($tmp_name)){
			$ext = explode(".",$com_name);
			$ext = array_pop($ext);
			$change_name = time().rand(0,99999).".{$ext}";
			if(!move_uploaded_file($com_name,DATA_PATH."/{$change_name}")){
				echo "<pre>";
				print_r($file);
				echo "</pre>";
				exit;
			}
			return $change_name;
		}
		return null;
	}

	function get_mb($size){
		$size /= 1024*1024;
		if($size > 1)
			$size = number_format($size);
		else 
			$size = floor($size*1000)/1000;
		return $size." MB";
	}

	function getRouteName(){
		$path = isset($_GET['path']) ? $_GET['path'] : 0;
		$root = '<a href="'.HOME_URL.'/file">root</a>';
		$path_name = $root;
		if($path == 0){
			return $path_name;
		} else {
			$data = fetch("SELECT * FROM files where type='path' and parent = '{$path}'");
			$path_name = $data->com_name;
			if($data){
				$data = fetch("SELECT * FROM files where type!='path' and parent = '{$path}'");
				while($data){
					$link = HOME_URL."/file?path={$idx}";
					$path_name = "<a href=\"{$link}\">{$data->parent}</a> &gt; {$path_name}";
				}
			}
			return "{$root} &gt; {$path_name}";
		}
	}
 ?>