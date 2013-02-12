<?php
/*
Template Name: Proposals
*/
?>
<?php include "parts/header.php"; ?>
<?php include "parts/nav.php"; ?>

<?php
$wp_query = new WP_Query(array(
	'post_type' => 'proposal'
));
//print_a($wp_query);
?>
<article>
	<h1><?php the_title(); ?></h1>
	<div><?php the_content(); ?></div>
</article>
<div class="sidebar">
	<?php dynamic_sidebar('general-sidebar'); ?>
</div>
<section class="transp">
<?php
if ( have_posts() ):
	
	while ( $wp_query->have_posts() ) : $wp_query->the_post();
?>
	<div class="civicBlock group">
		<h1 class="title"><?php the_title(); ?></h1>
		<?php the_excerpt(); ?>
		<h3 class="fullT"><a href="<?php the_permalink(); ?>">Full Text</a></h3>
	</div>
	<?php
	endwhile;
	?>
<?php
else:
endif;
?>
</section>




<?php include "parts/footer.php"; ?>