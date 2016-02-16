(function(module) {
  var projectController = {};

  projectController.index = function() {
    Project.fetchAll(projectView.initIndexPage);

    // $('main > section').hide();
    // $('#aritcles').show();


  };

  module.projectController = projectController;
}) (window);
