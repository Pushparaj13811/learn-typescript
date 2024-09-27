"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, name, city) {
        this.email = email;
        this.name = name;
        this.city = city;
    }
    return User;
}());
// By default, all the properties of the class are public. We can access the properties of the class from outside the class.
// If we want to make the property of the class private, we can use the private keyword.
var pushparaj = new User("pushparajmehta002@gmail.com", "Pushparaj", "Kathmandu");
pushparaj.name = "Pushparaj Mehta";
// pushparaj.city // This will throw an error since the city is private.
var Admin = /** @class */ (function () {
    function Admin(email, name, city) {
        this.email = email;
        this.name = name;
        this.city = city;
    }
    return Admin;
}());
