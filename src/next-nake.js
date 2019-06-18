(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  var NxNake = nx.declare('nx.Nake', {
    statics: {
      run: function() {},
      task: function() {},
      parallel: function() {},
      series: function() {}
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxNake;
  }
})();
