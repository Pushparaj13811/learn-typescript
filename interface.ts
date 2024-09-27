interface User {
    readonly dBid: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string // This is a function that returns a string
    startTrial(): string // This is a function that returns a string
    getCoupon(couponname: string, off: number): number
}

// reopening of the interface is allowed in typescript

interface User {
    githubId?: string
}

// extending the interface is allowed in typescript. This is called inheritance in typescript and it is allowed in typescript.

interface Admin extends User {
    role: "admin" | "superadmin" | "ta"
}

const user: User = {
    dBid: 108,
    email: "pushparajmehta002@gmail.com",
    userId: 1,
    startTrial: () => {
        return "Trial started"
        // return 2 // This will throw an error since the return type is string
    },
    getCoupon: (name: "pushparaj10", off: 10) => {
        return 123
    }
}
const pushparaj: Admin = {
    dBid: 108,
    email: "pushparajmehta002@gmail.com",
    userId: 1,
    role: "admin",
    startTrial: () => {
        return "Trial started"
        // return 2 // This will throw an error since the return type is string
    },
    getCoupon: (name: "pushparaj10", off: 10) => {
        return 123
    }
}

user.email = "sandesharyal656@gmail.com";

export { }