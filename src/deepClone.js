function deepClone(obj) {
    let result;
    if(typeof obj === 'object') {
        // 判断是否为{} ，因为{}使用instanceof方法会报错
        if(JSON.stringify(obj) === '{}') {
            return obj;
        }
        result = obj instanceof Array ? [] : {};
        for(let i in obj) {
            result[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i];
        }
    } else {
        result = obj;
    }
    return result;
}

console.log(deepClone([1, {a: 2, b:3}]));
