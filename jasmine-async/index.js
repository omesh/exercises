module.exports = jasmineAsync

function jasmineAsync(func){
  var obj = func();
  obj.setup(obj.test);
}
