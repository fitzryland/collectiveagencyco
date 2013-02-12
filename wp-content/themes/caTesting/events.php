<?php
/*
Template Name: Events
*/
?>
<?php include "parts/header.php"; ?>
<?php include "parts/nav.php"; ?>
<section class="transp">
	<div class="eventBlock">
		<form action="https://www.paypal.com/cgi-bin/webscr" method="post" name="eventPayPal">
			<div class="cell r1 c1"><h1>Events</h1></div>
			<div class="cell r1 c2"><h3>Rate</h3></div>
			<div class="cell r1 c3"><h3>Quantity</h3></div>
			<div class="cell r1 c4"><h3>Subtotal</h3></div>
			<div class="cell r2 c1"><h2>Up To 45 People</h2></div>
			<div class="cell r2 c2">$75/hour</div>
			<div class="cell r2 c3"><input id="upTo45" type="text" name="upTo45" size="3"></div>
			<div id="upTo45Total" class="cell r2 c4">$0</div>
			<div class="cell r3 c1"><h2>Up To 125 People</h2></div>
			<div class="cell r3 c2">$125/hour</div>
			<div class="cell r c3"><input id="upTo125" type="text" name="upTo125" size="3"></div>
			<div id="upTo125Total" class="cell r3 c4">$0</div>
			
			<div class="cell r4 c1"><h2>Conference Rooms</h2></div>
			<div class="cell r4 c2">$35/hour/room</div>
			<div class="cell r4 c3"><input id="conRoom" type="text" name="conRoom" size="3"></div>
			<div id="conRoomTotal" class="cell r4 c4">$0</div>
			
			<div class="cell r5 c1"></div>
			<div class="cell r5 c2"></div>
			<div class="cell r5 c3">Total</div>
			<div id="totalTotal" class="cell r5 c4">$0</div>
			<div class="cell r6 c1"></div>
			<div class="cell r6 c2"></div>
			<div class="cell r6 c3">
				<div class="button update">Update</div>
			</div>
			<div class="cell r6 c4 whiteBorder">
				<div class="ivSubmit button">Contribute</div>
				<div class="vSubmit button hidden">Contribute</div>
			</div>
			
			<input type="hidden" name="cmd" value="_xclick">
			<input type="image" src="https://www.paypal.com/en_US/i/scr/pixel.gif">
			<input type="hidden" name="business" value="fitzryland@gmail.com">
			<input type="hidden" name="currency_code" value="USD">
			<input type="hidden" name="item_name">
			<input type="hidden" name="no_shipping" value="1">
			<input type="hidden" name="no_note" value="1">
			<input type="hidden" name="amount">
			<input type="hidden" name="cancel_return" value="http://collectiveagency.co/paid-meeting-cancel/">
			<input type="hidden" name="return" value="http://collectiveagency.co/paid-meeting-success/">
			<input type="hidden" name="rm" value="2">
		</form>
	</div>
	
	<?php
	$meta = get_post_meta(150);
	$desc = $meta['description'][0];
	$fine = $meta['fine_print'][0];
	?>
	<div class="group">
		<div class="desc">
			<p><?php echo $desc; ?></p>
		</div>
		<div class="fine">
			<p><?php echo $fine; ?></p>
		</div>
	</div>
	<div class="cal">
		<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
			<?php the_content(); ?>
		<?php endwhile; ?>
	</div>
	<div class="sidebar">
	</div>
</section>
<?php include "parts/footer.php"; ?>