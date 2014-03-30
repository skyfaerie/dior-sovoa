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
  itemSelector: '.item'
});