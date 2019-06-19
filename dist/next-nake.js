(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  var NxNake = nx.declare('nx.Nake', {
    statics: {
      __tasks__: {},
      run: function(inName) {
        var start = Date.now();
        var task = this.__tasks__[inName];

        return task().then(
          function(_) {
            var end = Date.now();
            var duration = end - start;
            console.log(
              '\x1b[36m%s\x1b[0m',
              '[build]',
              inName + ' done in ' + duration + 'ms'
            );
          },
          function(err) {
            console.error(
              '\x1b[31m%s\x1b[0m',
              '[build]',
              'error running ' + inName + ':',
              err.stack
            );
          }
        );
      },
      task: function(inPath, inTask) {
        nx.set(this.__tasks__, inPath, inTask);
      },
      parallel: function(inTasks) {
        var tasks = inTasks.map(function(item) {
          return this.__tasks__[item];
        }, this);
        return Promise.all(tasks);
      },
      series: function(inTasks) {}
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxNake;
  }
})();
