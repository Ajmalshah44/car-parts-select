// Description: When you click CheckBox it will highlight SVG image ( Jquery JS )
// Author : Ajmalshah
    $('#front').change(function(){
    	if ($(this).is(':checked')) {
	    	$(".st11").css("fill", "red");
			$(".st11").css("opacity", "0.7");
			$(".st11").css("stroke", "#FFEB3B");
			$(".f_li").css("display", "flex");
	    	$(this).parent().parent().addClass("borderClass");
		}
		else {
	    	$(".st11").css("fill", "#fff");
			$(".st11").css("opacity", "0.5");
			$(".st11").css("stroke", "none");
			$(".f_li").css("display", "none");
	    	$(this).parent().parent().removeClass("borderClass");

		}
	});

    $('#frontRight').change(function(){
    	if ($(this).is(':checked')) {
	    	$(".st13").css("opacity", "0.7");
			$(".st13").css("fill", "red");
			$(".st13").css("stroke", "#FFEB3B");
			$(".fr_li").css("display", "flex");
	    	$(this).parent().parent().addClass("borderClass");

		}
		else {
	    	$(".st13").css("opacity", "0.7");
			$(".st13").css("fill", "#fff");
			$(".st13").css("stroke", "none");
			$(".fr_li").css("display", "none");
	    	$(this).parent().parent().removeClass("borderClass");
		}
	});
	
    $('#frontLeft').change(function(){
    	if ($(this).is(':checked')) {
	    	$(".st12").css("fill", "red");
			$(".st12").css("opacity", "0.7");
			$(".st12").css("stroke", "#FFEB3B");
			$(".fl_li").css("display", "flex");
	    	$(this).parent().parent().addClass("borderClass");

		}
		else {
	    	$(".st12").css("fill", "#fff");
			$(".st12").css("opacity", "0.7");
			$(".st12").css("stroke", "none");
			$(".fl_li").css("display", "none");
	    	$(this).parent().parent().removeClass("borderClass");
		}
	});
	
    $('#rightFront').change(function(){

    	if ($(this).is(':checked')) {
	    	$(".st18").css("fill", "red");
			$(".st18").css("opacity", "0.7");
			$(".st18").css("stroke", "#FFEB3B");
			$(".rf_li").css("display", "flex");
	    	$(this).parent().parent().addClass("borderClass");

		}
		else {
	    	$(".st18").css("fill", "#fff");
			$(".st18").css("opacity", "0.6");
			$(".st18").css("stroke", "none");
			$(".rf_li").css("display", "none");
	    	$(this).parent().parent().removeClass("borderClass");
		}
	    
	});
	
    $('#leftFront').change(function(){
	    if ($(this).is(':checked')) {
		    $(".st19").css("fill", "red");
			$(".st19").css("opacity", "0.7");
			$(".st19").css("stroke", "#FFEB3B");
			$(".lf_li").css("display", "flex");
	    	$(this).parent().parent().addClass("borderClass");

		}
		else {
		    $(".st19").css("fill", "#fff");
			$(".st19").css("opacity", "0.6");
			$(".st19").css("stroke", "none");
			$(".lf_li").css("display", "none");
	    	$(this).parent().parent().removeClass("borderClass");
		}
	});

	$('#leftBack').change(function(){
	    if ($(this).is(':checked')) {
		    $(".st21").css("fill", "red");
			$(".st21").css("opacity", "0.7");
			$(".st21").css("stroke", "#FFEB3B");
			$(".lb_li").css("display", "flex");
	    	$(this).parent().parent().addClass("borderClass");

		}
		else {
		    $(".st21").css("fill", "#fff");
			$(".st21").css("opacity", "0.6");
			$(".st21").css("stroke", "none");
			$(".lb_li").css("display", "none");
	    	$(this).parent().parent().removeClass("borderClass");
		}
	});
	
    $('#backLeft').change(function(){
	    if ($(this).is(':checked')) {
	    	$(".st17").css("fill", "red");
			$(".st17").css("opacity", "0.7");
			$(".st17").css("stroke", "#FFEB3B");
			$(".bl_li").css("display", "flex");
	    	$(this).parent().parent().addClass("borderClass");

		}
		else {
	    	$(".st17").css("fill", "#fff");
			$(".st17").css("opacity", "0.7");
			$(".st17").css("stroke", "none");
			$(".bl_li").css("display", "none");
	    	$(this).parent().parent().removeClass("borderClass");
		}
	});

    $('#backRight').change(function(){
	    if ($(this).is(':checked')) {
	    	$(".st16").css("fill", "red");
			$(".st16").css("opacity", "0.7");
			$(".st16").css("stroke", "#FFEB3B");
			$(".br_li").css("display", "flex");
	    	$(this).parent().parent().addClass("borderClass");

		}
		else {
	    	$(".st16").css("fill", "#fff");
			$(".st16").css("opacity", "0.7");
			$(".st16").css("stroke", "none");
			$(".br_li").css("display", "none");
	    	$(this).parent().parent().removeClass("borderClass");
		}
	});

    $('#back').change(function(){
	    if ($(this).is(':checked')) {
	    	$(".backSec").css("fill", "#c83035");
			$(".backSec").css("opacity", "01");
			$(".backSec").css("stroke", "#FFEB3B");
			$(".b_li").css("display", "flex");
	    	$(this).parent().parent().addClass("borderClass");

		}
		else {
	    	$(".backSec").css("fill", "#fff");
			$(".backSec").css("opacity", "0.7");
			$(".backSec").css("stroke", "none");
			$(".b_li").css("display", "none");
	    	$(this).parent().parent().removeClass("borderClass");
		}
	});
    $('#roof').change(function(){
	    if ($(this).is(':checked')) {
	    	$(".st22").css("opacity", "1");
			$(".st22").css("fill", "#c83035");
			$(".st22").css("stroke", "#FFEB3B");
			$(".tr_li").css("display", "flex");
	    	$(this).parent().parent().addClass("borderClass");

		}
		else {
	    	$(".st22").css("fill", "#fff");
			$(".st22").css("opacity", "0.1");
			$(".st22").css("stroke", "none");
			$(".tr_li").css("display", "none");
	    	$(this).parent().parent().removeClass("borderClass");
		}
	});
	$('#bottom').change(function(){
	    if ($(this).is(':checked')) {
			$(".mySVG").css("filter", " drop-shadow(0px 3px 19px rgba(245, 0, 0, 0.96))");
			$(".bt_li").css("display", "flex");
	    	$(this).parent().parent().addClass("borderClass");

		}
		else {
			$(".mySVG").css("filter", "none");
			$(".bt_li").css("display", "none");
	    	$(this).parent().parent().removeClass("borderClass");
		}
	});
    $('#rightBack').change(function(){
	    if ($(this).is(':checked')) {
			$(".st20").css("fill", "red");
			$(".st20").css("stroke", "#FFEB3B");
			$(".st20").css("opacity", "0.7");
			$(".rb_li").css("display", "flex");
	    	$(this).parent().parent().addClass("borderClass");

		}
		else {
			$(".st20").css("fill", "#fff");
			$(".st20").css("stroke", "none");
			$(".st20").css("opacity", "0.6");
			$(".rb_li").css("display", "none");
	    	$(this).parent().parent().removeClass("borderClass");
		}
	});
	
// Preview Section
	$(".btn_1").click(function () {
		$(".info_body").css("display", "none");
		$(".info_body2").css("display", "block");
		$(".btn_1").css("display", "none");
		$(".btn_2").css("display", "block");
		$(".walaa_car").css("pointer-events", "none");
	});

// Edit Section
	$(".bk_btn").click(function () {
		$(".info_body2").css("display", "none");
		$(".info_body").css("display", "block");
		$(".btn_1").css("display", "block");
		$(".btn_2").css("display", "none");
		$(".walaa_car").css("pointer-events", "visible");
	});



