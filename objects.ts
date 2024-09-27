const user = {
    name: "Pushparaj",
    email: "pushparajmehta002@gmail.com",
    active: true
}

function createUserOne({ name: string, active: boolean }) {
}

createUserOne({ name: "Pushparaj", active: true });

function createCourse(): { name: string, price: number } {
    return { name: "Angular", price: 1000 };
}

type User = {
    name: string,
    age: number,
    email: string,
    isActive: boolean
}

function createUser(user: User): User {
    return user;
}

let userRes = createUser({ name: "", email: "", age: 22, isActive: true });

console.log(userRes);

type UserOne = {
    readonly _id: string,
    name: string,
    age: number,
    email: string,
    isActive: boolean,
    creditCardDetails?: number
}

// type cardNumber = {
//     cardNumber: string,
//     cardDate: string,
//     cardCvv: number,
//     cardHolderName: string
// }

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cardCvv: number
};

let myUser: UserOne = {
    _id: "123",
    name: "Pushparaj",
    age: 22,
    email: "pushparajmehta002@gmail.com",
    isActive: true
}

myUser.email = "pushparaj@gmail.com";
// myUser._id = "456"; // This will throw an error as _id is readonly.



export { }