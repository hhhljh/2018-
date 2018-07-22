<?php 
	extract($_POST);
	switch ($action) {
		case 'dir_add':
			$sql = "
				INSERT INTO files SET
					idx='{$idx}',
					midx = '{$idx}',
					type='{$path}',
					size='{$file}',
					com_name='{$com_name}',
					create_date=now(),
					change_date=now()
				";
		break;
		case 'update':

		break;
		case 'file_upload':
			# code...
		break;
	}
 ?>