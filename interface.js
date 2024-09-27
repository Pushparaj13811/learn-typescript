"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    dBid: 108,
    email: "pushparajmehta002@gmail.com",
    userId: 1,
    startTrial: function () {
        return "Trial started";
        // return 2 // This will throw an error since the return type is string
    },
    getCoupon: function (name, off) {
        return 123;
    }
};
var pushparaj = {
    dBid: 108,
    email: "pushparajmehta002@gmail.com",
    userId: 1,
    role: "admin",
    startTrial: function () {
        return "Trial started";
        // return 2 // This will throw an error since the return type is string
    },
    getCoupon: function (name, off) {
        return 123;
    }
};
user.email = "sandesharyal656@gmail.com";


