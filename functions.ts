// function addTwo(num) {
//     num.toUpperCase();
//     return num + 2;
// }

// let res = addTwo(2); // 4
// console.log(res);


// We shouldnot write function in the above way. We should write it in the below way.

function addThree(num: number): number {
    return num + 3;
}

let output: number = addThree(2);

console.log(output);

export { };

function signupUser(name: string, email: string, password: string, isSubscribed: boolean) {
    // Signup user
    console.log("Name : ", name);
    console.log("Email : ", email);
    console.log("Password: ", password);
    console.log("isSubscribed: ", isSubscribed);

}

signupUser("Pushparaj", "pushparajmehta002@gmail.com", "Pushparaj1381", true)

let logInUser = (email: string, password: string, isSubscribed: boolean = false) => {
    // Login user
    console.log("Email : ", email);
    console.log("Password : ", password);
}

logInUser("Pushparaj", "Pushparaj1381");

let myVal = (val: number): string | boolean => {
    if (val > 5) {
        return true;
    }
    return "200 Ok";
}

let myValue = myVal(6);

const heros = ["Ironman", "Thor", "Hulk", "Captain America"];

heros.map((hero): string => {
    console.log(hero);
    return `${hero} is a hero`;
})

heros.map((hero: string): string => {
    console.log(hero);
    return `${hero} is a hero`;
})

function consoleError(errorMsg: string): void {
    console.log(errorMsg);
}

function handleError(errorMsg: string): never {
    throw new Error(errorMsg);
}

consoleError("This is an error");
handleError("This is an error");
