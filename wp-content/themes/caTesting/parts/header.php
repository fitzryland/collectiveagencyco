<!DOCTYPE HTML>
<!--[if IEMobile 7 ]><html class="no-js iem7" manifest="default.appcache?v=1"><![endif]--> 
<!--[if lt IE 7 ]><html class="no-js ie6" lang="en"><![endif]--> 
<!--[if IE 7 ]><html class="no-js ie7" lang="en"><![endif]--> 
<!--[if IE 8 ]><html class="no-js ie8" lang="en"><![endif]--> 
<!--[if (gte IE 9)|(gt IEMobile 7)|!(IEMobile)|!(IE)]><!--><html class="no-js" lang="en"><!--<![endif]-->
	<head>
		<?php
		$tempQ = $wp_query;
		if (get_query_var('eventDisplay') == 'month') {
			$wp_query = new WP_Query( 'page_id=150' );
		};
		?>
		<title><?php wp_title( '|' ); ?></title>
		<meta charset="<?php bloginfo( 'charset' ); ?>" />
	  	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Remove if you're not building a responsive site. (But then why would you do such a thing?) -->
		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
		<link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/img/favicon.ico"/>
		<meta name="globalsign-domain-verification" content="-
E_2gaVbaMI6L2iCvi1RUJzH7ZTEsktXr4vd0nS1_d" />
		<meta name="google-site-verification" content="_9HSmy4xn-NuKn2k3r6MSniA3vJTiMWPXgtj917bn1o" />
		<?php wp_head(); ?>
		<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/backstretch.js"></script>
		<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/jquery.flexslider-min.js"></script>
		<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/modernizr.js"></script>
		<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js-webshim/minified/polyfiller.js"></script> 
		<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/js.js"></script>
		
<!--		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>-->
		<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?>/style.css"/>
		<link href='http://fonts.googleapis.com/css?family=PT+Sans:400,700,400italic,700italic|Lobster' rel='stylesheet' type='text/css'>
		<script type="text/javascript"> 
			$.webshims.polyfill();
		</script>
		<script type="text/javascript">

		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', 'UA-24356363-1']);
		  _gaq.push(['_trackPageview']);

		  (function() {
		    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();

		</script>
		<?php $wp_query = $tempQ; ?>
	</head>
	<body <?php body_class(); ?>>
<header>
	<a href="/" class="logo">
		<h1><?php bloginfo( 'name' ); ?></h1>
		<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/birds.png"/>
	</a>
	<div class="tagline">
		<?php bloginfo( 'description' ); ?>
	</div>
	<?php dynamic_sidebar('contact-info'); ?>
</header>