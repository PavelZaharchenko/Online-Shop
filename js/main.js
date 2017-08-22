(function($) {
$(function() {

	let tabBtn = '.tab-nav__item-btn';

	$(tabBtn).on('click', function(){
		$(tbBtn).find( ".tab-nav__item" ).removeClass('active');
	    $(this).addClass('active');

	// let tabBtn = '.tab-nav__item';

	// $(tabBtn).on('click', function(){
	// 	$(tbBtn).removeClass('active');
	//     $(this).addClass('active');


	    console.log('hello');
	});

	// $(document).ready(function() {
 //    	$("#myModalBox").modal('show');
 //  	});

});
})(jQuery);