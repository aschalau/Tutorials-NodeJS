var fs = require('fs'),
    path = require('path');

module.exports = function (base, ext, callback) {
  fs.readdir(base, function(err, list) {
    if(err) { return callback(err); }

    list = list.filter(function (filename) {
    return path.extname(filename) === '.' + ext;
  });

  callback(null, list);
})};
