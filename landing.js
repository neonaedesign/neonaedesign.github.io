
var anim_ease='easeInOutCubic';

$('#l-update-toggle').click(function(event) {
	event.preventDefault();
	if($('#l-update').hasClass('slidedOut')){
		if($(window).width()<1141){
			$('#l-update').animate({
				'top':'-48px'
			},441,anim_ease);
			$('#l-update-toggle').animate({
				'top':0
			},441,anim_ease);
			$('#l-update-toggle i').removeClass('fa-angle-up').addClass('fa-angle-down').removeClass('fa-angle-left').removeClass('fa-angle-right');
		}else{
			$('#l-update').animate({
				'right':-25+'%'
			},441,anim_ease);
			$('#l-update-toggle').animate({
				'left':95+'%'
			},441,anim_ease);
			$('#l-update-toggle i').removeClass('fa-angle-up').removeClass('fa-angle-down').addClass('fa-angle-left').removeClass('fa-angle-right');
		}
		setTimeout(function(){
			$('#l-update').removeClass('slidedOut');
		},442);
	}else{
		$('#l-update').addClass('slidedOut');
		if($(window).width()<1141){
			$('#l-update').animate({
				'top':0
			},441,anim_ease);
			$('#l-update-toggle').animate({
				'top':'48px'
			},441,anim_ease);
			$('#l-update-toggle i').addClass('fa-angle-up').removeClass('fa-angle-down').removeClass('fa-angle-left').removeClass('fa-angle-right');
		}else{
			$('#l-update').animate({
				'right':0
			},441,anim_ease);
			$('#l-update-toggle').animate({
				'left':70+'%'
			},441,anim_ease);
			$('#l-update-toggle i').removeClass('fa-angle-up').removeClass('fa-angle-down').removeClass('fa-angle-left').addClass('fa-angle-right');
		}
	}
});

var styling=function(){
	if($('#l-update').hasClass('slidedOut')){
		if($(window).width()<1141){
			$('#l-update').css({
				'top':0,
				'right':0
			});
			$('#l-update-toggle').css({
				'top':'48px',
				'left':'449px'
			});
			$('#l-update-toggle i').addClass('fa-angle-up').removeClass('fa-angle-down').removeClass('fa-angle-left').removeClass('fa-angle-right');
		}else{
			$('#l-update').css({
				'right':0,
				'left':'auto',
				'top':0
			});
			$('#l-update-toggle').css({
				'left':70+'%',
				'top':'47.5%'
			});
			$('#l-update-toggle i').removeClass('fa-angle-up').removeClass('fa-angle-down').removeClass('fa-angle-left').addClass('fa-angle-right');
		}
	}else{
		if($(window).width()<1141){
			$('#l-update').css({
				'top':'-48px',
				'left':0
			});
			$('#l-update-toggle').css({
				'top':0,
				'left':47.5+'%'
			});
			$('#l-update-toggle i').removeClass('fa-angle-up').addClass('fa-angle-down').removeClass('fa-angle-left').removeClass('fa-angle-right');
		}else{
			$('#l-update').css({
				'right':-25+'%',
				'left':'auto',
				'top':0
			});
			$('#l-update-toggle').css({
				'left':95+'%',
				'top':'47.5%'
			});
			$('#l-update-toggle i').removeClass('fa-angle-up').removeClass('fa-angle-down').addClass('fa-angle-left').removeClass('fa-angle-right');
		}
	}

	if($(window).width()>=1141){
		$('#l-update-def-txt').css('display','none');
		$('i').removeClass('fa-lg').addClass('fa-2x');
	}else{
		$('#l-update-def-txt').css('display','block');
		$('i').removeClass('fa-2x').addClass('fa-lg');
	}
}

$(window).resize(function(){
	styling();
});

$(document).ready(function(){
	styling();
});