(function(module) {
  var aboutController = {};

  aboutController.index = function() {

    $('main > section').hide();
    $('#').show();
  };

  module.aboutController = aboutController;
}) (window);
