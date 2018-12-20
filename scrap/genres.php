<?php
include 'simple_html_dom.php';
include 'db.php';

$html = file_get_html('https://animeindo.co/genre-anime/');

$batch = array();
foreach ($html->find('a') as $a) {
		$title = $a->title;
		if (strpos($title, 'View all') !== false){
			$title= str_replace('View all seri in genre ', '', $title);
			$timestamp = date('Y-m-d H:i:s');			
			
			if($db->db_sql("INSERT INTO genres(title,created_at,updated_at) VALUES ('{$title}','{$timestamp}','{$timestamp}')")){
				echo "[SUCCESS] " . PHP_EOL;
			} else {
				echo "\033[31m [FAILED] \033[0m" . PHP_EOL;
			};
		}
}