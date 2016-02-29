(function(module) {
  var aboutController = {};

  aboutController.index = function() {

    repos.repoRequest(repoView.index);
    $('main > section').hide();
    $('#main').show();
  };

  module.aboutController = aboutController;
}) (window);
