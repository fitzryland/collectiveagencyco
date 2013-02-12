<?php
/*
Template Name: Meetings
*/
$desc = get_field('description');
$fine = get_field('fine_print');
?>
<?php include "parts/header.php"; ?>
<?php include "parts/nav.php"; ?>
<section class="transp">
	<div class="meetBlock">
		<form action="https://www.paypal.com/cgi-bin/webscr" method="post" name="paidMeetingPayPal">
			<div class="cell r1 c1"><h1><?php the_title(); ?></h1></div>
			<div class="cell r1 c2"><h3>Rate</h3></div>
			<div class="cell r1 c3"><h3>Quantity</h3></div>
			<div class="cell r1 c4"><h3>Subtotal</h3></div>
			<div class="cell r2 c1"><h2>By The Hour</h2></div>
			<div class="cell r2 c2">$35/hour</div>
			<div class="cell r2 c3"><input id="conRoom" type="text" name="conRoom" size="3"></div>
			<div id="conRoomH" class="cell r2 c4">$0</div>
			<div class="cell r3 c1"><h2>By The Week</h2></div>
			<div class="cell r3 c2">$1,100/week</div>
			<div class="cell r c3"><input id="conRoomWK" type="text" name="conRoomWK" size="3"></div>
			<div id="conRoomW" class="cell r3 c4">$0</div>
			<div class="cell r6 c1"></div>
			<div class="cell r6 c2"></div>
			<div class="cell r6 c3">Total</div>
			<div id="total" class="cell r6 c4">$0</div>
			<div class="cell r7 c1"></div>
			<div class="cell r7 c2"></div>
			<div class="cell r7 c3">
				<div class="button update">Update</div>
			</div>
			<div class="cell r7 c4">
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
<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
	<div class="desc">
		<?php
		echo $desc;
		?>
	</div>
	<div class="fine">
		<?php
		echo $fine;
		?>
	</div>
<?php endwhile; ?>
</section>
<?php include "parts/footer.php"; ?>