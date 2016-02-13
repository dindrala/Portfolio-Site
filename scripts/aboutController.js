(function(module) {
  var aboutController = {};

  aboutController.index = function() {

    $('main > section').hide();
    $('#main').show();

  };

  module.aboutController = aboutController;
}) (window);
