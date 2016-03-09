
(function(module) {
  var projectView= {};

  projectView.handleMainNav = function() {
    $('nav a').on('click', function(e) {
      var dataContent = $(e.target).attr('data-content');
      $('section').hide();
      $('#' + dataContent).show();
    });
  };



  projectView.initIndexPage = function() {
    $('#articles').empty();
    Project.all.forEach(function(a){
      var myHtml = a.toHtml();
      $('#articles').append(a.toHtml());
    });
    repos.repoRequest(repoView.index);
    projectView.handleMainNav();
  };


  module.projectView = projectView;
}) (window);
