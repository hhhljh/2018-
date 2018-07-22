<?php
	Class Model_member extends Model{

		function memberList(){
			$this->sql = "SELECT * FROM member";
			return $this->query()->fetchAll();
		}

		function memberDelete(){
			$this->sql = "
				DELETE FROM member where idx='{$this->param->idx}';
				DELETE FROM files where midx='{$this->param->idx}';
				DELETE FROM infile_list where midx='{$this->param->idx}';
				DELETE FROM outfile_listwhere midx='{$this->param->idx}';
			";
			$this->query();
			alert("삭제되었습니다.");
			move("/member/mlist");
		}

		function memberUpdate(){
			$this->sql = "SELECT * FROM member where idx='{$this->param->idx}'";
			return $this->query()->fetch();
		}

		function memberAction(){
			if (isset($_POST['action'])) {
				extract($_POST);
				switch ($_POST['action']) {
					case 'add':
						access(trim($id) == "" || trim($pw) == "" || trim($name) == "" || trim($level) == "","빈 값이 있습니다.");
						access($this->fetch("SELECT * FROM member where id='{$id}'"),"중복된 아이디 입니다.");
						$pw = hash("sha256", $pw.$id);
						$this->sql = "
							INSERT INTO member set
							id='{$id}',
							pw='{$pw}',
							name='{$name}',
							level='{$level}'
						";
					break;
					case 'update':
						access(trim($id) == "" || trim($pw) == "" || trim($name) == "" || trim($level) == "","빈 값이 있습니다.");
						access($this->fetch("SELECT * FROM member where id='{$id}'"),"중복된 아이디 입니다.");
						$pw = hash("sha256", $pw.$id);
						$this->sql = "
							UPDATE member set
							id='{$id}',
							pw='{$pw}',
							name='{$name}',
							level='{$level}' where idx='{$this->param->idx}'
						";
					break;
				}
				$this->query();
				alert("완료되었습니다.");
				move("/member/mlist");
			}
		}

	}