let score: number | string = 100;

score = 44;

score = "200";

type User = {
    name: string,
    id: number
}
type Admin = {
    username: string,
    id: number
}

let Pushparaj: User | Admin = {
    name: "Pushparaj",
    id: 1
}
console.log(Pushparaj)

Pushparaj = { username: "pushparaj1381", id: 1 }

console.log(Pushparaj)

function getDbId(id: number | string) {
    console.log(`DB id is : ${id}`);
}

getDbId(12);

function getUser(id: string | number) {
    if (typeof id === "string") {
        id.toLocaleLowerCase();
    }
}

// array 

const data: number[] = [1, 2, 3, 4, 5]
const data2: string[] = ["1", "2", "3", "4"]
// const data3: string[] | number[] = [1, 2, '3'] // Here it is not allowed to create array of mixmatch data types
const data4: (string | number)[] = [1, 2, "3"] // Here you can create array of mixmatch data types

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"; // It is allowed 
// seatAllotment = "crew"; // It is not allowed
export { };