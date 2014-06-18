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
/* ISOTOPE JS
/**************************************/

// init Isotope
var $container = $('#container').isotope({
  // options
  itemSelector: '.item',
  getSortData: {
    name: '.name',
    category: '[data-category]'
  },
  // layout mode options
  masonry: {
    columnWidth: 200,
    gutter: 10,
    "isFitWidth": true
  }
});

// filter items on button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $container.isotope({ filter: filterValue });
});
/**************************************/
/* MASONRY JS
/**************************************/

var $container = $('#gallery').masonry();
// layout Masonry again after all images have loaded
$container.imagesLoaded( function() {
  $container.masonry();
});

// var $gallery = $('#gallery');
// $gallery.masonry({
//   // columnWidth: 100,
//   // gutter: 20,
//   // "isFitWidth": true,
//   itemSelector: '.picture'
// });

