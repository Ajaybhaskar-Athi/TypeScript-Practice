"use strict";
function printt(a) {
    console.log("Hello " + a);
}
printt("777");
function validVoter(age) {
    if (age >= 18) {
        return true;
    }
    return false;
}
const valid = validVoter(20);
console.log("Hello this is validVoter", valid);
function add(a, b) {
    return a + b;
}
console.log("1st way of writing Fun", add(4, 6));
const sub = (num1, num2) => {
    return num1 - num2;
};
console.log("2nd way of writing Fun", sub(4, 6));
const mult = function (a, b) {
    return a * b;
};
console.log("3rd way of Writing: ", mult(2, 3));
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((acc, currNum) => acc + currNum, 0);
}
console.log(add2(1, 2, 3, 4, 5, 6));
