<?php

class Database
{
	public $mysqli;

	public function __construct()
	{
		$this->mysqli = new mysqli('68.183.177.9','root', '1121', 'animes');
	}

	public function db_num($sql)
	{
		$result = $this->mysqli->query($sql);
		return $result->num_rows;
	}

	public function db_sql($sql)
	{
		$result = $this->mysqli->query($sql);
		return $result;
	}
}

$db = new Database();