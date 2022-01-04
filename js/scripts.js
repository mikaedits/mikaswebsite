// hamburger menu collapse
$(function(){ 
	var navMenu = $("#navbar-collapse");
	var subNav = $(".nav-stacked");
	navMenu.on("click", "a", null, function() {
		navMenu.collapse('hide');
		subNav.collapse('hide');
	});
});

// gallery nav affix
if ($(window).width() >= 992) {
	$('.g-menu').affix({
        offset: {
            top: 100
        }
    }).on('affix.bs.affix',function(){
		setAffixContainerSize();
	});
	
	function setAffixContainerSize(){
		$('.g-menu').width($('.g-menu').parent().innerWidth()-30);
	}
	
	$(window).resize(function(){
		setAffixContainerSize();
	});
}