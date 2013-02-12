<?php
/*
Template Name: Landing Page
*/
?>
<?php include "parts/header.php"; ?>
<?php include "parts/nav.php"; ?>
<?php
$field = get_field('field_two');
echo $field;
?>
<div class="homeR">
	<?php dynamic_sidebar('home-buttons'); ?>
</div>
<section>
<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
<?php the_content(); ?>

<?php endwhile; ?>
</section>
<?php include "parts/footer.php"; ?>