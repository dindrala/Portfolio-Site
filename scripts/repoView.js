(function(module){
  var repoView = {};

  var content = function(repo){
    return '<li><a href="'+repo.html_url+'">'+repo.name+'</a></li>';
  };

  repoView.index = function(){
    $('#repo').empty();
    $('#repo').append(repos.all.map(content));

    // repos.all.map(content);

  };
  module.repoView = repoView;
})(window);
