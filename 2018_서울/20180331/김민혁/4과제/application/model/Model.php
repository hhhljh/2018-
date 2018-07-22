<?php
	Class Model{

		function __construct($param){
			$this->param = $param;
			$this->db = new PDO("mysql:host=localhost;dbname=0331;charset=utf8;","root","");
			$this->db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_OBJ);
		}

		function query($sql = false){
			if ($sql) $this->sql = $sql;
			if ($res = $this->db->query($this->sql)) {
				return $res;
			} else{
				echo $this->sql;
				echo "<pre>";
				print_r($this->db->errorInfo());
				echo "</pre>";
			}
		}

		function fetch($sql = false){
			if ($sql) $this->sql = $sql;
			return $this->query()->fetch();
		}

		function fetchAll($sql = false){
			if ($sql) $this->sql = $sql;
			return $this->query()->fetchAll();
		}

		function cnt($sql = false){
			if ($sql) $this->sql = $sql;
			return $this->query()->rowCount();
		}


	}