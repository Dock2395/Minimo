if ($('.batton').length) {
	$('.batton').mousemove(function(e){
		const x = e.pageX - $(this).offset().left;
		const y = e.pageY - $(this).offset().top;

		e.target.style.setProperty('--x', x + "px")
		e.target.style.setProperty('--y', y + "px")
		})
	
}

$(".btn_for_menu").on("click", function(e){
	e.preventDefault;
	$(this).toggleClass("btn_for_menu_active");
});

$(".btn_for_menu").on("click", function(e){
	e.preventDefault;
	$(this).toggleClass("btn_for_menu_fixed");
});

$(".btn_for_menu").click(function(){
	$(".top_right_nav").toggleClass("top_right_nav_active");
} )