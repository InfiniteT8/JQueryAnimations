  //Incomplete, but I grasp the concept.!
  $(".ani1").on("click", function(){
    $(this).hide();
  });

$( '.Box1' ).click(function() {
  $( '.Box1' ).toggle( "blind" );
});

$( '.Box2' ).click(function() {
  $('.Box2').toggle( "fold", { times: 3 }, "slow" );
});
			    

$(".Box3").on("click", function() {
 $('.Box3').toggle("fade");
}); 

$("Box4").keyup( function(){
  $("input").css("background-color","purpleyellow");
});

$(".Box4").slideDown(1000, function(){
  $(this).slideUp('slow');
  $("input").css("background-color","purple");
  $(".Box14").animate({
  'opacity':0.4, 
  'width':'300px', 
  'height':'310px', 
  'margin-left':'500px'},
  9000);
});  

$(".Box5").hover( function(){
  	$(this).css("color", "brown");
  }, function() {
  	$(this).css("color", "orange");
});

$(".Box6").on("click", function(){
  $(this).css("transform", "rotate(390deg)");
});


$(".Box7").on("click", function(){
  $(this).css("transform", "rotate(60deg)");
});


$( ".Box8" ).one( "click", function() {
  alert( "Are you about the code life? Click here." );
});


$(".hash").on("click", function(){
  $(this).addClass("gradient");
});


	$(".Box8").on("click", function(){
	  $(this).addClass("animation2");
	});

$( ".Box9" ).one( "click", function() {
	alert( "Are you about the code life? Click here." );
});

$( ".Box10" ).one( "click", function() {
	alert( "Are you about the code life? Click here." );
});

// $(".Box11").hover( function(){
// 	$(this).css("color", "brown");
// 	}, 
// 	function() {
// 	  $(this).css("color", "orange");
// });

// $( ".Box12" ).one( "click", function() {
// 	alert( "Are you about the code life? Click here." );
// });

// $(".box5").hover( function(){
// 	$(this).css("color", "grey");
// }, 
// 	function() {
// 	  $(this).css("color", "purple");
// 	});

$( ".Box14" ).one( "click", function() {
	alert( "Redundancy is Key." );
});

// $( ".Box15" ).one( "click", function() {
// 	alert( "Are you about the code life? Click here." );
// });

// $('.Box16').click(function () {
// 	$(this).animate({"backgroundColor":"rgb(205, 56, 211)"}, 1000);
// });

$('.Box16').click(function() {
  $('.Box16').toggle( "pulsate" );
});


$('.Box17').click(function() {
  $('.Box17').toggle( "fold" );
});

$( '.Box18' ).click(function() {
  $(this).toggle( "highlight" );
});

$('.Box19').click(function(){
  var div=$('.Box19');
  div.animate({height:'300px',opacity:'0.4'},"slow");
  div.animate({width:'300px',opacity:'0.8' ,background:'green'},"slow");
  div.animate({height:'100px',opacity:'0.4'},"slow");
  div.animate({width:'100px',opacity:'0.8'},"slow");
});

$('.Box20').hover(function() {
    $(this).animate({"color":"#efbe5c","font-size":"42pt"}, 1000);
}, function() {
    $(this).animate({"color":"#e8a010","font-size":"30pt"}, 1000);
});