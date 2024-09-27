let user = {name : "Pushparaj", age : 22}
console.log(user.name);
console.log(user.age);

export { }; // This is to avoid TS error: "Cannot redeclare block-scoped variable 'user'."