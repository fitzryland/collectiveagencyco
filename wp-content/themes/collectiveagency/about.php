<?php
/*
Template Name: About
*/
?>
<?php include "parts/header.php"; ?>
<?php include "parts/nav.php"; ?>
<div class="sidebar">
	<?php dynamic_sidebar('general-sidebar'); ?>
</div>
<section class="transp">
<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
<?php
$amenities = get_field('amenities');
$general = get_field('general');
$floorPlan = get_field('floor_plan');
?>
<div class="aboutWidget">
	<h1><?php the_title(); ?></h1>
	<?php echo $general; ?>
</div>
<div class="aboutWidget">
	<h2>Amenities</h2>
	<?php echo $amenities; ?>
</div>
<div class="aboutWidget">
	<h2>Floor Plan</h2>
	<a href="<?php echo $floorPlan['sizes']['large']; ?>"><img src="<?php echo $floorPlan['sizes']['medium']; ?>"/></a>
</div>
<div class="whoWeAre">
	<div class="item group">
		<h2>Coordinating Council</h2>
		<h3>The Community Organizers of Collective Agency</h3>
	</div>
	<div class="item group">
		<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/fitzProfilePic.jpg"/>
		<h2>Fitz Ryland</h2>
		<h3>Main Community Organizer,</br>Coordinating Council Member</h3>
		<p><a href="http://www.twitter.com/fitzhuge" target="_new">@fitzhuge</a> Portland, Oregon</p>
		<p>Community Organizer, Artist, Web Designer</p>
		<p><a href="http://fitzhughryland.com" target="_new">http://fitzhughryland.com</a></p>
	</div>
	<div class="item group">
		<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/ecostache.jpg"/>
		<h2>Emanuel Costache</h2>
		<h3>Coordinating Council Member</h3>
		<p><a href="http://www.twitter.com/ecostache" target="_new">@ecostache</a> Portland, Oregon</p>
		<p><a href="http://ecostache.com/" target="_new">http://ecostache.com/</a></p>
	</div>
	<div class="item group">
		<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/samb.jpg"/>
		<h2>Sam Balter</h2>
		<h3>Coordinating Council Member</h3>
		<p><a href="http://www.twitter.com/sbbalter" target="_new">@sbbalter</a> Portland, Oregon</p>
		<p>Interested in business, philosophy,tech, and one maybe two other things.</p>
	</div>
	<div class="item group">
		<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/jimb.jpg"/>
		<h2>Jim Blandy</h2>
		<h3>Coordinating Council Member</h3>
		<p><a href="http://www.twitter.com/jimblandy" target="_new">@jimblandy</a> Portland, Oregon</p>
		<p>Free software guy working for Mozilla, learning Japanese and the easy Chopin waltzes. I've got your 27B-6 right here.</p>
		<p><a href="http://www.red-bean.com/jimb" target="_new">http://www.red-bean.com/jimb</a></p>
	</div>
	<div class="item group">
		<h2>Dietrich Ayala</h2>
		<h3>Coordinating Council Member</h3>
		<p><a href="http://www.twitter.com/jimblandy" target="_new">@jimblandy</a> Portland, Oregon</p>
		<p>Firefox OS project manager, food enthusiast, flyer of kites.</p>
		<p><a href="http://noms.in" target="_new">http://noms.in</a>, <a href="http://meatclub.in" target="_new">http://meatclub.in</a>, <a href="http://www.flickr.com/photos/autonome" target="_new">http://www.flickr.com/photos/autonome</a>, <a href="http://www.metafluff.com" target="_new">http://www.metafluff.com</a></p>	
	</div>
	<div class="item group">
		<h2>Former Organizers</h2>
	</div>
	<div class="item group">
		<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/summer.jpg"/>
		<h2>Summer Abbot</h2>
		<p><a href="http://twitter.com/#!/piesiren" target="_new">@piesiren</a> Portland Oregon</p>
		<p>Young Women Social Entrepreneurs, Whiffies, Oregon Kombucha, these things are my life!</p>
		<p><a href="http://www.oregonkombucha.com" target="_new">http://www.oregonkombucha.com</a></p>
		<p>Coordinating Council member <a href="http://collectiveagency.co/thanks-to-coordinating-council-member/" target="_blank">June 15th 2011-January 2012</a></p>
	</div>
	<div class="item group">
		<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/alex.jpg"/>
		<h2>Alex Linsker</h2>
		<p>Statewide Amendment on tax reform Oregon 2014 <a href="http://taxandconversation.com" target="_new" title="http://taxandconversation.com" dir="ltr">taxandconversation.com</a></p>
		<p>Started cozy workplace <a href="http://twitter.com/collectiveagenc">&#64;CollectiveAgenC</a></p>
		<p>Cooperatives. Representative democracy</p>
		<p>Main Community Organizer, June 15th 2011-June 14th 2012</p>
	</div>
</div>
<?php endwhile; ?>
</section>
<?php include "parts/footer.php"; ?>