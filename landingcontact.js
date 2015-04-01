var anim_ease='easeInOutCubic';
var anim_time=441;
var respWidth_one=1141;
var landingTab='#l-promo-tab';

$(landingTab).click(function(){
	if($(landingTab).hasClass('l-shrink')){
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
	}else{
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
	}
	$(landingTab).toggleClass('l-shrink');
});

var affirmLandingStyle=function(){
	if($(landingTab).hasClass('l-shrink')){
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

var updateContactStyle=function(){
	if($(window).width()<1140){
		$('.contact-fa').removeClass('fa-4x').removeClass('fa-3x').addClass('fa-2x');
		$('c-form-button-send').html("<i class='fa fa-paper-plane-o'></i>");
		$('.contact-fa').addClass('fa-3x').removeClass('fa-2x');
	}else{
		$('.contact-fa').addClass('fa-4x').removeClass('fa-3x').removeClass('fa-2x');
	}

	if(wHeight<441){
		$('.c-footer-link a i').addClass('fa-lg').removeClass('fa-2x').removeClass('fa-4x');
	}else if((wHeight>=441&&wHeight<729) || wWidth<576){
		$('.c-footer-link a i').removeClass('fa-lg').addClass('fa-2x').removeClass('fa-4x');
	}else{
		$('.c-footer-link a i').removeClass('fa-lg').removeClass('fa-2x').addClass('fa-4x').css('margin-top','-36px');
	}
}

$(document).ready(function(){
	affirmLandingStyle();
	updateContactStyle();
});

$(window).resize(function(){
	affirmLandingStyle();
	updateContactStyle();
});

