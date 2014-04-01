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