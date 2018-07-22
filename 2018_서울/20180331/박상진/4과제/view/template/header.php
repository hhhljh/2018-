
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>웹 하드</title>
	<link rel="stylesheet" type="text/css" href="<?php echo CSS_URL ?>/jquery-ui.min.css">
	<link rel="stylesheet" type="text/css" href="<?php echo CSS_URL ?>/common.css">
	<link rel="stylesheet" type="text/css" href="<?php echo CSS_URL ?>/fontawesome-all.min.css">
	<script type="text/javascript" src="<?php echo JS_URL ?>/jquery-1.12.4.min.js"></script>
	<script type="text/javascript" src="<?php echo JS_URL ?>/jquery-ui.min.js"></script>
	<script type="text/javascript" src="<?php echo JS_URL ?>/common.js"></script>
</head>
<body>
<header id="header">
	<nav class="util">
		<div>
			<?php if ($is_member): ?>
				<?php echo $member->id ?>님
			<?php else: ?>
				<a href="<?php echo HOME_URL ?>/login">로그인</a>
				<a href="<?php echo HOME_URL ?>/login/logout">로그아웃</a>
			<?php endif ?>
		</div>
	</nav>
	<div class="content">
		<h3 class="logo"><a href="<?php echo HOME_URL ?>/file">웹 하드</a></h3>
		<ul class="gnb">
			<li><a href="<?php echo HOME_URL ?>/member/member_list">회원 목록</a></li>
			<li><a href="<?php echo HOME_URL ?>/file">파일 목록</a></li>
			<li><a href="<?php echo HOME_URL ?>/share/outshare_list">외부공유 목록</a></li>
			<li><a href="<?php echo HOME_URL ?>/share/inshare_list">내부공유 목록</a></li>
		</ul>
	</div>
</header>