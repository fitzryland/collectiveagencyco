<?php include "parts/header.php"; ?>
<?php include "parts/nav.php"; ?>
<?php if ( have_posts() ): ?>
<?php
$blogMetaArray = get_post_meta(16);
$blogTitle = $blogMetaArray['blog_title'][0];
$blogSubtitle = $blogMetaArray['blog_subtitle'][0];
$blogDesc = $blogMetaArray['blog_description'][0];
?>
<div class="blogHeader">
	<h1><a href="/blog"><?php echo $blogTitle; ?></a></h1>
	<h2><?php echo $blogSubtitle; ?></h2>
	<p><?php echo $blogDesc; ?></p>
</div>
<div class="sidebar">
	<?php // include 'parts/blogRotator.php'; ?>
	<?php dynamic_sidebar('blog-sidebar'); ?>
</div>
<section class="blog transp">
	<?php
	$maxPages = $wp_query->max_num_pages; 
	$curPageNum = (get_query_var('paged')) ? get_query_var('paged') : 1;
	if ($curPageNum > 1) {?>
		<ul class="paginationNav">
				<li class="newer"><?php previous_posts_link('« More Recent Posts', 0); ?></li>
				<?php if ($maxPages != $curPageNum) {?>
					<li class="older"><?php next_posts_link('Older Posts »', 0); ?></li>
				<?php }; ?>
		</ul>
	<?php }; ?>
<?php while ( have_posts() ) : the_post(); ?>
	<article>
		<h2 class="title">
			<a href="<?php esc_url( the_permalink() ); ?>" title="Permalink to <?php the_title(); ?>" rel="bookmark"><?php the_title(); ?></a>
		</h2>
		<?php the_content(); ?>
		<?php
		$catList = get_the_category_list(", ");
		echo "<p>Categories: " . $catList . "</p>";
		echo get_the_tag_list('<p>Tags: ',', ','</p>');
		?>
		Published <time datetime="<?php the_time( 'Y-m-d' ); ?>" pubdate><?php the_date(); ?></time>
		<?php comments_template( '', true ); ?>
	</article>
	<?php
	endwhile;
	else:
	?>
	<h2>No posts to display</h2>
	<?php endif; ?>
</section>
<div class="blogFooterWidgetArea group">
	<?php // dynamic_sidebar('blog-footer-widgets'); ?>
</div>
<?php include "parts/footer.php"; ?>