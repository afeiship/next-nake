(function() {
  var nx = require('next-js-core2');
  var NxNake = require('../src/next-nake');
  var fsExtra = require('fs-extra');
  var fs = require('fs');

  describe('NxNake.methods', function() {
    test('init', function() {
      NxNake.task('clean', () => {
        return fsExtra.remove('dist');
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
