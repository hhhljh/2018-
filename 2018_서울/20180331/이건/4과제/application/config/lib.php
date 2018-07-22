<?php
	
	// 메시지 출력
	function alert($msg){
		echo "<script>alert('{$msg}')</script>";
	}	

	// 페이지 이동
	function move($url = false){
		echo "<script>";
			echo $url ? "location.replace('{$url}')" : "history.back();";
		echo "</script>";
		exit;
	}

	// 엑세스
	function access($bool,$msg,$url = false){
		if(!$bool){
			alert($msg);
			move($url);
		}
	}

	// autoload
	function __autoload($class_name){
		switch ($class_name) {
			case 'Application':
			case 'Controller':
			case 'Model':
					$class_path = CORE_PATH."/{$class_name}";
				break;
			default:
					$class_path = preg_replace("/(.*)(Controller|Model)/","$2",$class_name);
					$class_path = ucfirst($class_path);
					$class_path = APP_PATH."/{$class_path}/{$class_name}";
				break;
		}
		include_once("{$class_path}.php");
	}

	// upload
	function upload($file){
		$tmp_name = $file['tmp_name'];
		$name = $file['name'];
		if(is_uploaded_file($tmp_name)){
			$ext = explode(".",$name);
			$ext = strtolower(array_pop($ext));
			$change_name = time()."_".rand(0,9999).".{$ext}";
			if(!move_uploaded_file($tmp_name, DATA_PATH."/{$change_name}")){
				echo "<pre>";
				print_r($file);
				echo "</pre>";
				exit;
			} else {
				return $change_name;
			}
		} else {
			return null;
		}
	}

	// byte -> mega byte
	function getMb($size){
		$size /= 1024*1024;
		if($size > 1){
			$size = number_format($size);
		} else {
			$size = floor($size*1000)/1000;
		}
		return $size."MB";
	}

	// download
	function download($data){
		$path = DATA_PATH."/{$data->change_name}";
		header("Pragma:public");
		header("Expires:0");
		header("Content-Type:application/octet-stream");
		header("Content-Disposition: attachment; filename = \"{$data->name}\"");
		header("Content-Length:{$data->size} ");
		header("Content-Transfer-Encoding:binary ");
		ob_clean();
		flush();
		readfile($path);
		exit;
	}