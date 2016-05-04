module.exports = MiddleWare;

function MiddleWare(){
  var funcs = [];
  var index = 0;
  var ctx = {};
  var last;
  _this = this
  
  this.use = function(func){
    funcs.push(func);
  };
  
  this.go = function(func){
    last = func;
    funcs[0].call(ctx, this.next);
  };
  
  this.next = function(){
    index = index + 1;
    funcs[index] ? funcs[index].call(ctx, _this.next) : last.call(ctx);
  }
}
