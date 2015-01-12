/*Toggle Navigation for Reduced Window/Mobile Size*/
$('.toggle-nav').click(function(event) {
	event.preventDefault();
	if($('body').hasClass('modal')){
		$('#nav').animate({
			top:'-100%'
		},400,'easeInOutCubic',setTimeout(function(){
			$('header').css('margin-top',-30+'px');
			$('body').removeClass('modal');
			$('#nav').css('opacity',0);
		},401));
	}else{
		$('body').addClass('modal');
		$('header').css('margin-top',0+'px');
		$('#nav').animate({
			top:0,
			opacity:1.00
		},400,'easeInOutCubic');
	}

});

/*Cycle through Images in Current Project*/
$('.image-tab').click(function(event) {
	event.preventDefault();
	var index = $(this).index();
	var slider = $(this).parent().parent().find('.image-slider');
	console.log(slider);
	slider.animate({
		left: (-100 * index) + '%'
	}, 400, 'easeInOutCubic');
});

/*Toggle Navigation and Other Projects for Full Window/Preferred Desktop Size*/
$('.header-tab').click(function(event) {
	event.preventDefault();
	var header = $('#header');
	var newleft = (parseInt(header.css('left')) == 0) ? -header.width() : 0;
	header.animate({
		left: newleft + 'px'
	}, 400, 'easeInOutCubic');
});

$('.footer-tab').click(function(event) {
	event.preventDefault();
	var main = $(this).parent().parent();
	var footer = $(this).parent();

/*
	var curheight = parseInt(main.height());
	var maxheight = parseInt($(window).height());
	var footerheight = parseInt(footer.height());
	var newheight = (curheight == maxheight) ? maxheight - footerheight : maxheight;
	var newbottom = (curheight == maxheight) ? 0 : -footerheight;
	console.log(newheight);*/
	var bottompadding = parseInt(main.css('bottom'));

	main.toggleClass('footer-expand', bottompadding == 0);
	footer.toggleClass('footer-expand', bottompadding == 0);

	/* old
	main.animate({
		height: newheight + 'px'
	}, 400, 'easeInOutCubic');

	footer.animate({
		bottom: newbottom + 'px'
	}, 400, 'easeInOutCubic');

	return;
	var footer = $(this).parent();
	var newbottom = (parseInt(footer.css('bottom')) == 0) ? -footer.height() : 0;
	footer.animate({
		bottom: newbottom + 'px'
	}, 400, 'easeInOutCubic');*/
});

/*Owl Carousel Javascript*/
$(document).ready(function(){
	var owl=$('#other-proj-carousel-cont');
	
	owl.owlCarousel({
		//Change Later for Dynamic

		navigation:true,
		navigationText:["<i class='icon-chevron-left icon-white'><</i>","<i class='icon-chevron-right icon-white'>></i>"],

	});
});