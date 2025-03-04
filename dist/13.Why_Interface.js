"use strict";
function isLegal(user) {
    if (user.age >= 18)
        return true;
    return false;
}
function greet(user) {
    console.log("Hello my Name is: ", user.fName);
    console.log(user === null || user === void 0 ? void 0 : user.email);
}
console.log(isLegal({ fName: "Ajay", lName: "Bhaskar", age: 20, email: "dummy@gmail.com" }));
greet({ fName: "pranav", lName: "velaga", age: 21 });
