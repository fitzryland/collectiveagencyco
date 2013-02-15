<?php
$pageID = $post->ID;
$pageLink = get_page_link($pageID);
?>
<div class="searchWrap">
	<h2>Agendas &amp; Notes</h2>
	<form role="search" method="get" id="searchform" action="<?php echo $pageLink; ?>">
	    <div><label class="screen-reader-text" for="s"></label>
	        <input type="text" value="" name="sr" id="sr" />
	        <input type="submit" id="searchsubmit" value="Search" />
	    </div>
	</form>
</div>
<?php
							// Archive Stuff
$postTemp = $post;
$temp_wp_query = $wp_query;
global $post;
$wp_query = new WP_Query(array(
	'post_type' => 'agendas_and_notes',
	'posts_per_page' => 9999999
));
// put all meeting dates into the array $meetingDates
$meetingDates = array();
while ( $wp_query->have_posts() ) : $wp_query->the_post();
	$rawDate = get_field('date');
	$fullDate = substr($rawDate, 0, 6);
	array_push($meetingDates, $fullDate);
endwhile;
$uniqueDates = array_unique($meetingDates);
sort($uniqueDates);
$post = $postTemp;
$multiArray = array();
foreach ($uniqueDates as $value) {
	$year = substr($value, 0, 4);
	$month = substr($value, 4, 6);
	if (!empty($multiArray[$year])) {
		array_push($multiArray[$year], $month);
	} else {
		$multiArray[$year] = array($month);
	};
};
$multiArray = array_reverse($multiArray, true);
$curYear = date("Y");
$curPageNum = get_page_link(169);
wp_reset_query();
?>
<div class="archivesWrap">
	<h3>Archives</h3>
	<ul class="archive accordion">
	<?php
	foreach ($multiArray as $year => $months) { // each year
		echo "<li class=\"year {$year}";
		if ($clickedYear == $year) {
			echo " current\">";
		}
		else if ($year == $curYear && !isset($clickedYear)) {
			echo " current\">";
		} else {
			echo "\">";
		};
		echo $year;
		?>
			<ul class="months">
				<?php
				foreach ($months as $month) { // each month
					$textMonth = date("F",mktime(0, 0, 0, $month, 10));
					echo "<li><a href=\"" . $curPageNum . "?yr=" . $year . "&mon=" . $month . "\">" . $textMonth . "</a></li>";
				};
				?>
			</ul><!--.months-->
		</li>
		<?php
	};
	?>
	</ul><!--.archive-->
</div>
<div class="tagsWrap">
	<h3>Tags</h3>
	<ul class="tags">
	<?php 
	// TODO
	// Put a list of tags here that add the tag slug to the url
	// retrive the tag slug from url and filter wp_query with it.
	$mnTags = get_terms('agendas_and_notes_tags', 'orderby=name');
	//print_a($mnTags);
	foreach ($mnTags as $tagSTD) {
		$tagArray = get_object_vars($tagSTD);
		$tagName = $tagArray['name'];
		$tagSlug = $tagArray['slug'];
	?>
		<li><a href="<?php echo $curPageNum . "?tag=" . $tagSlug; ?>"><?php echo $tagName; ?></a></li>
	<?php }; ?>
	</ul><!--.tags-->
	
</div><!--.tagsWrap-->
<?php
$wp_query = $temp_wp_query;
?>