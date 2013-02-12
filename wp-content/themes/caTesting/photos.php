<?php
/*
Template Name: Photos
*/
$querystr = "
    SELECT DISTINCT $wpdb->posts.* 
    FROM $wpdb->posts, $wpdb->postmeta
    WHERE $wpdb->posts.ID = $wpdb->postmeta.post_id 
    AND $wpdb->posts.post_status = 'publish' 
    AND $wpdb->posts.post_type = 'gallery'
    ORDER BY $wpdb->posts.post_date DESC
 ";

 $pageposts = $wpdb->get_results($querystr, OBJECT);
?>
<?php include "parts/header.php"; ?>
<?php include "parts/nav.php"; ?>

<section>
<?php
if ($pageposts):
	global $post;
	$i = 0;
?>
<div class="flexWrap">
	<div class="galNavWrap">
		<h1><?php the_title(); ?></h1>
		<ul class="galleryNav">
		<?php	foreach ($pageposts as $post):
				$postArray = get_object_vars($post);
				$postTitle = $postArray['post_title'];
		?>
		<li class="<?php if ($i == 0) { echo "current"; }; ?>"><h2><?php echo $postTitle; ?></h2></li>
		<?php
		if ($i == 0) { $i = 1; };
		endforeach;
		?>
		</ul>
	</div>
	<?php
	$ii = 0;
	foreach ($pageposts as $post):
		$postArray = get_object_vars($post);
		$albumTitle = get_the_title($postArray['ID']);
		$albumArray = get_field('album');
	if( $albumArray ): ?>
	<div class="flexPanel <?php if ($ii == 0) { echo "current"; }; ?>">
		<div class="flexslider">
			<ul class="slides">
	            <?php foreach( $albumArray as $image ): ?>
	                <li data-thumb="<?php echo $image['sizes']['gallery-thumb']; ?>">
	                   <img src="<?php echo $image['sizes']['gallery-img']; ?>" alt="<?php echo $image['alt']; ?>" />
	                </li>
	            <?php endforeach; ?>
	        </ul>
	    </div>
	</div>
	<?php endif; 
	$ii = 1;
	endforeach; ?>
</div><!--.flexWrap-->
<?php
else :
endif;
?>
</section>
<?php include "parts/footer.php"; ?>