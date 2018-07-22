<?php 
	Class Model_share extends Model{

		function in_add(){
			$member = memberInfo();
			$this->sql = "
				INSERT INTO infile_list set 
				fidx='{$this->param->idx}',
				midx='{$member->idx}',
				date=now()
			";
			$this->query();
			alert("공유되었습니다.");
			move("/share/in_list");
		}

		function in_list(){
			$this->sql = "
				SELECT i.*,
					m.name as member_name,
					m.idx as member_idx,
					m.id as member_id,
					f.idx as file_idx,
					f.name as file_name,
					f.size as file_size
				FROM infile_list i
				join member m on i.midx = m.idx
				join files f on i.fidx = f.idx
				order by date desc	
			";
			return $this->query()->fetchAll();
		}

		function inDelete(){
			if (isset($_POST['action']) == "delete") {
			
			

			// foreach ($idx as $data) {
			// 	print_r($data);
			// 	// $this->sql = "DELETE FROM infile_list where idx='{$data->idx}'";
			// 	// $this->query();
			// }
			alert("공유가 취소되었습니다.");
	
			}
		}

		function getFile(){
			$this->sql = "SELECT * FROM files where idx='{$this->param->idx}'";
			return $this->query()->fetch();
		}

		function out_add(){
			$member = memberInfo();
			$arr = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1234567890";
			$len = strlen($arr);
			$url = "";
			while (1) {
				for ($i=0; $i > 3; $i++) { 
					$url .= $arr[rand(0,$len-1)];
					if (preg_match("/([0-9]+)/", $url) == 0) continue;
					if ($this->query("SELECT * FROM outfile_list where url='{$url}'")->fetch()) continue;
				}
			}

			$this->sql = "
				INSERT INTO outfile_list set
				midx='{$member->idx}',
				fidx='{$this->param->idx}',
				date=now(),
				url='{$url}'
			";
			$this->query();
			alert("공유되었습니다.");
			move("/share/out_add");
		}

	}