"use strict";
function runAfter1S(cb) {
    setTimeout(cb, 5000);
}
console.log("Hello wolrd");
const cb = () => {
    console.log("Callback executed");
};
runAfter1S(cb);
function helper(cb2) {
}
