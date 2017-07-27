function pagination() {

  var offset = $(document).scrollTop(),
      windowHeight = $(window).height(),
      body = $('body');

  switch (true) {

    case (offset > (windowHeight * 3.75)):
      body.removeClass().addClass('page-5');
      break;
    case (offset > (windowHeight * 2.75)):
      body.removeClass().addClass('page-4');
      break;
    case (offset > (windowHeight * 1.75)):
      body.removeClass().addClass('page-3');
      break;
    case (offset > (windowHeight * .75)):
      body.removeClass().addClass('page-2');
      break;
    case (offset < windowHeight):
      body.removeClass().addClass('page-1');
      break;
    default:
      body.removeClass().addClass('page-1');
   }
}

pagination();

$(document).scroll(function() {
  pagination();
});



