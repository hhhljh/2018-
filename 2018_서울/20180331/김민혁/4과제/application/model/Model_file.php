<?php
	Class Model_file extends Model{

		function fileList(){
			$this->sql = "SELECT * FROM files where type='파일' and parent='{$this->param->path}'";
			return $this->query()->fetchAll();
		}

		function folderList(){
			$this->sql = "SELECT * FROM files where type='폴더' and parent='{$this->param->path}'";
			return $this->query()->fetchAll();
		}

		function getName(){
			$this->sql = "SELECT * FROM files where idx='{$this->param->idx}'";
			return $this->query()->fetch();
		}

		function parent(){
			$this->sql = "SELECT * FROM files where idx='{$this->param->path}'";
			return $this->query()->fetch();
		}

		function delete(){
			$chk = $this->query("SELECT * FROM files where idx='{$this->param->idx}'")->fetch();
			if ($chk->type == "폴더") {
				$this->sql = "DELETE FROM files where idx='{$this->param->idx}'";
			} else {
				@unlink(_DATA.$chk->change_name);
				$this->sql = "DELETE FROM files where idx='{$this->param->idx}'";
			}
			$this->query();
			alert("삭제되었습니다.");
			move("/file/file");
		}

		function fileAction(){
			if (isset($_POST['action'])) {
				extract($_POST);
				$msg = "완료되었습니다.";
				$url = "/file/file";
				$member = memberInfo();
				switch ($_POST['action']) {
					case 'add':
						access(trim($name) == "","빈 값이 있습니다.");
						access($this->query("SELECT * FROM files where type='폴더' and parent='{$this->param->path}' and name='{$name}'")->fetch(),"현재 디렉토리에 같은 이름이 있습니다.");
						$this->sql = "
							INSERT INTO files set
							midx='{$member->idx}',
							name='{$name}',
							parent='{$this->param->path}',
							type='폴더',
							create_date=now(),
							change_date=now()
						";
					break;
					case 'update':
						access(trim($name) == "","빈 값이 있습니다.");
						$load = $this->query("SELECT * FROM files where idx='{$this->param->idx}'")->fetch();
						if ($load->type == "폴더") {
							$chk = "SELECT * FROM files where type='폴더' and parent='{$this->param->path}' and name='{$name}'";
						} else{
							$chk = "SELECT * FROM files where type='파일' and parent='{$this->param->path}' and name='{$name}'";
						}
						access($this->query($chk)->fetch(),"현재 디렉토리에 같은 이름이 있습니다.");
						$this->sql = "
							UPDATE files set
							name='{$name}',
							change_date=now() where idx='{$this->param->idx}'
						";
					break;
					case 'upload':
						$change_name = file_upload($_FILES['file']);
						$this->sql = "
							INSERT INTO files set
							name='{$_FILES['file']['name']}',
							change_name='{$change_name}',
							size='{$_FILES['file']['size']}',
							type='파일',
							create_date=now(),
							change_date=now(),
							midx='{$member->idx}',
							parent='{$this->param->path}'
						";
					break;
				}
				$this->query();
				alert($msg);
				move($url);
			}
		}

	}