"use strict";
// function addTwo(num) {
//     num.toUpperCase();
//     return num + 2;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// let res = addTwo(2); // 4
// console.log(res);
// We shouldnot write function in the above way. We should write it in the below way.
function addThree(num) {
    return num + 3;
}
var output = addThree(2);
console.log(output);
function signupUser(name, email, password, isSubscribed) {
    // Signup user
    console.log("Name : ", name);
    console.log("Email : ", email);
    console.log("Password: ", password);
    console.log("isSubscribed: ", isSubscribed);
}
signupUser("Pushparaj", "pushparajmehta002@gmail.com", "Pushparaj1381", true);
var logInUser = function (email, password, isSubscribed) {
    if (isSubscribed === void 0) { isSubscribed = false; }
    // Login user
    console.log("Email : ", email);
    console.log("Password : ", password);
};
logInUser("Pushparaj", "Pushparaj1381");
var myVal = function (val) {
    if (val > 5) {
        return true;
    }
    return "200 Ok";
};
var myValue = myVal(6);
var heros = ["Ironman", "Thor", "Hulk", "Captain America"];
heros.map(function (hero) {
    console.log(hero);
    return "".concat(hero, " is a hero");
});
heros.map(function (hero) {
    console.log(hero);
    return "".concat(hero, " is a hero");
});
function consoleError(errorMsg) {
    console.log(errorMsg);
}
function handleError(errorMsg) {
    throw new Error(errorMsg);
}
consoleError("This is an error");
handleError("This is an error");
