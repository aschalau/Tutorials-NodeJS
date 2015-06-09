//console.log(process.argv);
var arg = process.argv.slice(2);
//console.log('args: ', arg)
var total = 0;
for(var i = 0; i < arg.length; i++)
{
  total += Number(arg[i]);
}

console.log(total);
