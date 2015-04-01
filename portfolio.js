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
$('.footer-tab').click(function(event) {
	event.preventDefault();
	var main=$(this).parent().parent();
	var footer=$(this).parent();

/*
	var curheight = parseInt(main.height());
	var maxheight = parseInt($(window).height());
	var footerheight = parseInt(footer.height());
	var newheight = (curheight == maxheight) ? maxheight - footerheight : maxheight;
	var newbottom = (curheight == maxheight) ? 0 : -footerheight;
	console.log(newheight);*/
	var bottompadding=parseInt(footer.css('bottom'));

	/*console.log(main);
	console.log(footer);*/
	var tog = !footer.hasClass('footer-expand');
	main.toggleClass('footer-expand', tog);
	footer.toggleClass('footer-expand', tog);

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

	if(footer.hasClass('footer-expand')){
		$('.footer-tab i').removeClass('fa-angle-up').addClass('fa-angle-down');
	}else{
		$('.footer-tab i').removeClass('fa-angle-down').addClass('fa-angle-up');
	}
});

/*Owl Carousel Javascript*/
$(document).ready(function(){
	var owl=$('#other-proj-carousel-cont');
	
	owl.owlCarousel({
		//Change Later for Dynamic

		navigation:true,
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],

	});
});

var wWidth, wHeight, usedHeight;
var footerHeight;

var calculate=function(){
	wWidth=$(window).width();
	wHeight=$(window).height();
	if(wWidth<1140){
		usedHeight=$('.project-details').height()+$('.image').height()+(parseInt($('h1').css('marginTop'))+parseInt($('button').css('marginBottom')));
	}else if(wWidth>=1140){
		/*usedHeight=$('#nav-item-cont').height()+$('.project-cont').height();*/
		usedHeight=$('.image').height();
		//usedHeight=$('.project-cont').height();
	}
	footerHeight=wHeight-usedHeight;
}

var displayContent=function(){
	wWidth=$(window).width();
	wHeight=$(window).height();
	//console.log("Window Height: "+wHeight+", Used Height: "+usedHeight+", Footer Height: "+footerHeight+"; Window Width: "+wWidth);
	if(wWidth>=1920){
		footerHeight=200;
	}
	if(footerHeight<200){
		footerHeight=200;
	}else{
		footerHeight=footerHeight;
	}
	$('footer').css({'height': footerHeight+'px','width':'100%'});
	$('.owl-buttons,#other-proj-carousel-nav-cont,#other-proj-carousel-cont,.owl-wrapper-outer,.owl-wrapper,.owl-item,.owl-item div').css('height', footerHeight+'px');
	
	if(wWidth<=1140){
		$('.owl-item div img, .owl-item').css('width',wWidth/4);
	}else{
		$('.owl-item div img, .owl-item').css('width',wWidth/7);
	}
}

$(window).resize(function(){
	calculate();
	displayContent();
	setTimeout(function(){		//allow some animations to finish processing
		calculate();
		displayContent();
	},4000);
});
$(document).ready(function(){
	if(isMobile){
		$('html, body').css('overflow-y','auto');
	}else{
		$('html, body').css('overflow','hidden');
	}
	calculate();
	displayContent();
	setTimeout(function(){
		calculate();
		displayContent();
	},1);
});