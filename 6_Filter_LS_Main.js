var myModule = require('./6_Filter_LS_Modular.js'),
    base = process.argv[2],
    ext = process.argv[3];

myModule(base, ext, function(err, list) {
  if(err) { return consol.error('Blew up: ', err); }

  list.forEach(function (filename) {
    console.log(filename);
  })});
