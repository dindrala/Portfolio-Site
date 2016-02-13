
(function(module) {
  // var ProjectView= {};
  //
  // ProjectView.handleMainNav = function() {
  //   $("nav a").on("click", function(e){
  //   var dataContent = $(e.target).attr("data-content");
  //   $("section").hide();
  //   $("#" + dataContent).show();
  //
  //   });
  // };









  // $(document).ready(function() {
  //   ProjectView.handleMainMenu(); //runs the function when the browser load
  // });


  ProjectView.initIndexPage = function() {
    Project.all.forEach(function(a){
      var myHtml = a.toHtml();
      $('#articles').append(a.toHtml());
    });
    ProjectView.handleMainNav();

  };
  module.ProjectView = ProjectView;
}) (window);
