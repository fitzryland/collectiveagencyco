		<footer class="clear">
			<div class="l">
				<?php dynamic_sidebar('footer-contact-info'); ?>
				<div class="social">
					<a href="https://www.facebook.com/collectiveagency" class="icon" target="_new">
						<img class="facebook" src="<?php echo get_stylesheet_directory_uri(); ?>/images/caSocialIconSprite.png" width="560" height="150" alt="Like Collective Agency on Facebook">
					</a>
					<a href="http://twitter.com/collectiveagenc" class="icon" class="icon" target="_new">
						<img class="twitter" src="<?php echo get_stylesheet_directory_uri(); ?>/images/caSocialIconSprite.png" width="560" height="150" alt="Follow Collective Agency on Twitter">
					</a>
					<a href="mailto:council@collectiveagency.co" class="icon" target="_new">
						<img class="email" src="<?php echo get_stylesheet_directory_uri(); ?>/images/caSocialIconSprite.png" width="560" height="150" alt="Send the Organizers of Collective Agency an Email.">
					</a>
				</div>
			</div>
			<div class="r">
				<?php wp_nav_menu( array( 'theme_location' => 'footer-nav' ) ); ?>
			</div>
		</footer>
		<div class="bgcover"></div>
		<script type="text/javascript">
		setTimeout(function(){var a=document.createElement("script");
		var b=document.getElementsByTagName("script")[0];
		a.src=document.location.protocol+"//dnn506yrbagrg.cloudfront.net/pages/scripts/0010/8272.js?"+Math.floor(new Date().getTime()/3600000);
		a.async=true;a.type="text/javascript";b.parentNode.insertBefore(a,b)}, 1);
		</script>
		<script src="//static.getclicky.com/js" type="text/javascript"></script>
		<script type="text/javascript">try{ clicky.init(100557090); }catch(e){}</script>
		<noscript><p><img alt="Clicky" width="1" height="1" src="//in.getclicky.com/100557090ns.gif" /></p></noscript>
	</body>
	<?php wp_footer(); ?>
</html>