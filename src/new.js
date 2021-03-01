function _new(obj, ...args) {
    let tmp = {};
    tmp.__proto__ = obj.prototype;
    const ret = obj.call(tmp, ...args);
    return typeof ret === 'object' ? ret : tmp;
}

// 构造函数有返回值
function Car(make, model, year) {
    this.make = make;

    return {
        model,
        year
    };
}

var car1 = _new(Car, 'a', 'b', 'c');
var car2 = new Car('a', 'b', 'c');

console.log(car1.make)  // undefined
console.log(car1.model)  // b
console.log(car1.year);  // c

console.log(car2.make)  // undefined
console.log(car2.model)  // b
console.log(car2.year);  // c

console.log(car1 instanceof Car);
console.log(car1.__proto__ === Car.prototype);
console.log(car1.constructor === Car);
console.log(Car.prototype.constructor === Car);

console.log(car2 instanceof Car);
console.log(car2.__proto__ === Car.prototype);
console.log(car2.constructor === Car);

// 构造函数没有返回值
function Car2(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const car3 = _new(Car2, 'Eagle', 'Talon Tsi', 1993);

console.log(car3 instanceof Car2);
console.log(car3.__proto__ === Car2.prototype);
console.log(car3.constructor === Car2);
console.log(Car2.prototype.constructor === Car2);
