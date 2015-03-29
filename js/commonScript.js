var isMobile=(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
var anim_ease='easeInOutCubic';
/*Toggle navigation for all window sizes*/
var wWidth=$(window).width();
var wHeight=$(window).height();
var navCont=$('#nav-item-cont');
var navigationClick=function(){
	if(wWidth<1141){
		var newTop=(parseInt(navCont.css('top'))==0) ? -navCont.height() : 0;
		navCont.animate({
			top:newTop+'px'
		},400,anim_ease)
	}else if((wWidth>=1141)&&(wWidth<1920)){
	}else{
		var newLeft=(parseInt(navCont.css('left'))==0) ? -navCont.width() : 0;
		navCont.animate({
			left:newLeft+'px'
		},400,anim_ease);
	}
	navCont.toggleClass('navShow');
	reaffirmStyle();
}

$('.nav-toggle').click(function(event) {
	event.preventDefault();
	navigationClick();
});
$('.nav-item').click(function(event){
	if(wWidth<1141){
		navigationClick();
	}
});


var reaffirmStyle=function(){
	wWidth=$(window).width();
	wHeight=$(window).height();
	if(navCont.hasClass('navShow')&&wWidth<1141){
		$('#nav-toggle-main').animate({opacity:0},400,anim_ease,setTimeout(function(){
			$(this).hide();
		}));
	}else{
		$('#nav-toggle-main').show().animate({opacity:1},400,anim_ease);
	}

	if(wWidth<1141){
		if(navCont.hasClass('navShow')){
			navCont.css({
				top:0,
				left:0
			});
		}else{
			navCont.css({
				top:-navCont.height(),
				left:0
			});
		}
	}else if((wWidth>=1141)&&(wWidth<1920)){
		navCont.css({
			top:0,
			left:0
		})
	}else{
		if(navCont.hasClass('navShow')){
			navCont.css({
				top:'81px',
				left:0
			});
		}else{
			navCont.css({
				top:'81px',
				left:-navCont.width()
			});
		}
	}

	if(wHeight<729||wWidth<=1141){
		$('#nav-toggle-main').css({
			height:36+'px',
			width:36+'px'
		});
		$('#nav-toggle-main i').removeClass('fa-4x').addClass('fa-3x');
	}else{
		$('#nav-toggle-main').css({
			height:81+'px',
			width:81+'px'
		});
		$('#nav-toggle-main i').removeClass('fa-3x').addClass('fa-4x');
	}

	if(isMobile&&wWidth<1141) {
		$('.m-nav').show();
	}else{
		$('.m-nav').hide();
	}

	if(isMobile&&(wHeight>wWidth)){
		$('#nav-toggle-main').hide();
		$('.m-nav').hide();
		$('#mobile-correct').show();
		$.fn.fullpage.moveTo(1);
		$.fn.fullpage.setAllowScrolling(false);
	}else{
		$('#mobile-correct').hide();
		$.fn.fullpage.setAllowScrolling(true);
	}

	if(($('#nav-item-cont').hasClass('navShow'))&&(wWidth<1141)){
		$('#b-background').fadeIn(400);
	}else{
		$('#b-background').fadeOut(400);
	}
}

$(window).resize(function(){
	reaffirmStyle();
});

$(document).ready(function(){
	/*Full Page*/
	$('#fullpage').fullpage({
		anchors:['home','portfolio', 'prototype', 'contact'],
		fixedElements:'#nav-toggle-main, #nav-item-cont, #mobile-nav',
		touchSensitivity:1,
		controlArrows:false //change
	});

	/*Text Area Expander*/
	$('.animated-textarea').autosize();

	/*Main Script*/
	reaffirmStyle();
});

$('.nav-item').click(function(event){
	$('.nav-item').removeClass('selected-nav');
	var sel_navItem=$(this).attr('id');
	$(this).addClass('selected-nav');
});

$('.m-nav').click(function(event){
	var clicked=$(this).attr('id');
	if(clicked=='m-nav-up'){
		$.fn.fullpage.moveSectionUp();
	}else{
		$.fn.fullpage.moveSectionDown();
	}
});
