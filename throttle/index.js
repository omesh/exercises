module.exports = throttle

function throttle(func, value) {
    var handler;
    var _arguments;
    var _this;
    return function () {
        _this = this;
        _arguments = arguments;
        if (handler === null) {
            handler = setTimeout(function () {
                func.apply(_this, _arguments);
                handler = null;
            }, value);
        }
        else if (handler === undefined) {
            func.apply(_this, _arguments);
            handler = null;
        }
    };
}