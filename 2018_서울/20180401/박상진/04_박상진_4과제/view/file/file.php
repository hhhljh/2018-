<?php 
	$path_name = getRouteName();
 	$dir_list = fetchAll("SELECT * FROM files where type='path' and parent='{$path}'");
 	$file_list = fetchAll("SELECT * FROM files where type!='path' and parent='{$path}'");
 ?>
<section class="site-content">
	<div class="file_list">
		<div class="frm_table">
			<h3 class="frm_title">파일 목록</h3>
			<h4 class="path_route">
				<?php echo $path_name ?>
			</h4>
			<div class="data-list">
				<table>
					<colgroup>
						<col width="18%">
						<col width="10%">
						<col width="10%">
						<col width="14%">
						<col width="14%">
						<col width="34%">
					</colgroup>
					<thead>
						<tr>
							<th>파일/디렉토리명</th>
							<th>크기</th>
							<th>종류</th>
							<th>생성일</th>
							<th>수정일</th>
							<th>기능(내부공유,외부공유,이름 변경,삭제)</th>
						</tr>
					</thead>
					<tbody>
	<?php if ($path != 0): ?>
	<tr class="back">
		<td colspan="6"><a href="<?php echo HOME_URL ?>/{$data->parent}">..</a></td>
	</tr>
	<?php endif ?>
	<?php foreach ($dir_list as $data): ?>
	<tr>
		<td colspan="2"><a href="<?php echo HOME_URL ?>/down?path='{$idx}'"><?php echo $data->com_name ?></a></td>
		<td>Folder</td>
		<td><?php echo $data->create_date ?></td>
		<td><?php echo $data->change_date ?></td>
		<td>
			<a href="#" onclick="location.href='<?php echo HOME_URL ?>/share/in';return false;" class="btn point">내부공유</a>
			<a href="#" onclick="if(!confirm('외부공유하시겠습니까?')) return false; location.href='<?php echo HOME_URL ?>/share/out'; return false;" class="btn point">외부공유</a>
			<a href="#" onclick="location.href='<?php echo HOME_URL ?>/file/file_update'; return false;" class="btn submit">수정</a>
			<a href="#" onclick="location.href='<?php echo HOME_URL ?>/file/deleteFile'; return false;" class="btn submit">삭제</a>
							</td>
						</tr>
						<?php endforeach ?>
						<!-- <tr>
							<td colspan="2"><a href="#">Child 1-2</a></td>
							<td>Folder</td>
							<td>2018-03-31</td>
							<td>2018-03-31</td>
							<td>
								<a href="#" class="btn point">내부공유</a>
								<a href="#" class="btn point">외부공유</a>
								<a href="#" class="btn submit">수정</a>
								<a href="#" class="btn submit">삭제</a>
							</td>
						</tr> -->
	<?php foreach ($file_list as $data): ?>
		
	<tr>
		<td><a href="<?php echo HOME_URL ?>/down?path='{$idx}'"><?php echo $data->com_name ?></a></td>
		<td><?php echo get_mb($data->size) ?></td>
		<td><?php echo $data->type ?></td>
		<td><?php echo $data->create_date ?></td>
		<td><?php echo $data->change_date ?></td>
		<td>
			<a href="#" onclick="location.href = '<?php echo HOME_URL ?>/share/in'" class="btn point">내부공유</a>
			<a href="#" onclick='location.href="<?php echo HOME_URL ?>/share/out"' class="btn point">외부공유</a>
			<a href="#" onclick="location.href='<?php echo HOME_URL ?>/file/file_update'" class="btn submit">수정</a>
			<a href="#" onclick="location.href='<?php echo HOME_URL ?>/file/deleteFile'" class="btn submit">삭제</a>
		</td>
	</tr>
	<?php endforeach ?>
				<!-- <tr>
							<td><a href="#">file2.zip</a></td>
							<td>1 MB</td>
							<td>zip</td>
							<td>2018-03-31</td>
							<td>2018-03-31</td>
							<td>
								<a href="#" class="btn point">내부공유</a>
								<a href="#" class="btn point">외부공유</a>
								<a href="#" class="btn submit">수정</a>
								<a href="#" class="btn submit">삭제</a>
							</td>
						</tr> -->
					</tbody>
				</table>
				<div class="frm_table mt20">
					<form action="" method="post" enctype="multipart/form-data">
						<ul>
							<li>
								<strong>파일 선택 </strong>
								<input type="hidden" name="action" value="file_upload">
								<input type="file" name="file" size="50">
								<button type="submit" class="btn submit">파일 업로드</button>
							</li>
						</ul>
					</form>
				</div>
				<div class="btn_group left">
					<a href="<?php echo HOME_URL ?>/file/file_write" class="btn submit">디렉토리 생성</a>
				</div>
			</div>
		</div>
	</div>
</section>
<footer id="footer">
	Copyright (c) 2018 webskills All Right Reserved.
</footer>
</body>
</html>