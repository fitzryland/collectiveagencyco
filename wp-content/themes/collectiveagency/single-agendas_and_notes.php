<?php include "parts/header.php"; ?>
<?php include "parts/nav.php"; ?>
<div class="sidebar">
	<?php dynamic_sidebar('general-sidebar'); ?>
	<?php include "parts/agendasnotesnav.php"; ?>
</div>
	<?php
	while ( have_posts() ) : the_post();
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
	<section class="transp">
		<ul class="paginationNav">
			<li class="newer"><?php $newerLink = previous_post_link('%link', 'More Recent Meeting'); ?></li>
			<li class="older"><?php next_post_link('%link', 'Older Meeting'); ?></li>
		</ul>
		<article>
			<div class="title">
				<?php 
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
			<div class="agenNote">
				<h2 class="title">Notes</h2>
				<?php echo $notes; ?>
			</div>
		<?php }; ?>
		</article>
		<ul class="paginationNav">
			<li class="newer"><?php $newerLink = previous_post_link('%link', 'More Recent Meeting'); ?></li>
			<li class="older"><?php next_post_link('%link', 'Older Meeting'); ?></li>
		</ul>
	</section>
	<?php endwhile; ?>
<?php include "parts/footer.php"; ?>