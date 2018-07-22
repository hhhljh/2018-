<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>웹 하드</title>
	<link rel="stylesheet" type="text/css" href="<?php echo _CSS ?>jquery-ui.min.css">
	<link rel="stylesheet" type="text/css" href="<?php echo _CSS ?>common.css">
	<link rel="stylesheet" type="text/css" href="<?php echo _CSS ?>fontawesome-all.min.css">
	<script type="text/javascript" src="<?php echo _JS ?>jquery-1.12.4.min.js"></script>
	<script type="text/javascript" src="<?php echo _JS ?>jquery-ui.min.js"></script>
	<script type="text/javascript" src="<?php echo _JS ?>common.js"></script>
</head>
<body>
<header id="header">
	<nav class="util">
		<div>
			<?php if (isset($_SESSION['member'])): ?>
			<a href="/member/logout">로그아웃</a>
			<?php else: ?>
			<a href="/">로그인</a>
			<?php endif ?>
		</div>
	</nav>
	<div class="content">
		<h3 class="logo"><a href="/file/file">웹 하드</a></h3>
		<ul class="gnb">
			<?php if (isset($_SESSION['member']) && $_SESSION['member']->level == "10"): ?>
			<li><a href="/member/mlist">회원 목록</a></li>
			<?php endif ?>
			<li><a href="/file/file">파일 목록</a></li>
			<li><a href="/share/out_list">외부공유 목록</a></li>
			<li><a href="/share/in_list">내부공유 목록</a></li>
		</ul>
	</div>
</header>