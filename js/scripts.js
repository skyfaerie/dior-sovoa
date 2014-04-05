/**************************************/
/* RESPONSIVE NAV
/**************************************/

$("#menu").click(function(){
  $("nav").toggle();
});

/**************************************/
/* MASONRY JS
/**************************************/

var $container = $('#container');
// initialize
$container.masonry({
  columnWidth: 200,
  gutter: 10,
  "isFitWidth": true,
  itemSelector: '.item'
});

var $gallery = $('#gallery');
$gallery.masonry({
  columnWidth: 100,
  gutter: 20,
  "isFitWidth": true,
  itemSelector: '.picture'
});


$('.pub').click(function(){
	$('.publication').show();
	$('.celebrity').hide();
	$('.tv').hide();
});

$('.celeb').click(function(){
	$('.celebrity').show();
	$('.publication').hide();
	$('.tv').hide();
});


$('.tele').click(function(){
	$('.tv').show();
	$('.publication').hide();
	$('.celebrity').hide();
});

$('.all').click(function(){
	$('.publication').show();
	$('.celebrity').show();
	$('.tv').show();
});