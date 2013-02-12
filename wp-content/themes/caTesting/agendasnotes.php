<?php
/*
Template Name: Agendas & Notes
*/
$passedVars = $_GET;
$clickedYear = $passedVars['yr'];
$dateBottom = $passedVars['yr'] . $passedVars['mon'] . "00";
$dateTop = $passedVars['yr'] . $passedVars['mon'] . "99";
$sr = $passedVars['sr'];
?>
<?php include "parts/header.php"; ?>
<?php include "parts/nav.php"; ?>
<?php
// Tag
$tag = cleanInput($passedVars['tag']);
$validTag = false;
if (isset($passedVars['tag'])) {
	$validTag = true;
};
$tagObj = get_term_by( 'slug', $tag, 'agendas_and_notes_tags');
$tagArray = get_object_vars($tagObj);
$tagName = $tagArray['name'];
// Archive
$passedVars = $_GET;
$dateBottom = $passedVars['yr'] . $passedVars['mon'] . "00";
$dateTop = $passedVars['yr'] . $passedVars['mon'] . "99";
$validDate = false;
if (is_numeric($passedVars['yr']) && is_numeric($passedVars['mon'])) {
	$validDate = true;
};
(int) $dateBottom;
(int) $dateTop;
$monthName = date("F", mktime(0, 0, 0, $passedVars['mon']));
// Search
$validSr = false;
if (isset($sr)) {
	$validSr = true;
	$sr = cleanInput($passedVars['sr']);
//	$sr = "%" . $sr . "%";
};
?>
<article>
	<?php while ( $wp_query->have_posts() ) : $wp_query->the_post(); ?>
	<h1><a href="<?php echo get_page_link(169); ?>"><?php the_title(); ?></a></h1>
	<?php
	if (isset($passedVars['tag'])) {
	?>
		<h2>Tagged: <?php echo $tagName; ?></h2>
	<?php
	} elseif ($validDate == true) {
	?>
		<h2>From: <?php echo $monthName . " " . $passedVars['yr']; ?></h2>
	<?php
	} elseif (isset($sr)) { ?>
		<h2>Search Results For: <?php echo $sr; ?></h2>
	<?php }; ?>
	<?php the_content(); ?>
	<?php endwhile; ?>
</article>
<div class="sidebar">
	<?php include "parts/agendasnotesnav.php"; ?>
	<?php dynamic_sidebar('general-sidebar'); ?>
</div>
<?php
// The CPT Query
$temp = $wp_query;
$wp_query= null;
if ($validDate == true) {
	$wp_query = new WP_Query(array(
		'post_type' => 'agendas_and_notes',
		'paged' => $paged,
		'meta_key' => 'date',
		'orderby' => 'meta_value_num',
		'order' => 'DESC',
		'meta_query' => array(
			array(
				'key' => 'date',
				'value' => $dateBottom,
				'type' => 'numeric',
				'compare' => '>'
			),
			array(
				'key' => 'date',
				'value' => $dateTop,
				'type' => 'numeric',
				'compare' => '<'
			)
		)
	));
//	echo "ARCHIVE";
} elseif ($validTag == true) {
	$wp_query = new WP_Query(array(
		'post_type' => 'agendas_and_notes',
		'paged' => $paged,
		'meta_key' => 'date',
		'orderby' => 'meta_value_num',
		'order' => 'DESC',
		'tax_query' => array(
				array(
					'taxonomy' => 'agendas_and_notes_tags',
					'field' => 'slug',
					'terms' => $tag
				)
			)
	));
//	echo "TAG";
} elseif ($validSr == true) {
	$wp_query = new WP_Query(array(
		'post_type' => 'agendas_and_notes',
		'paged' => $paged,
		'meta_key' => 'date',
		'orderby' => 'meta_value_num',
		'order' => 'DESC',
		'meta_query' => array(
			'relation' => 'OR',
			array(
				'key' => 'agenda',
				'value' => $sr,
				'compare' => 'LIKE',
				'type' => 'CHAR'
			),
			array(
				'key' => 'notes',
				'value' => $sr,
				'compare' => 'LIKE',
				'type' => 'CHAR'
			)
		)
	));
//	echo "SEARCH";
} else {
	$wp_query = new WP_Query(array(
		'post_type' => 'agendas_and_notes',
		'paged' => $paged,
		'meta_key' => 'date',
		'orderby' => 'meta_value_num',
		'order' => 'DESC'
	));
//	echo "NORMAL";
};
?>
<section class="transp">
	<?php
	$maxPages = $wp_query->max_num_pages;
	$curPageNum = (get_query_var('paged')) ? get_query_var('paged') : 1;
	if ($curPageNum > 1) {?>
		<ul class="paginationNav">
				<li class="newer"><?php previous_posts_link('« More Recent Meetings', 0); ?></li>
				<?php if ($maxPages != $curPageNum) {?>
					<li class="older"><?php next_posts_link('Older Meetings »', 0); ?></li>
				<?php }; ?>
		</ul>
	<?php }; ?>
	<?php
	if ( have_posts() ):
		while ( $wp_query->have_posts() ) : $wp_query->the_post();
			$rawdate = get_field('date');
			$weekDay = date("l", strtotime($rawdate));
			$month = date("F", strtotime($rawdate));
			$monDay = date("j", strtotime($rawdate)) . date("S", strtotime($rawdate));
			$year = date("Y", strtotime($rawdate));
			$time = get_field('time');
			$agenda = get_field('agenda');
			$notes = get_field('notes');
			$meetingType = get_field('meeting_type');
		?>
			<div class="civicBlock">
				<div class="title">
					<?php 
					$permL = get_permalink();
					if ($meetingType) {
						echo "<h1><a href=\"" . $permL . "\">" . $meetingType . "</a></h2>";
					};
					?>
					<h2><?php echo$weekDay . " " . $month . " " . $monDay . " " . $time . " " . $year; ?></h2>
				</div>
				<div class="agenNote">
					<h2 class="title">Agenda</h2>
					<?php echo $agenda; ?>
				</div>
			<?php if ($notes) {?>
				<p>Visit <a href="<?php the_permalink(); ?>">permalink</a> for full meeting notes.
			<?php } else { ?>
				<a href="<?php the_permalink(); ?>">permalink</a>
			<?php }; ?>
			</div>
		<?php
		endwhile;
		?>
		<ul class="paginationNav">
			<?php if ($curPageNum > 1) { ?>
				<li class="newer"><?php previous_posts_link('« More Recent Meetings', 0); ?></li>
			<?php }; ?>
			<?php if ($maxPages != $curPageNum) {?>
				<li class="older"><?php next_posts_link('Older Meetings »', 0); ?></li>
			<?php }; ?>
		</ul>
		<div class="pagePos">
			<?php
			$passVars = "?";
			$ii = 1;
			$count = count($_GET);
			foreach ($_GET as $k => $v) {
				$passVars .= $k . "=" . $v;
				if ($ii != $count) {
					$passVars .= "&";
				};
				$ii++;
			};
			for ($i = 1; $i <= $maxPages; $i++) {
				echo "<a href=\"" . get_page_link(169) . "page/" . $i . "/" . $passVars . "\"";
				if ($i == $curPageNum) {
					echo " class=\"cur\"";
				};
				echo ">" . $i . "</a>";
			};

			?>
		</div>
	<?php else: ?>
	<div class="civicBlock">
		<p>Your search for <?php echo $sr; ?> did not return any results.</p>
	</div>
	<?php endif; ?>
</section>
<?php /* reset $wp_query to original */ $wp_query = null; $wp_query = $temp; ?>
<?php include "parts/footer.php"; ?>