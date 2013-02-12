jQuery(document).ready(function($) {
"use strict";
// Flexslider Init
// The slider being synced must be initialized first
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails",
	slideshowSpeed: 10000
  });
// Slider Display and Outer Control
$('.flexWrap .current').fadeIn();
$('.galleryNav li').click(function() {
	var index = $(this).index(),
		tarPanel;
	$('.galleryNav li').removeClass('current');
	$(this).addClass('current');
	tarPanel = $('.flexPanel')[index];
	$('.flexPanel').fadeOut("fast");
	$(tarPanel).fadeIn('slow');
});


// Main Nav Dropdowns
$('#menu-main-navigation li').not('#menu-main-navigation li ul.sub-menu li').hover(function() {
		$(this).children('.sub-menu').slideDown('fast');
	}, function () {
		$(this).children('.sub-menu').slideUp('fast');
	}
);
// Newsletter Sign Up Slide
var np = $('.homeButtons')[1];
$(np).slideUp();
$('#mc').click(function() {
	$(np).slideDown('slow');
});
//***** Membership *****//
var permRate = 380,
	flexRate = 250,
	scholArate = 50,
	scholBrate = 160,
	permQuant,
	flexQuant,
	permTotal,
	flexTotal,
	firstMonth,
	monthlyTotal,
	initPayment,
	desc;
function updateCalc() {
	var permInpt = document.subscribewithpaypal.permAmt.value,
		flexInpt = document.subscribewithpaypal.flexAmt.value;
	// sets quantity and price of memberships
	if (permInpt == Math.round(permInpt)) {
		// quantity
		permQuant = permInpt;
		// price
		permTotal = permQuant * permRate;
		$('#permyRate').text('$' + permTotal);
		
	} else {
		document.getElementById("permAmt").value = 0;
		permTotal = 0;
	}
	if (flexInpt == Math.round(flexInpt)) {
		// quantity
		flexQuant = flexInpt;
		// price
		flexTotal = flexQuant * flexRate;
		$('#flexyRate').text('$' + flexTotal);
	} else {
		document.getElementById("flexAmt").value = 0;
		flexTotal = 0;
	}
	$('#permyRate').text('$' + permTotal);
	$('#flexyRate').text('$' + flexTotal);
	
// sets price for scholarship levels
// set monthly total
// set description
	if ($('.lower').is(':checked')) {
		$('#scholATotal').text('$' + scholArate);
		$('#scholBTotal').text('$0');
		monthlyTotal = scholArate;
		desc = "One Scholarship A Membership";
	} else if ($('.higher').is(':checked')) {
		$('#scholATotal').text('$0');
		$('#scholBTotal').text('$' + scholBrate);
		monthlyTotal = scholBrate;
		desc = "One Scholarship B Membership";
	} else {
		$('#scholATotal').text('$0');
		$('#scholBTotal').text('$0');
		monthlyTotal = permTotal + flexTotal;
		
		if (permQuant > 0 && flexQuant > 0) {
			if (permQuant > 1) {
				desc = permQuant + " Reserved Desk Memberships and ";
			} else {
				desc = permQuant + " Reserved Desk Membership and ";
			}
			if (flexQuant > 1) {
				desc += flexQuant + " Flexible Desk Memberships";
			} else {
				desc += flexQuant + " Flexible Desk Membership";
			}
		} else if (permQuant > 0) {
			if (permQuant > 1) {
				desc = permQuant + " Reserved Desk Memberships";
			} else {
				desc = permQuant + " Reserved Desk Membership";
			}
		} else if (flexQuant > 0) {
			if (flexQuant > 1) {
				desc = flexQuant + " Flexible Desk Memberships";
			} else {
				desc = flexQuant + " Flexible Desk Membership";
			}
		}
	}
	$('#monthlyTotal').text('$' + monthlyTotal);
	firstMonth = monthlyTotal;
	$('#discount').text(firstMonth);
	initPayment = firstMonth + monthlyTotal;
	$('#firstMonth').text("$" + firstMonth);
	$('#initPayment').text("$" + initPayment);
	$('#lastPayment').text("$" + monthlyTotal);
// update PayPal HTML variables
	document.subscribewithpaypal.item_name.value = desc;
	document.subscribewithpaypal.a1.value = initPayment;
	document.subscribewithpaypal.a3.value = monthlyTotal;
// allow contribute button
	if (initPayment > 0 && !isNaN(initPayment)) {
		$('.ivSubmit').fadeOut('fast');
		$('.vSubmit').fadeIn('slow');
	} else {
		$('.ivSubmit').fadeIn('slow');
		$('.vSubmit').fadeOut('fast');
	}
} // End updateCalc()
$('#flexAmt, #permAmt, .lower, .higher').blur(function() {
	updateCalc(this);
});
$('#flexAmt, #permAmt, .lower, .higher').click(function() {
	updateCalc(this);
});
$('#flexAmt, #permAmt, .lower, .higher, #coup').change(function() {
	updateCalc();
});
$('#updateLink, body.page-template-membership-php .vSubmit').click(function() {
	updateCalc();
});
$('body.page-template-membership-php .vSubmit').click(function() {
	updateCalc();
	document.subscribewithpaypal.submit();
});
//***** Scholarships *****//
// TODO need to review this section when I have internet access to insure that the PayPal variable come through right
var $scholA = $('#scholA'),
	$scholB = $('#scholB');
function scholSubmit(x) {
	if (x === 1) {
		$('.ivSubmit').fadeOut('fast', function() {
			$('.vSubmit').fadeIn('fast');
		});
	} else {
		$('.vSubmit').fadeOut('fast', function() {
			$('.ivSubmit').fadeIn('fast');
		});
	}
}
function scholarshipCalc(x) {
	var scholPrice,
		scholInit,
		scholAP = 160,
		scholBP = 50,
		scholDesc;
	console.log($scholA);
	console.log($scholB);
	console.log(x);
	if (x == $scholA || $scholA.is(':checked')) {
		scholPrice = scholAP;
		$('#scholARate').text('$' + scholPrice);
		$('#scholBRate').text('$0');
		scholDesc = 'One Scholarship Membership at $' + scholAP + '/month';
		scholSubmit(1);
	} else if (x == $scholB || $scholB.is(':checked')) {
		scholPrice = scholBP;
		$('#scholBRate').text('$' + scholPrice);
		$('#scholARate').text('$0');
		scholDesc = 'One Scholarship Membership at $' + scholBP + '/month';
		scholSubmit(1);
	} else {
		scholPrice = 0;
		$('#scholARate').text('$0');
		$('#scholBRate').text('$0');
		scholDesc = 'No scholarship selected. Please return to the collectiveagency.co/scholarship and try again.';
		scholSubmit(0);
	}
	scholInit = scholPrice * 2;
	$('#scholMonthlyTotal, #scholLastPayment').text('$' + scholPrice);
	$('#scholInitPayment').text('$' + scholInit);
// update PayPal HTML variables
	document.scholSubscribewithpaypal.item_name.value = scholDesc;
	document.scholSubscribewithpaypal.a1.value = scholInit;
	document.scholSubscribewithpaypal.a3.value = scholPrice;
}
$('#scholA, #scholB, #scholUpdate').click(function() {
	scholarshipCalc(this);
});
$('#scholSubmit').click(function() {
	scholarshipCalc(this);
	document.scholSubscribewithpaypal.submit();
});
$('#scholSubscribewithpaypal').submit(function() {
	scholarshipCalc(this);
	document.scholSubscribewithpaypal.submit();
});

//******************** Meeting Rental Form ********************//
var conRoomH = 35,
	conRoomW = 1100,
	conRoomHQ,
	conRoomWQ,
	conRoomHT,
	conRoomWT,
	conRoomT;
function meetingTotal() {
	conRoomHQ = document.paidMeetingPayPal.conRoom.value;
	conRoomWQ = document.paidMeetingPayPal.conRoomWK.value;
	if (conRoomHQ < 1 && conRoomHQ != 0) {
		conRoomHQ = 1;
	}
	if (isNaN(conRoomHQ)) {
		conRoomHQ = 0;
	} else {
		conRoomHQ = Math.round(conRoomHQ * 4) / 4;
	}
	if (conRoomHQ < 0) {
		conRoomHQ = conRoomHQ * -1;
	}
	document.paidMeetingPayPal.conRoom.value = conRoomHQ;
	
	if (conRoomWQ < 1 && conRoomWQ != 0) {
		conRoomWQ = 1;
	}
	if (isNaN(conRoomWQ)) {
		conRoomWQ = 0;
	} else {
		conRoomWQ = Math.round(conRoomWQ);
	}
	if (conRoomWQ < 0) {
		conRoomWQ = conRoomWQ * -1;
	}
	document.paidMeetingPayPal.conRoomWK.value = conRoomWQ;
	conRoomWT = conRoomW * conRoomWQ;
	conRoomHT = conRoomH * conRoomHQ;
	conRoomT = conRoomWT + conRoomHT;
	$('#conRoomH').text("$" + conRoomHT);
	$('#conRoomW').text("$" + conRoomWT);
	$('#total').text("$" + conRoomT);
	if (conRoomT > 0) {
		$('.ivSubmit').fadeOut('fast', function() {
			$('.vSubmit').fadeIn('fast');
		});
	} else {
		$('.vSubmit').fadeOut('fast', function() {
			$('.ivSubmit').fadeIn('fast');
		});
	}
	// Set PayPal HTML Variables
	if (conRoomHQ > 0 && conRoomWQ <= 0) {
		if (conRoomHQ === 1) {
			desc = conRoomHQ + " hour in a conference room.";
		} else {
			desc = conRoomHQ + " hours in a conference room.";
		}
	} else if (conRoomHQ <= 0 && conRoomWQ > 0) {
		if (conRoomWQ === 1) {
			desc = conRoomWQ + " week in a conference room.";
		} else {
			desc = conRoomWQ + " weeks in a conference room.";
		}
	} else if (conRoomHQ > 0 && conRoomWQ > 0) {
		if (conRoomHQ === 1 && conRoomWQ === 1) {
			desc = conRoomWQ + " week in a conference room and " + conRoomHQ + " hour in a conference room.";
		} else if (conRoomHQ === 1) {
			desc = conRoomWQ + " weeks in a conference room and " + conRoomHQ + " hour in a conference room.";
		} else if (conRoomWQ === 1) {
			desc = conRoomHQ + " hours in a conference room and " + conRoomWQ + " week in a conference room.";
		} else {
			desc = conRoomHQ + " hours in a conference room and " + conRoomWQ + " weeks in a conference room.";
		}
	}
	document.paidMeetingPayPal.amount.value = conRoomT;
	document.paidMeetingPayPal.item_name.value = desc;
}
$('body.page-template-meetings-php input').blur(function() {
	meetingTotal();
});
$('body.page-template-meetings-php .update').click(function() {
	meetingTotal();
});
$('body.page-template-meetings-php .vSubmit').click(function() {
	meetingTotal();
	document.paidMeetingPayPal.submit();
});
//******************** EVENT Rental Form ********************//
var conRoomR = 35,
	up125R = 125,
	up45R = 75,
	conRoomQ,
	up125Q,
	up45Q,
	up125T,
	up45T,
	eventT,
	up45D,
	up125D,
	conRoomD,
	eventD;
function eventUpdate() {
	up45Q = Math.round(document.eventPayPal.upTo45.value);
	up125Q = Math.round(document.eventPayPal.upTo125.value);
	conRoomQ = Math.round(document.eventPayPal.conRoom.value);
	document.eventPayPal.upTo45.value = up45Q;
	document.eventPayPal.upTo125.value = up125Q;
	document.eventPayPal.conRoom.value = conRoomQ;
	up45T = up45Q * up45R;
	up125T = up125Q * up125R;
	conRoomT = conRoomQ * conRoomR;
	eventT = up45T + up125T + conRoomT;
	$('#upTo45Total').text('$ ' + up45T);
	$('#upTo125Total').text('$ ' + up125T);
	$('#conRoomTotal').text('$ ' + conRoomT);
	$('#totalTotal').text('$ ' + eventT);
	if (eventT > 0) {
		$('.ivSubmit').fadeOut("fast", function() {
			$('.vSubmit').fadeIn();
		});
	}
	// construct description
	if (up45Q === 1) {
		up45D = up45Q + " hour with up to 45 people";
	} else if (up45Q === 0) {
		up45D = 0;
	} else {
		up45D = up45Q + " hours with up to 45 people";
	}
	if (up125Q === 1) {
		up125D = up125Q + " hour with up to 125 people";
	} else if (up125Q === 0) {
		up125D = 0;
	} else {
		up125D = up125Q + " hours with up to 125 people";
	}
	if (conRoomQ === 1) {
		conRoomD = conRoomQ + " hour in a conference room";
	} else if (conRoomQ === 0) {
		conRoomD = 0;
	} else {
		conRoomD = conRoomQ + " hours in a conference room";
	}
	// put description together
	if (up45D !== 0) {
		eventD = up45D;
	}
	if (up125D !== 0) {
		eventD += ", and " + up125D;
	}
	if (conRoomD !== 0) {
		eventD += ", and " + conRoomD;
	}
	eventD += ".";
	// Update PayPal Variables
	document.eventPayPal.item_name.value = eventD;
	document.eventPayPal.amount.value = eventT;
}
$('body.events-gridview input').blur(function() {
	eventUpdate();
});
$('body.events-gridview .update').click(function() {
	eventUpdate();
});
$('body.events-gridview .vSubmit').click(function() {
	eventUpdate();
	document.eventPayPal.submit();
});
//******************** AGENDAS & NOTES accordions ********************//
$('.accordion li').each(function(i, e) {
	if (!$(e).hasClass('current')) {
		$(e).find('ul').slideUp();
	}
});
$('.accordion li').click(function() {
	$(this).find('ul').slideDown();
	$(this).siblings().find('ul').slideUp();
});
//******************** BLOG ROTATOR WIDGET ********************//
var $items = $('.blogRotatorItem');
var itemsLength = $items.length;
var itemW = $('.blogRotatorItem').width();
if (itemsLength > 1) {
	var i = 1;
	setInterval(function() {
		if (i >= itemsLength) {
			i = 0;
		}
		$('.blogRotatorWrap').animate({
			marginLeft: itemW * i * -1
		});
		i++;
	},6000);
}
// Backstretch
$.backstretch([
	"http://collectiveagen.wpengine.com/wp-content/themes/caTesting/images/IMG_5482.jpg",
	"http://collectiveagen.wpengine.com/wp-content/themes/caTesting/images/_CHP1582.jpg",
	"http://collectiveagen.wpengine.com/wp-content/themes/caTesting/images/6078463081_4426763548_b.jpg",
	"http://collectiveagen.wpengine.com/wp-content/themes/caTesting/images/6079289732_b76e81655f_b.jpg",
	"http://collectiveagen.wpengine.com/wp-content/themes/caTesting/images/collectiveagency 2.jpg",
	"http://collectiveagen.wpengine.com/wp-content/themes/caTesting/images/IMGP6651.jpg",
	"http://collectiveagen.wpengine.com/wp-content/themes/caTesting/images/IMGP6652.jpg",
	"http://collectiveagen.wpengine.com/wp-content/themes/caTesting/images/IMGP6686.jpg"
  ], {duration: 12000, fade: 1000});
});