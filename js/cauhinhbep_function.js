$( document ).ready(function() {
   configDropdown();

});

function configDropdown(){
	 $('.inputChefl').click(function(){
    	$('.ul-chefl').removeClass('dropdown-menu-right');
    });
    $('.btn-custom').click(function(){
    	$('.ul-chefl').addClass('dropdown-menu-right');
    });
}
