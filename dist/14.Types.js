"use strict";
function isLegal2(user) {
    if (user.age >= 18)
        return true;
    return false;
}
function greet2(user) {
    console.log("Hello my Name is: ", user.fName);
}
console.log(isLegal2({ fName: "Ajay", lName: "Bhaskar", age: 20 }));
greet2({ fName: "pranav", lName: "velaga", age: 21 });
