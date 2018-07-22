<?php
	class FileModel extends Model{

		// 상위 디렉토리
		function getUpParent($parent){
			return $this->fetch("SELECT * FROM file where idx='{$parent}'");
		}

		// 파일 목록
		function getFileList($parent){
			return $this->fetchAll("SELECT * FROM file where parent='{$parent}'");
		}

		// 파일 정보
		function getFile($idx){
			return $this->fetch("SELECT * FROM file where idx = '{$idx}'");
		}

		// 디렉토리 삭제
		function deleteFolder($idx){
			$idxs = $parent = [];
			$list = $this->fetchAll("SELECT idx FROM file where parent='{$idx}'");
			foreach ($list as $data) {
				$parent[] = $data->idx;
			}
			$idxs = $parent;
			while (isset($parent[0])) {
				$parent = implode(",",$parent);
				$child_list = $this->fetchAll("SELECT idx FROM file where parent in ({$parent})");
				$parent = [];
				foreach ($child_list as $data) {
					$idxs[] = $data->idx;
					$parent[] = $data->idx;
				}
			}
			$idxs[] = $idx;
			$idxs = implode(",",$idxs);
			$file_list = $this->fetchAll("SELECT change_name FROM file where idx in ({$idxs}) and type = 'file'");
			foreach ($file_list as $data) {
				@unlink(DATA_PATH."/{$data->change_name}");
			}
			$this->sql = "DELETE FROM file where idx in ({$idxs})";
			$this->query();
			alert("삭제되었습니다.");
			move("/file?parent=".$_GET['parent']);
		}

		// 파일 삭제
		function deleteFile($idx){
			$data = $this->fetch("SELECT change_name FROM file where idx = '{$idx}'");
			@unlink(DATA_PATH."/{$data->change_name}");
			$this->query("DELETE FROM file where idx = '{$idx}'");
			alert("삭제되었습니다.");
			move("/file?parent=".$_GET['parent']);
		}

		function action(){
			$parent = isset($_GET['parent']) ? $_GET['parent'] : 0;
			$midx = $this->cr->member->idx;
			extract($_POST);
			switch ($action) {
				case 'dirInsert':
					access(!$this->cnt("SELECT * FROM file where name = '{$name}' and parent = '{$parent}'"),"동일한 이름의 디렉토리가 있습니다.");
					$this->sql = "INSERT INTO file SET name='{$name}', parent='{$parent}', midx='{$midx}', type='folder', m_date = now(), c_date = now()";
					$this->query();
					alert("추가되었습니다.");
					move("/file?parent=".$parent);
					break;
				case 'upload':
					$file = $_FILES['file'];
					access(is_uploaded_file($file['tmp_name']),"업로드된 파일이 없습니다.");
					$change_name = upload($file);
					access(!$this->cnt("SELECT * FROM file where name = '{$file['name']}' and parent = '{$parent}'"),"동일한 이름의 파일가 있습니다.");
					$this->sql = "INSERT INTO file SET name='{$file['name']}', parent='{$parent}', midx='{$midx}', type='file',change_name = '{$change_name}', m_date = now(), c_date = now(), size = '{$file['size']}'";
					$this->query();
					alert("업로드되었습니다.");
					move("/file?parent=".$parent);
					break;
				case 'update':
					access(!$this->cnt("SELECT * FROM file where name = '{$name}' and parent = '{$parent}'"),"동일한 이름의 파일 또는 디렉토리가 있습니다.");
					$this->sql = "UPDATE file SET name='{$name}', c_date = now() where idx = '{$this->cr->param->idx}'";
					$this->query();
					alert("수정되었습니다.");
					move("/file?parent=".$parent);
					break;
			}
		}
	}