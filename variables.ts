let greetings: string = "Pushparaj Mehta";

console.log(greetings);

// greetings = 6; // This will throw an error as we are trying to assign a number to a string variable.

let num: number = 4;

// num.toUpperCase(); // This will throw an error as toUpperCase() is not a method of number.

type Todo = {
    id: number,
    title: string,
    description: string,
    completed: boolean
}

const todo: Todo = {
    id: 1,
    title: "learn angular",
    description: "I should learn angular file structure and components",
    completed: false
}

console.log(todo);

// number 

let userId: number = 1;
let userName: string = "Pushparaj Mehta";
let userAge: number = 22;

// Typescript automatically assigns the type of the variable based on the value assigned to it.

let isCompleted: boolean = false; // instead of writing boolean, we can also write let isCompleted = false;

let isUser = false; // we can write this too.

// Removed incomplete statement
export { }; // This is to avoid TS error: "Cannot redeclare block-scoped variable 'greetings'."
