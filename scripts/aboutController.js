(function(module) {
  var aboutController = {};

  aboutController.index = function() {

    repos.repoRequest(repoView.index);
    $('main > section').hide();
    $('#main').show();

    $(window).scroll(function() {
      if ($(this).scrollTop() > 1) {
        $('header').removeClass('expanded');
      } else {
        $('header').addClass('expanded');
      }
    });
    $('header').addClass('expanded');
  };


  module.aboutController = aboutController;
}) (window);
