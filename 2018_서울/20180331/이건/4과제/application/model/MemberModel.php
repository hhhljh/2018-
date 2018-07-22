<?php
	class MemberModel extends Model{

		// 회원 목록
		function getMemberList(){
			return $this->fetchAll("SELECT * FROM member");
		}

		// 회원 정보
		function getMember($idx){
			return $this->fetch("SELECT * FROM member where idx = '{$idx}'");
		}

		// 회원 삭제
		function deleteMember($midx){
			$data = $this->fetchAll("SELECT change_name FROM file where midx = '{$midx}'");
			foreach ($data as $list) {
				@unlink(DATA_PATH."/{$data->change_name}");
			}
			$this->query("DELETE FROM member where idx = '{$midx}'");
			$this->query("DELETE FROM file where midx = '{$midx}'");
			$this->query("DELETE FROM in_list where midx = '{$midx}'");
			$this->query("DELETE FROM out_list where midx = '{$midx}'");
			alert("삭제되었습니다.");
			move("/member");
		}

		function action(){
			extract($_POST);
			switch ($action) {
				case 'insert':
					$pw = hash("sha256",$pw.$id);
					access(!$this->cnt("SELECT * FROM member where id = '{$id}'"),"중복된 아이디 입니다.");
					$this->sql = "INSERT INTO member SET id = '{$id}', name = '{$name}', level = '{$level}', pw = '{$pw}'";
					$this->query();
					alert("추가되었습니다.");
					move("/member");
					break;
				case 'update':
					access(!$this->cnt("SELECT * FROM member where id = '{$id}' and idx != '{$this->cr->param->idx}'"),"중복된 아이디 입니다.");
					if(isset($pw)){
						$pw = hash("sha256",$pw.$id);
						$this->sql = "INSERT INTO member SET id = '{$id}', name = '{$name}', level = '{$level}', pw = '{$pw}'";
					} else {
						$this->sql = "INSERT INTO member SET id = '{$id}', name = '{$name}', level = '{$level}'";
					}
					$this->query();
					alert("수정되었습니다.");
					move("/member");
					break;
			}
		}
	}	