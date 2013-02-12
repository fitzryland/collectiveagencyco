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
</section>
<?php include "parts/footer.php"; ?>