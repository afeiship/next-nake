(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  var NxNake = nx.declare('nx.Nake', {
    statics: {
      __tasks__: {},
      run: function() {},
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
