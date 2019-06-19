(function() {
  var nx = require('next-js-core2');
  var NxNake = require('../src/next-nake');
  var fs = require('fs-extra');

  describe('NxNake.methods', function() {
    test('init', function() {
      NxNake.task('clean', () => {
        return fs.remove('dist');
      });

      NxNake.task('copy', () => {
        return fs.copy('./src/next-nake.js', './dist/next-nake.js');
      });

      NxNake.run('copy');
      // console.log(rs1, rs2);

      // expect(rs1).toBe(true);
    });
  });
})();
