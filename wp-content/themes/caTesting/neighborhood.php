<?php
/*
Template Name: Neighborhood
*/
?>
<?php include "parts/header.php"; ?>
<?php include "parts/nav.php"; ?>
<div class="sidebar">
	<?php dynamic_sidebar('general-sidebar'); ?>
</div>
<section class="group">
	<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
		<h1><?php the_title(); ?></h1>
	<?php the_content(); ?>
	<ul>
		<li><a href="http://bowerybagels.com/">Bowery Bagels</a></li>
		<li><a href="http://www.lansugarden.org/">Lan Su Chines Garden</a></li>
		<li><a href="http://www.giltclub.com/">The Guilt Club</a></li>
		<li><a href="http://www.davisstreettavern.com/">Davis Street Tavern</a></li>
		<li><a href=""></a></li>
	</ul>
	<?php endwhile; ?>
</section>
<?php include "parts/footer.php"; ?>