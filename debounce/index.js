module.exports = debounce;

function debounce(func, timeout){
  var handler;
  return function(){
    if(!!handler){
      clearTimeout(handler);
    }

    var _this = this;
    var args = arguments;
    handler = setTimeout(function () { func.apply(_this, args); }, timeout);
  };
}
