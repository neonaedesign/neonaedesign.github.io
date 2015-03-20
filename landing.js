var anim_ease='easeInOutCubic';
var anim_time=441;
var respWidth_one=1141;
var landingTab='#l-promo-tab';

$(landingTab).click(function(){
	if($(landingTab).hasClass('l-expanded')){
		if($(window).width()<respWidth_one){
			$(landingTab).animate({
				'right':'-20%'
			},anim_time,anim_ease);
		}else{
			$(landingTab).animate({
				'right':'-30%'
			},anim_time,anim_ease);
		}
		$('#l-tab-arrow').removeClass('fa-chevron-left').addClass('fa-chevron-right');
	}else{
		if($(window).width()<respWidth_one){
			$(landingTab).animate({
				'right':'-50%'
			},anim_time,anim_ease);
		}else{
			$(landingTab).animate({
				'right':'-42%'
			},anim_time,anim_ease);
		}
		$('#l-tab-arrow').removeClass('fa-chevron-right').addClass('fa-chevron-left');
	}
	$(landingTab).toggleClass('l-expanded');
});

var affirmStyle=function(){
	if($(landingTab).hasClass('l-expanded')){
		if($(window).width()<respWidth_one){
			$(landingTab).css('right','-20%');
		}else{
			$(landingTab).css('right','-30%');
		}
		$('#l-tab-arrow').removeClass('fa-chevron-left').addClass('fa-chevron-right');
	}else{
		if($(window).width()<respWidth_one){
			$(landingTab).css('right','-50%');
		}else{
			$(landingTab).css('right','-42%');
		}
		$('#l-tab-arrow').removeClass('fa-chevron-right').addClass('fa-chevron-left');
	}
}

$(window).resize(function(){
	affirmStyle();
});

$(document).ready(function(){
	affirmStyle();
});
