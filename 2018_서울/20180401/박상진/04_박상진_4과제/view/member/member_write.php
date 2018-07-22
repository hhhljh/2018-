
<section class="site-content">
	<div class="member_write">
		<div class="frm_table">
			<form action="" method="post">
				<fieldset><legend class="frm_title">Add Member</legend>
					<input type="hidden" name="action" value="insert">
					<ul>
						<li>
							<label>
								<strong>아이디</strong>
								<input type="text" name="id" class="fullSize" size="40" placeholder="아이디을(를) 입력해주세요." autofocus="">
							</label>
						</li>
						<li>
							<label>
								<strong>비밀번호</strong>
								<input type="text" name="pw" class="fullSize" size="40" placeholder="비밀번호을(를) 입력해주세요.">
							</label>
						</li>
						<li>
							<label>
								<strong>이름</strong>
								<input type="text" name="name" class="fullSize" size="40" placeholder="이름을 입력해주세요.">
							</label>
						</li>
							<label>
								<strong>권한</strong>
								<select name="level" class="fullSize">
									<option value="1">일반회원</option>
									<option value="10">관리자</option>
								</select>
							</label>
						</li>
					</ul>
					<div class="btn_group">
						<button type="submit" class="btn submit fullSize">작성완료</button>
						<button type="button" class="btn default fullSize" onclick="history.back(); return false;">취소하기</button>
					</div>
				</fieldset>
			</form>
		</div>
	</div>
</section>
<footer id="footer">
	Copyright (c) 2018 webskills All Right Reserved.
</footer>
</body>
</html>