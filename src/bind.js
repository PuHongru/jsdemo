function _bind(asThis, ...args1) {
    if(typeof this !== 'function') {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }
    let fn = this;
    let resultFn = function(...args2) {
        return fn.call(this instanceof resultFn ? this : asThis, ...args1, ...args2);
    }
    let fnNo = new Function();
    fnNo.prototype = fn.prototype;
    resultFn.prototype = new fnNo();
    return resultFn;
}

Function.prototype._bind = _bind;

var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}

bar.prototype.friend = 'kevin';

var bindFoo = bar._bind(foo, 'daisy');

var obj = new bindFoo('18');
// undefined
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin