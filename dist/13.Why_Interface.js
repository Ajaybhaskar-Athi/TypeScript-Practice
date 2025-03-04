"use strict";
function isLegal(user) {
    if (user.age >= 18)
        return true;
    return false;
}
function greet(user) {
    var _a;
    console.log("Hello my Name is: ", user.fName);
    console.log((_a = user.email) !== null && _a !== void 0 ? _a : "No email provided");
}
