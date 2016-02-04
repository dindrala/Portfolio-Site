
(function(module) {
  var ProjectView= {};

  ProjectView.handleMainNav = function() {
    $('nav a').on('click', function(e) { //on-click within the main-nav class that targets the tab class
      var tab = $(e.target);
      var tabContent = tab.attr('data-content');
      console.log(tabContent);
      var contentTab = $('section[data-content=' + tabContent + ']');
      console.log(contentTab);

      $('.tab-content').hide(); //hides all selectors with tab-content class
      // $('#' + $(this).data('content')).fadeIn(); //fades in data-content of the # attri that was clicked
      contentTab.show();

    });

    $('.main-nav .tab:first').click(); //triggers click on the first .tab element, to set up the page.
  };








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
