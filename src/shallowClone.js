// 浅克隆
function shallowClone(obj) {
    let cloneObj = {};

    for(let i in obj) {
        cloneObj[i] = obj[i];
    }

    return cloneObj;
}