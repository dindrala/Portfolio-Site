
$(function () {

  //TODO: clicking projects-link hides all sections, shows articles section.

  var projects = [];

  function Project (title, description, date) {
    this.title = title;
    this.description = description;
    this.date = date;
  };



  Project.prototype.toHtml = function () {
    var appTemplate = $('#hello-hi-hey').html();
    var compiledTemplate = Handlebars.compile(appTemplate);
    var html = compiledTemplate(this);

    /*Populating the project li element that has class of .projectClass with most current project info: title, description, date */

    // $newProject.find('.title').text(this.title);
    // $newProject.find('.projectClass').text(this.description);
    // $newProject.find('.projectClass').text(this.date);
    //
    // $newProject.removeClass('template');

    // this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    // this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
    //
    return html;
  };

  //portfolio.sort  here function from example.

  projectData.forEach(function(ele) {
    projects.push(new Project(ele));
  });

  projects.forEach(function(a) {
    var article = a.toHtml();
    $('#articles').append(article);
  });

});
