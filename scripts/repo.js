(function(module) {
  var repos = {};

  repos.all = [];

  repos.repoRequest = function(callback) {
    $.ajax({
      url: 'github/users/dindrala/repos',
      type: 'GET',
      headers: {'Authorization': 'token ' + githubToken},
      success: function(data) {
        repos.all = data;
        callback();
      }
    });
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };
  module.repos = repos;
})(window);
