"use strict";
function getFirstEle(arr) {
    return arr[0];
}
console.log(getFirstEle([1, 2, 3, 4, 5]));
console.log(getFirstEle(["A", "B", "C"]));
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
console.log(merge({ name: "Ajay" }, { age: 21 }));
function getNewArr(arr) {
    return new Array().concat(arr);
}
const arr = [11, 22, 33];
const newArr = getNewArr(arr);
console.log(arr, newArr);
