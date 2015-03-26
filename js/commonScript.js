var anim_ease='easeInOutCubic'
/*Toggle navigation for all window sizes*/
var wWidth=$(window).width();
var wHeight=$(window).height();
var navCont=$('#nav-item-cont');
$('.nav-toggle').click(function(event) {
	if($(this).text()=='x'||$(this).text()=='a'){
		event.preventDefault();
	}
	// alert($(this).text());
	if(wWidth<1141){
		var newTop=(parseInt(navCont.css('top'))==0) ? -navCont.height() : 0;
		navCont.animate({
			top:newTop+'px'
		},400,anim_ease)
	}else if((wWidth>=1141)&&(wWidth<1920)){

	}else{
		var newLeft=(parseInt(navCont.css('left'))==0) ? -navCont.width() : 0;
		/*console.log("Left: "+newLeft+", Has Class: "+navCont.has('navShow'));*/
		navCont.animate({
			left:newLeft+'px'
		},400,anim_ease);
	}
	if(wWidth<1141){
		navCont.toggleClass('navShow');
		console.log('afd');
	}else{}
	reaffirmStyle();
	console.log('fired');
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
}
$(window).resize(function(){
	reaffirmStyle();
});

$(document).ready(function(){
	/*Full Page*/
	$('#fullpage').fullpage({
		anchors:['home','portfolio', 'contact'],
		fixedElements:'#nav-toggle-main, #nav-item-cont, #mobile-nav',
		touchSensitivity:1000
	});

	/*Text Area Expander*/
	$('.animated-textarea').autosize();

	/*Main Script*/
	reaffirmStyle();

	/*Buttons for Mobile Users (Provided by jstricks on 05 Nov 2014) Retrieved: 19 Mar 2015*/
	var isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}};
	if(isMobile.any()) {
		$('#mobile-nav').show();
	}else{
		$('#mobile-nav').hide();
	}
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
