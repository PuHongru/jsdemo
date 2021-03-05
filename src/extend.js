function Foo(name) {
    this.name = name;
}

Foo.prototype.myName = function() {
    return this.name;
}

// 继承属性，通过借用构造函数调用
function Bar(name, label) {
    //Foo.call(this,name);
    this.name = name;
    this.label = label;
}

// 继承方法，创建备份
Bar.prototype = Object.create(Foo.prototype);

// 设置正确的构造函数，要不然会发生判断类型出错
Bar.prototype.constructor = Bar;

Bar.prototype.myLabel = function() {
    return this.label;
}

var a = new Bar('a', 'obj a');

console.log(a.myName());
console.log(a.myLabel());