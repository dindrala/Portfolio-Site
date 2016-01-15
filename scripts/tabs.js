var projectView= {};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function(e) {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  $('.main-nav .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
};



//
// $(document).ready(function() {
//   articleView.populateFilters();
//   articleView.handleCategoryFilter();
//   articleView.handleAuthorFilter();
//   articleView.handleMainNav();
//   articleView.setTeasers();
// });
