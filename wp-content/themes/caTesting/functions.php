<?php
	/**
	 * Starkers functions and definitions
	 *
	 * For more information on hooks, actions, and filters, see http://codex.wordpress.org/Plugin_API.
	 *
 	 * @package 	WordPress
 	 * @subpackage 	Starkers
 	 * @since 		Starkers 4.0
	 */

	/* ========================================================================================================================
	
	Required external files
	
	======================================================================================================================== */

	require_once( 'external/starkers-utilities.php' );

	/* ========================================================================================================================
	
	Theme specific settings

	Uncomment register_nav_menus to enable a single menu with the title of "Primary Navigation" in your theme
	
	======================================================================================================================== */

	add_theme_support('post-thumbnails');
	add_image_size( 'gallery-thumb', 100, 100, true );
	add_image_size( 'gallery-img', 700, 9999 );
	
	function register_my_menus() {
	  register_nav_menus(
	    array(
	      'main-nav' => __( 'Main Navigation' ),
	      'from-everywhere' => __( 'From Everywhere' ),
		  'footer-nav' => __( 'Footer Navigation' ),
		  'error-nav' => __( '404 Navigation' )
	    )
	  );
	}
	add_action( 'init', 'register_my_menus' );
	
	function ca_widgets_init() {
		register_sidebar(
			array(
				'name'          => __( 'Contact Information', 'contact_information' ),
				'id'            => 'contact-info',
				'before_widget' => '<div class="contWidg">',
				'after_widget'  => '</div>',
				'before_title'  => '',
				'after_title'   => ''
			)
		);
		register_sidebar(
			array(
				'name'          => __( 'Footer Contact Information', 'footer_contact_information' ),
				'id'            => 'footer-contact-info',
				'before_widget' => '<div class="contWidg">',
				'after_widget'  => '</div>',
				'before_title'  => '',
				'after_title'   => ''
			)
		);
		register_sidebar(
			array(
				'name'          => __( 'Home Buttons', 'home-buttons' ),
				'id'            => 'home-buttons',
				'before_widget' => '<div class="homeButtons">',
				'after_widget'  => '</div>',
				'before_title'  => '',
				'after_title'   => ''
			)
		);
		register_sidebar(
			array(
				'name'          => __( 'General Sidebar', 'general-sidebar' ),
				'id'            => 'general-sidebar',
				'before_widget' => '<div class="generalSidebar">',
				'after_widget'  => '</div>',
				'before_title'  => '',
				'after_title'   => ''
			)
		);
		register_sidebar(
			array(
				'name'          => __( 'Blog Rotator', 'blog-rotator' ),
				'id'            => 'blog-rotator',
				'before_widget' => '<div class="blogRotatorItem">',
				'after_widget'  => '</div>',
				'before_title'  => '',
				'after_title'   => ''
			)
		);
		register_sidebar(
			array(
				'name'          => __( 'Blog Sidebar', 'blog-sidebar' ),
				'id'            => 'blog-sidebar',
				'before_widget' => '<div class="blogSidebar">',
				'after_widget'  => '</div>',
				'before_title'  => '',
				'after_title'   => ''
			)
		);
		register_sidebar(
			array(
				'name'          => __( 'Blog Footer Widgets (use exactly four)', 'blog-footer-widgets' ),
				'id'            => 'blog-footer-widgets',
				'before_widget' => '<div class="blogFooterWidget">',
				'after_widget'  => '</div>',
				'before_title'  => '',
				'after_title'   => ''
			)
		);
		register_sidebar(
			array(
				'name'          => __( 'Events Widget Area', 'events-area' ),
				'id'            => 'events-area',
				'before_widget' => '<div class="eventsArea">',
				'after_widget'  => '</div>',
				'before_title'  => '',
				'after_title'   => ''
			)
		);
	}
	add_action( 'widgets_init', 'ca_widgets_init' );
	
	/* ========================================================================================================================
	
	Actions and Filters
	
	======================================================================================================================== */

//	add_action( 'wp_enqueue_scripts', 'script_enqueuer' );

	add_filter( 'body_class', 'add_slug_to_body_class' );
	


	/* ========================================================================================================================
	
	Custom Post Types - include custom post types and taxonimies here e.g.

	e.g. require_once( 'custom-post-types/your-custom-post-type.php' );
	
	======================================================================================================================== */
	
	function cpt_init() {
	    register_post_type( 'proposal', array( 'public' => true, 'label' => 'Proposals' ) );
		register_post_type( 'gallery', array( 'public' => true, 'label' => 'Galleries' ) );
		register_post_type( 'agendas_and_notes', array( 'public' => true, 'label' => 'Agendas And Notes', 'has_archive' => true ) );
	}
	add_action( 'init', 'cpt_init' );
	
	add_action( 'init', 'create_tags_taxonomies_for_MN', 0 );

	function create_tags_taxonomies_for_MN() 
	{
	  // Add new taxonomy, NOT hierarchical (like tags)
	  $labels = array(
	    'name' => _x( 'Agendas and Notes Tags', 'taxonomy general name' ),
	    'singular_name' => _x( 'tag', 'taxonomy singular name' ),
	    'search_items' =>  __( 'Search Tags' ),
	    'popular_items' => __( 'Popular Tags' ),
	    'all_items' => __( 'All Tags' ),
	    'parent_item' => null,
	    'parent_item_colon' => null,
	    'edit_item' => __( 'Edit Tags' ), 
	    'update_item' => __( 'Update Tags' ),
	    'add_new_item' => __( 'Add New Tags' ),
	    'new_item_name' => __( 'New Tag' ),
	    'separate_items_with_commas' => __( 'Separate tags with commas' ),
	    'add_or_remove_items' => __( 'Add or remove tags' ),
	    'choose_from_most_used' => __( 'Choose from the most used tags' ),
	    'menu_name' => __( 'Agendas and Notes Tags' )
	  ); 

	  register_taxonomy('agendas_and_notes_tags','agendas_and_notes',array(
	    'hierarchical' => false,
	    'labels' => $labels,
	    'show_ui' => true,
	    'update_count_callback' => '_update_post_term_count',
	    'query_var' => true
	  ));
	}
	

	/* ========================================================================================================================
	
	Scripts
	
	======================================================================================================================== */

	/**
	 * Add scripts via wp_head()
	 *
	 * @return void
	 * @author Keir Whitaker
	 */


	// From http://css-tricks.com/snippets/php/sanitize-database-inputs/
	function cleanInput($input) {
		$search = array(
			'@<script[^>]*?>.*?</script>@si',   // Strip out javascript
			'@<[\/\!]*?[^<>]*?>@si',            // Strip out HTML tags
			'@<style[^>]*?>.*?</style>@siU',    // Strip style tags properly
			'@<![\s\S]*?--[ \t\n\r]*>@'         // Strip multi-line comments
		);
		$output = preg_replace($search, '', $input);
		return $output;
	}

	/* ========================================================================================================================
	
	Comments
	
	======================================================================================================================== */

	/**
	 * Custom callback for outputting comments 
	 *
	 * @return void
	 * @author Keir Whitaker
	 */
	function starkers_comment( $comment, $args, $depth ) {
		$GLOBALS['comment'] = $comment; 
		?>
		<?php if ( $comment->comment_approved == '1' ): ?>	
		<li>
			<article id="comment-<?php comment_ID() ?>">
				<?php echo get_avatar( $comment ); ?>
				<h4><?php comment_author_link() ?></h4>
				<time><a href="#comment-<?php comment_ID() ?>" pubdate><?php comment_date() ?> at <?php comment_time() ?></a></time>
				<?php comment_text() ?>
			</article>
		<?php endif;
	}
?>