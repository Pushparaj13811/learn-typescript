class User {
    public email: string
    name: string
    private readonly city: string
    constructor(email: string, name: string, city: string) {
        this.email = email
        this.name = name
        this.city = city
    }

}

// By default, all the properties of the class are public. We can access the properties of the class from outside the class.
// If we want to make the property of the class private, we can use the private keyword.

const pushparaj = new User("pushparajmehta002@gmail.com", "Pushparaj", "Kathmandu")
pushparaj.name = "Pushparaj Mehta"
// pushparaj.city // This will throw an error since the city is private.


class Admin {
    constructor(
        public email: string,
        public name: string,
        private city: string
    ) {

    }
}

// In the above example, we have used the public keyword in the constructor. This is a shorthand way of defining the properties of the class. It is equivalent to the above example of User class.

export { };