(function() {
  module.exports = function(repo, cb) {
    var readline, rl;
    readline = require('readline');
    rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.setPrompt('concrete > ');
    rl.prompt();
    return cb();
  };

}).call(this);
