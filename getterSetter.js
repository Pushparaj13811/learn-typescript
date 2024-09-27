"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
    }
    User.prototype.deleteToken = function () {
        console.log('Deleting token');
    };
    Object.defineProperty(User.prototype, "getAppleEmail", {
        get: function () {
            return "apple ".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        set: function (count) {
            if (count <= 1) {
                throw new Error('Course count should be greater than 1');
            }
            this._courseCount = count;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    SubUser.prototype.changeCourseCount = function () {
        this._courseCount = 4; // if the property in parent class is private then it is not accessable in chid class but when it is protected or public then it is accessable in child class too.
    };
    return SubUser;
}(User));
var pushparaj = new User("Pushparajmehta002@gmail.com", "Pushparaj");
console.log(pushparaj.getAppleEmail);
console.log(pushparaj.courseCount);
pushparaj.courseCount = 10;
console.log(pushparaj.courseCount);
