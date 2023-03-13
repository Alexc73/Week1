//-------- Activity 1 ---------------

// const factorial = (n) => {
//     if ((n === 0) || (n === 1)) {
//     return 1;
//     } else {
//     return (n * factorial(n-1));
//     }
//     }
//     console.log(factorial(33));

//---------Activity 2-------------

// let orderCount = 0;

// const takeOrder = (topping, crust) => {
// console.log(`Pizza with ${topping} and ${crust} crust`);
// orderCount++;
// console.log(`Order number ${orderCount}`);
// }

// takeOrder("pineapple", "thin");

//-----------Activity 3---------------

let balance = 500;
const pin = 1234;

const withdraw = (amount, pinNumber) => {
  if (pinNumber === pin && amount <= balance) {
    balance -= amount;
    console.log(`Successfully withdrew ${amount}. New balance: ${balance}`);
  } else if (pinNumber !== pin) {
    console.log('Incorrect pin number');
  } else {
    console.log('Insufficient funds');
  }
};

withdraw(100, 1234);
withdraw(700, 1234);
withdraw(100, 4321);