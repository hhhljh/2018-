<?php 
	$list = fetchAll("SELECT * FROM member order by idx asc");

 ?>
<section class="site-content">
	<div class="member_list">
		<div class="frm_table">
			<h3 class="frm_title">회원 목록</h3>
			<div class="data-list">
				<table>
					<colgroup>
						<col width="10%">
						<col width="18%">
						<col width="18%">
						<col width="18%">
						<col width="18%">
						<col width="18%">
					</colgroup>
					<thead>
						<tr>
							<th>순번</th>
							<th>아이디</th>
							<th>이름</th>
							<th>회원구분</th>
							<th>암호(SHA-256+Salt)</th>
							<th>기능(수정,삭제)</th>
						</tr>
					</thead>
					<tbody>
						<?php foreach ($list as $data): ?>
							<tr>
								<td><?php echo $data->idx ?></td>
								<td><?php echo $data->id ?></td>
								<td><?php echo $data->name ?></td>
								<td><?php echo $data->level == 10 ? "관리자" : "사용자"?></td>
								<td><?php echo $data->pw ?></td>
								<td>
		<button type="button" onclick="location.href ='<?php echo HOME_URL ?>/member/member_update'; return false;">수정</button>
									<button type="button" onclick='if(!confirm("삭제하시곘습니까?")) return false; location.href="<?php echo HOME_URL ?>/member/delete"'>삭제</button>
								</td>
							</tr>
						<?php endforeach ?>
<!-- 						<tr>
							<td>1</td>
							<td>admin</td>
							<td>관리자</td>
							<td>관리자</td>
							<td>dbe9787aaf4002c6662e490b3f1f7512807459b6dee2e1c2e56738e1cbbd993c</td>
							<td>
								<a href="#" class="btn submit">수정</a>
								<a href="#" class="btn submit">삭제</a>
							</td>
						</tr>
						<tr>
							<td>2</td>
							<td>user1</td>
							<td>유저1</td>
							<td>일반회원</td>
							<td>2fc577149080578c983f969a6ce84146fb79b5e17c0447d4e0718e039d62da19</td>
							<td>
								<a href="#" class="btn submit">수정</a>
								<a href="#" class="btn submit">삭제</a>
							</td>
						</tr>
						<tr>
							<td>3</td>
							<td>user2</td>
							<td>유저2</td>
							<td>일반회원</td>
							<td>7a9f58a002c9682fceda675a74759336805785d34c0f10ce1cee6e8315a17711</td>
							<td>
								<a href="#" class="btn submit">수정</a>
								<a href="#" class="btn submit">삭제</a>
							</td>
						</tr>
						<tr>
							<td>4</td>
							<td>user3</td>
							<td>유저3</td>
							<td>일반회원</td>
							<td>d9f593bb452232b6a85b46816ee33292a4776a22c09973cbc138e4e91242c96c</td>
							<td>
								<a href="#" class="btn submit">수정</a>
								<a href="#" class="btn submit">삭제</a>
							</td>
						</tr> -->
					</tbody>
				</table>
				<div class="btn_group right">
					<a href="<?php echo HOME_URL ?>/member/member_write" class="btn submit">회원추가</a>
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