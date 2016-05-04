module.exports = MiddleWare;

function MiddleWare(){
  this.funcs = [];
  this.index = 0;
  var _this = this;
  this.use = function(func){
    _this.funcs.push(function() {
      _this.index = _this.index + 1;
      _this.funcs[_this.index] ? func(_this.funcs[_this.index]): func(function(){console.log('fuck');});
    });
  };
  this.go = function(func){
    console.log(this.funcs.length);
    this.funcs[0]();
    func(); 
  };
}
