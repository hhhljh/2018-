<?php 
	extract($_POST);
	switch ($action) {
		case 'dir_add':
			$sql = "
				INSERT INTO files SET
					idx='{$idx}',
					midx = '{$member->idx}',
					type='{$path}',
					create_date=now(),
					change_date=now()
				";

		break;
		case 'update':
			$ext = '.{$ext}';
		break;
		case 'file_upload':
			access(is_uploaded_file($file),"업로드될 파일이 없습니다");
			$sql = "INSERT INTO files
					idx='{$idx}',
					midx='{$member->idx}',
					com_name='{$com_name}',
					create_date=now(),
					change_date=now(),
					type='file'
			";

			$url = false;
		break;
	}

		query($sql);
		alert("완료");
		move(HOME_URL."/file");
 ?>