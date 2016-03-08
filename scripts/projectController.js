(function(module) {
  var projectController = {};

  projectController.index = function() {
    Project.fetchAll(projectView.initIndexPage);
    $('main > section').hide();
    $('section#articles').show();
    $('div#project-title').show();
    $(window).off('scroll');
    $('header').removeClass('expanded');
  };



  module.projectController = projectController;
}) (window);
