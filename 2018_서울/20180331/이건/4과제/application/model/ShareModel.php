<?php
	class ShareModel extends Model {

		// 내부 공유
		function in($fidx, $midx){
			$this->sql = "INSERT INTO in_list SET fidx = '{$fidx}', midx = '{$midx}', s_date = now()";
			$this->query();
			alert("공유 되었습니다");
			move("/file?parent=".$_GET['parent']);
		}
	}