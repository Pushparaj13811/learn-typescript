"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 100;
score = 44;
score = "200";
var Pushparaj = {
    name: "Pushparaj",
    id: 1
};
console.log(Pushparaj);
Pushparaj = { username: "pushparaj1381", id: 1 };
console.log(Pushparaj);
function getDbId(id) {
    console.log("DB id is : ".concat(id));
}
getDbId(12);
function getUser(id) {
    if (typeof id === "string") {
        id.toLocaleLowerCase();
    }
}
// array 
var data = [1, 2, 3, 4, 5];
var data2 = ["1", "2", "3", "4"];
// const data3: string[] | number[] = [1, 2, '3'] // Here it is not allowed to create array of mixmatch data types
var data4 = [1, 2, "3"]; // Here you can create array of mixmatch data types
var seatAllotment;
seatAllotment = "aisle"; // It is allowed 
