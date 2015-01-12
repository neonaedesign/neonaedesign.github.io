var updateClass=function(){
	if($(window).width()<1140){
		$('.contact-fa').removeClass('fa-4x').removeClass('fa-3x').addClass('fa-2x');
	}else if(($(window).width()>=1141)&&($(window).width()<1920)){
		$('.contact-fa').addClass('fa-3x').removeClass('fa-2x');
	}else{
		$('.contact-fa').addClass('fa-4x').removeClass('fa-3x').removeClass('fa-2x');
	}

	if(wHeight<441){
		$('.c-footer-link a i').addClass('fa-lg').removeClass('fa-2x').removeClass('fa-4x');
	}else if((wHeight>=441&&wHeight<729) || wWidth<576){
		$('.c-footer-link a i').removeClass('fa-lg').addClass('fa-2x').removeClass('fa-4x');
	}else{
		$('.c-footer-link a i').removeClass('fa-lg').removeClass('fa-2x').addClass('fa-4x').css('margin-top'.'-36px');
	}
}


function update(ele){
	console.log(ele.style.height);
}

$(document).ready(function(){
	updateClass();
});

$(window).resize(function(){
	updateClass();
});

