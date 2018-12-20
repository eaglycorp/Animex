<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include 'simple_html_dom.php';
include 'db.php';

// $html = file_get_html('https://animeindo.co/anime-list/');
// file_put_contents('html.txt', $html . PHP_EOL, FILE_APPEND | LOCK_EX);

$html = file_get_html('html.htm');

$no = $argv[1];
foreach ($html->find('a[class="localtip"]') as $a => $b) {
	try {
		if ($a < $no) continue;
		$db->db_sql("DELETE FROM animes WHERE id >= '{$no}'");
		$db->db_sql("DELETE FROM anime_genres WHERE id_anime >= '{$no}'");
		$db->db_sql("DELETE FROM videos WHERE id_anime >= '{$no}'");

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
		$sql_insert = "INSERT INTO animes(id,title,description,status,tahun,rating,score,studio,durasi,view,thumbnail,id_series,created_at,updated_at) VALUES ('{$no}','{$title}','{$desc}','{$status}','{$tahun}','{$rating}',{$score},'{$studio}','{$durasi}','{$view}','{$thumbnail}','{$tipe}','{$timestamp}','{$timestamp}')";
		if ($db->db_sql($sql_insert)) {
			echo "\033[93m{$no} | {$link} | DATA [SUCCESS] \033[0m {$timestamp}" . PHP_EOL;
			foreach ($genre_title as $gtv => $gt) {
				$sql_insert_genres = "INSERT INTO anime_genres(id_anime,id_genre,created_at,updated_at) VALUES ('{$no}', (SELECT id FROM genres WHERE title = '{$gt}'),'{$timestamp}','{$timestamp}')";
				if ($db->db_sql($sql_insert_genres)) {
					echo "\033[92m [{$gt}] | [{$no}] - [{$title}] | [GENRES] \033[0m {$timestamp}" . PHP_EOL;
				} else {
					echo "\033[91m [{$gt}] | [{$no}] - [{$title}] | [GENRES]({$link})) \033[0m {$timestamp}" . PHP_EOL;
					$sql_genres = "$sql_insert_genres | {$link}";
					file_put_contents('log_genres.txt', $sql_genres . PHP_EOL, FILE_APPEND | LOCK_EX);
				}
				flush();
			}

			foreach ($html1->find('td[class="eptit"] a') as $key_video => $value_video) {
				$link_episode = $value_video->href;
				$html_videos = file_get_html($link_episode);
				$video_link = "http:" . $html_videos->find('div[class="videoembed toogletheater"] iframe', 0)->src;
				$episode = $key_video + 1;
				$sql_insert_videos = "INSERT INTO videos(id_anime,episode,video_embeded,created_at,updated_at) VALUES ('{$no}', '{$episode}', '{$video_link}','{$timestamp}','{$timestamp}')";
				if ($db->db_sql($sql_insert_videos)) {
					echo "\033[92m [EPISODE {$episode}] | [{$no}] - [{$title}] | [VIDEOS] \033[0m {$timestamp}" . PHP_EOL;
				} else {
					echo "\033[91m [EPISODE {$episode}] | [{$no}] - [{$title}] | [VIDEOS]({$link})) \033[0m {$timestamp}" . PHP_EOL;
					$sql_videos = "\t$sql_insert_videos | {$link}";
					file_put_contents('log_videos.txt', $sql_videos . PHP_EOL, FILE_APPEND | LOCK_EX);
				}
				flush();
			};
		} else {
			echo "\033[91m [FAILED]({$link})) \033[0m {$timestamp}" . PHP_EOL;
			$sql = "$sql_insert | {$link}";
			file_put_contents('logs.txt', $sql . PHP_EOL, FILE_APPEND | LOCK_EX);
		};
		$no++;
		// echo $no++.". ({$link}) | {$descs} || {$desc} {$timestamp}" . PHP_EOL;
	} catch (\Throwable $th) {
		continue;
	}
	flush();
}