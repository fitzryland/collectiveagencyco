<?php
/**
 * The template for displaying 404 pages (Not Found)
 *
 * Please see /external/starkers-utilities.php for info on get_template_parts()
 *
 * @package 	WordPress
 * @subpackage 	Starkers
 * @since 		Starkers 4.0
 */
?>
<?php include "parts/header.php"; ?>
<?php include "parts/nav.php"; ?>
<section>
	<h2>Page not found</h2>
	<p>We cannot find what you are looking for. Maybe some of these links will be helpful.</p>
	<?php wp_nav_menu( array( 'theme_location' => 'error-nav' ) ); ?>
</section>
<?php include "parts/footer.php"; ?>