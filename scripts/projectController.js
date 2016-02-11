(function(module) {
  var projectController = {};

  projectController.index = function() {
    Project.fetchAll(ProjectView.initIndexPage);

    $('main > section').hide();
    $('"section#articles"').show();

  };

  module.projectController = projectController;
}) (window);
