
(function (module) {

  function Project (opts) {
    this.title = opts.title;
    this.projectUrl = opts.projectUrl;
    this.description = opts.description;
    this.date = opts.date;
  }


  Project.all = [];

  Project.prototype.toHtml = function () {
    var template = Handlebars.compile($('#hello-hi-hey').text());
    return template(this);
  };


  Project.loadAll = function(projectData) {

    projectData.sort(function(a,b) {
      return(new Date(b.publishedOn)) - (new Date(a.publishedOn));
    });

    Project.all = projectData.map(function(ele) {
      return new Project(ele);
    });
  };


  Project.fetchAll = function() {
    if (localStorage.projectData) {
      Project.loadAll(JSON.parse(localStorage.projectData));
      projectView.initIndexPage();
    } else {
      $.get('data/projectData.json', function(data) {
        Project.loadAll(data);
        var dataString = JSON.stringify(data);
        localStorage.setItem('projectData', dataString);
        projectView.initIndexPage();
      });
    }
  };

  module.Project = Project;
}) (window);
