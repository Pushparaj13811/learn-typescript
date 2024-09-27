class User {

    protected _courseCount: number = 1


    readonly city: string
    constructor(
        public email: string,
        public name: string,
    ) {

    }

    private deleteToken() {
        console.log('Deleting token')
    }

    get getAppleEmail(): string {
        return `apple ${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }
    set courseCount(count: number) {
        if (count <= 1) {
            throw new Error('Course count should be greater than 1')
        }
        this._courseCount = count
    }
    // set setCourseCount(count: number): void { // This is a setter method is not allowed since we are returning void. setter method should return any value.
    //     this._courseCount = count
    // }
}

class SubUser extends User {
    isFamily: boolean = true

    changeCourseCount() {
        this._courseCount = 4; // if the property in parent class is private then it is not accessable in chid class but when it is protected or public then it is accessable in child class too.
    }
}

const pushparaj = new User("Pushparajmehta002@gmail.com", "Pushparaj")

console.log(pushparaj.getAppleEmail)
console.log(pushparaj.courseCount)
pushparaj.courseCount = 10
console.log(pushparaj.courseCount)

// pushparaj.deleteToken(); // This will throw an error since the method is private.




export { };