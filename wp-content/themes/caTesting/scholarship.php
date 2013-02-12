<?php
/*
Template Name: Scholarship
*/
?>
<?php include "parts/header.php"; ?>
<?php include "parts/nav.php"; ?>

<section>
<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
<?php
$details = get_field('details');
?>
<div class="memBlock">
	<form action="https://www.paypal.com/cgi-bin/webscr" method="post" name="subscribewithpaypal">
		<div id="priceGridMemSchol" class="clear">
			<div class="cell r1 c1"><h1>Membership</h1></div>
			<div class="cell r1 c2"><h3>Rate</h3></div>
			<div class="cell r1 c3"><h3>Quantity</h3></div>
			<div class="cell r1 c4"><h3>Total</h3></div>
			<div class="cell r2 c1"><h2><a href="#flexDesc">Flexible Desk</a></h2></div>
			<div class="cell r2 c2">$250</div>
			<div class="cell r2 c3"><input id="flexAmt" class="flexAmt" type="text" name="flexAmt" size="2"></div>
			<div id="flexyRate" class="cell r2 c4">$0</div>
			<div class="cell r3 c1"><h2><a href="#flexDesc">Reserved Desk</a></h2></div>
			<div class="cell r3 c2">$380</div>
			<div class="cell r3 c3"><input id="permAmt" class="permAmt" type="text" name="permAmt" size="2"></div>
			<div id="permyRate" class="cell r3 c4">$0</div>
			<div class="cell r4 c1"><h2><a href="#flexDesc">Scholarship A</a></h2></div>
			<div class="cell r4 c2">$50</div>
			<div class="cell r4 c3"><input class="lower" type="radio" name="schol" value="lower"></div>
			<div id="scholATotal" class="cell r4 c4">$0</div>
			<div id="flexDesc" class="cell r5 c1"><h2><a href="#flexDesc">Scholarship B</a></h2></div>
			<div class="cell r5 c2">$160</div>
			<div class="cell r5 c3"><input class="higher" type="radio" name="schol" value="higher"></div>
			<div id="scholBTotal" class="cell r5 c4">$0</div>
			<div class="cell r6 c1"></div>
			<div class="cell r6 c2"></div>
			<div class="cell r6 c3">Monthly Total</div>
			<div id="monthlyTotal" class="cell r6 c4">$0</div>
			<div class="cell r7 c1"></div>
			<div class="cell r7 c2"></div>
			<div class="cell r7 c3">Last Month</div>
			<div id="lastPayment" class="cell r7 c4">$0</div>
			<div class="cell r8 c1"></div>
			<div class="cell r8 c2"></div>
			<div class="cell r8 c3">Initial Payment</div>
			<div id="initPayment" class="cell r8 c4">$0</div>
			<div class="cell r9 c1"></div>
			<div class="cell r9 c2"></div>
			<div class="cell r9 c3">
				<div id="updateLink" class="button">Update</div>
			</div>
			<div class="cell r9 c4">
				<div class="ivSubmit button">Contribute</div>
				<div class="vSubmit button hidden">Contribute</div>
			</div>
		</div>
		<input type="hidden" name="cmd" value="_xclick-subscriptions">
		<input type="hidden" src="./Membership    Collective Agency  cozy workplace  meeting rooms, coworking_files/pixel.gif">
		<input type="hidden" name="business" value="fitzryland@gmail.com">
		<input type="hidden" name="currency_code" value="USD">
		<input type="hidden" name="item_name" value="">
		<input type="hidden" name="no_shipping" value="1">
		<input type="hidden" name="no_note" value="1">
		<input type="hidden" name="a1" value="">
		<input type="hidden" name="p1" value="1">
		<input type="hidden" name="t1" value="M">
		<input type="hidden" name="a3" value="">
		<input type="hidden" name="p3" value="1">
		<input type="hidden" name="t3" value="M">
		<input type="hidden" name="src" value="1">
		<input type="hidden" name="sra" value="0">
		<input type="hidden" name="rm" value="2">
		<input type="hidden" name="cancel_return" value="http://collectiveagency.co/paid-member-cancel/">
		<input type="hidden" name="return" value="http://collectiveagency.co/paid-member-success/">
	</form>
</div>
<div class="memBlock">
	<?php the_content(); ?>
</div>
<?php endwhile; ?>
</section>

<?php include "parts/footer.php"; ?>