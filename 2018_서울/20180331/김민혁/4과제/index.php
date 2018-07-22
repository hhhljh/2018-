<?php
	define("_ROOT", __DIR__."/");
	define("_PUBLIC", _ROOT."public/");
	define("_APP", _ROOT."application/");
	define("_MODEL", _APP."model/");
	define("_VIEW", _APP."view/");
	define("_CTR", _APP."controller/");
	define("_CONFIG", _APP."config/");
	define("_DATA", _APP."data/");

	define("_URL", str_replace("index.php", "", "http://{$_SERVER['HTTP_HOST']}")."/");
	define("_CSS", _URL."public/css/");
	define("_JS", _URL."public/js/");
	define("_IMG", _URL."public/img/");

	require_once(_CONFIG."config.php");
	new Application();