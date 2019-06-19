(function() {
  var nx = require('next-js-core2');
  var NxNake = require('../src/next-nake');
  var fs = require('fs-extra');
  var copy = require('copy');
  // var uglifyjs = require('uglify-js');

  // https://github.com/jprichardson/node-fs-extra/issues/687
  // test('init', function() {
  //   // console.log(rs1, rs2);
  //   expect(true).toBe(true);
  // });

  NxNake.task('clean', () => {
    return fs.remove('dist');
  });

  NxNake.task('copy', () => {
    return new Promise((resolve) => {
      copy('./src/*', 'dist', function(err, files) {
        resolve();
      });
    });
  });

})();
