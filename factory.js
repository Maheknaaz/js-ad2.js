// factory function- Is a function that returns an object
// To create multiple similar objects easily
// No need to repeat the same properties/methods
function createUser(name, age){
    return {
        name: name,
        age: age, 
        greet() {
            console.log(`Hello, I'm ${name}.`);

        }
    };
}
const user1 = createUser("Naaz", 21);
const user2 = createUser("Fatimah", 20);

user1.greet();
user2.greet();

// create a factory function that creates a bank account.
const acc1 = createAccount("Naaz", 1000);

console.log("Initial Balance:", acc1.balance);

console.log("After Deposit:", acc1.deposit(500));
console.log("After Withdraw:", acc1.withdraw(300));


function createAccount(name, balance) {
    return {
      name,
      balance,
      deposit(amount) {
        this.balance += amount;
        return this.balance;
      },
      withdraw(amount) {
        this.balance -= amount;
        return this.balance;
      }
    };
  }
  