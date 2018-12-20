<?php
ini_set('display_startup_errors', 1);
ini_set('display_errors', 1);
error_reporting(-1);

include 'simple_html_dom.php';
include 'db.php';

// $html = file_get_html('https://animeindo.co/anime-list/');
// file_put_contents('html.txt', $html . PHP_EOL, FILE_APPEND | LOCK_EX);

$html = file_get_html('html.htm');
$no = 1;
$json = '';
foreach ($html->find('a[class="localtip"]') as $a => $b) {
	if ($a < 78) continue;
	$link = $b->href;
	
	$html1 = file_get_html($link);
	$html2 = str_get_html($html1->find('section[class="animedetails pagewrap"]', 0)->innertext);
	
	$thumbnail = $html2->find('img', 0)->src;
	$title = $html2->find('h2 b', 0)->innertext;
	$genre_title = [];
	foreach ($html2->find('li a') as $g) {
		$genre_title[] = $g->innertext;
	}
	$descs = $html2->find('div[class="animedescon"]', 0)->children(3);
	$descss = str_replace('<p>', '', $descs);
	$desc = str_replace('</p>', '', $descss);

	if ($desc == '<p lang="id">') {
		$ddescs = $html2->find('div[class="animedescon"]', 0)->children(4);
		$ddescss = str_replace('<p>', '', $ddescs);
		$desc = str_replace('</p>', '', $ddescss);
	}

	foreach ($html2->find('section[class="details"]') as $d) {
		$tipes = $d->children(0)->children(1)->innertext;
		switch ($tipes) {
			case 'TV':
				$tipe = '1';
				break;
			case 'Special':
				$tipe = '2';
				break;
			case 'OVA':
				$tipe = '3';
				break;
			case 'ONA':
				$tipe = '4';
				break;
			case 'Movie':
				$tipe = '5';
				break;
		}

		$status = $d->children(1)->children(1)->innertext;
		$episode = $d->children(2)->children(1)->innertext;
		$tahun = $d->children(3)->children(1)->innertext;
		$score = $d->children(4)->children(1)->innertext;
		$rating = $d->children(5)->children(1)->innertext;
		$studio = $d->children(6)->children(1)->innertext;
		$durasis = $d->children(7)->children(1)->innertext;
		if ($durasis == ' menit per episode') {
			$durasi = 0;
		} else {
			$durasi = str_replace(' menit per episode', '', $durasis);
		}
		$views = $d->children(8)->children(1)->innertext;
		$view = str_replace(' Views', '', $views);
	};
	$timestamp = date('Y-m-d H:i:s');
	// $sql_insert = "INSERT INTO animes(id,title,description,status,tahun,rating,score,studio,durasi,view,thumbnail,id_series,created_at,updated_at) VALUES ('{$no}','{$title}','{$desc}','{$status}','{$tahun}','{$rating}',{$score},'{$studio}','{$durasi}','{$view}','{$thumbnail}','{$tipe}','{$timestamp}','{$timestamp}')";
	// if ($db->db_sql($sql_insert)) {
	// 	echo "{$link} | DATA [SUCCESS]" . PHP_EOL;
	// 	foreach ($genre_title as $gt) {
	// 		$sql_insert_genres = "INSERT INTO anime_genres(id_anime,id_genre,created_at,updated_at) VALUES ('{$no}', (SELECT id FROM genres WHERE title = '{$gt}'),'{$timestamp}','{$timestamp}')";
	// 		if($db->db_sql($sql_insert_genres)) {
	// 			echo "\033[0;32m [GENRES] \033[0m" . PHP_EOL;
	// 		} else {
	// 			echo "\033[31m [GENRES]({$link})) \033[0m" . PHP_EOL;
	// 			$sql_genres = "$sql_insert_genres | {$link}";
	// 			file_put_contents('log_genres.txt', $sql_genres . PHP_EOL, FILE_APPEND | LOCK_EX);
	// 		}
	// 	}
	// } else {
	// 	echo "\033[31m [FAILED]({$link})) \033[0m" . PHP_EOL;
	// 	$sql = "$sql_insert | {$link}";
	// 	file_put_contents('logs.txt', $sql . PHP_EOL, FILE_APPEND | LOCK_EX);
	// };
	
	$link = str_replace('animeindo.co/anime', 'shafou.com', $link);
	
	$array[$no] = [
		'title'=> $title, 
		'Genres'=> $genre_title,
		'Link'=> $link,
		'desc'=> $desc,
		'type' => $tipe,
		'status'=> $status,
		'episode'=> $episode,
		'tahun'=> $tahun,
		'score'=> $score,
		'rating'=> $rating,
		'studio'=> $studio,
		'durasi'=> $durasi
	];

	$no++;
	// echo $no++.". ({$link}) | {$descs} || {$desc}" . PHP_EOL;
	$json = json_encode($array);
	if ($a == 98) break;
}
echo $json;