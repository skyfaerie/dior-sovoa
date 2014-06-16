/**************************************/
/* RESPONSIVE NAV
/**************************************/

$("#menu").click(function(){
  $("nav").toggle();

  /* attempt to show navbar if toggled off and resized */
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $("nav").show();
    }
  });
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

