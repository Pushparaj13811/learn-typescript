// Tuples is only available in typescript but not available in javascript.

const user: (string | number)[] = [1, "Pushparaj"]
const usertwo: (string | number)[] = ["Pushparaj", 1]

// Here both are fine but in some case we need to put something specific

let userthree: [string, number, boolean]

userthree = ["Pushparaj", 123, true]

// tuples is helpful in the case of api calls since it consider the order of the data too.

let rgb: [number, number, number]

rgb = [233, 123, 76]

type User = [number, string]

const userfour: User = [1, "Pushparaj"]
const newUser: User = [2, "Mehta"]

userfour[1] = "Pushparaj Mehta"
// newUser.push(true) // It was allowed in the case of tuples but it is not allowed now.
// In earlier versions of TypeScript, tuples were treated more loosely, and you could perform actions like push(). However, this behavior has been restricted, and now TypeScript will prevent you from adding elements that don't conform to the tuple's defined type and length.
// In the case of newUser: User, pushing true (a boolean) would not be allowed because it violates the defined tuple type [number, string].

