"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Pushparaj",
    email: "pushparajmehta002@gmail.com",
    active: true
};
function createUserOne(_a) {
    var string = _a.name, boolean = _a.active;
}
createUserOne({ name: "Pushparaj", active: true });
function createCourse() {
    return { name: "Angular", price: 1000 };
}
function createUser(user) {
    return user;
}
var userRes = createUser({ name: "", email: "", age: 22, isActive: true });
console.log(userRes);
var myUser = {
    _id: "123",
    name: "Pushparaj",
    age: 22,
    email: "pushparajmehta002@gmail.com",
    isActive: true
};
myUser.email = "pushparaj@gmail.com";
