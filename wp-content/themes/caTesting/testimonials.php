<?php
/*
Template Name: Testimonials
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
	<?php endwhile; ?>
	<div class="testi">
		<h3>Scott Crabtree</h3>
		<p class="org"><a href="http://www.happybrainscience.com/">Happy Brain Science</a></p>
		<p class="m">Member</p>
		<blockquote>Solid science suggests that the number one factor in happiness is relationships with other people. Collective Agency provides an awesome community that makes me happier--and therefore more productive--at work. Joining Collective Agency has been a great investment in both success and happiness.</blockquote>
	</div>
	<div class="testi">
		<div class="meta">
			<h3>Andrejka Coklyat</h3>
			<p class="org"></p>
			<p class="m">Member</p>
			<blockquote>The Collective Agency space has been a stabilizing touchstone for me while I establish myself in my new digs and start up my business. My membership at the Collective Agency gets me out of the house and focused on my work.</blockquote>
		</div>
	</div>
	<div class="testi">
		<h3>Jeffrey Sens</h3>
		<p class="org">Founder and executive director of Pixel Arts</p>
		<p class="m">Member</p>
		<blockquote>Collective Agency gives us an interdisciplinary community of amazing thinkers and doers.  I appreciate their generosity and genuine enthusiasm for social good; they are a wonderful testbed and have helped improve our work.</blockquote>
	</div>
	<div class="testi">
		<h3>Don Park</h3>
		<p class="org"></p>
		<p class="m">Member</p>
		<blockquote>The community at Collective Agency provides a good mix of allowing for concentration-oriented work and opportunities for interaction. Getting a desk here was a great next step in working as a consultant.</blockquote>
	</div>
</section>
<?php include "parts/footer.php"; ?>