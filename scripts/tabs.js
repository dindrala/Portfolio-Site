var projectView= {};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function(e) { //on-click within the main-nav class that targets the tab class
    $('.tab-content').hide(); //hides all selectors with tab-content class
    $('#' + $(this).data('content')).fadeIn(); //fades in data-content of the # attri that was clicked
  });

  $('.main-nav .tab:first').click(); //triggers click on the first .tab element, to set up the page.
};



$(document).ready(function() {
  projectView.handleMainMenu(); //runs the function when the browser load
});
