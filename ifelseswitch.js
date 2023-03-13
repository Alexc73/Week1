// ------Activity 1-----

// let age = 18;

// if (age > 17) {
//   console.log("Yes I can serve you");
// } else {
//   console.log("You aren't old enough");
// }



// let age = 18;
// let country = "UK";

// if (age > 17 && country === "UK") {
//   console.log("Yes I can serve you");
// } else {
//   console.log("You aren't old enough");
// }

// --------Activity 2-------

// let topping = "olives";

// switch (topping) {
//   case "mushrooms":
//   case "onions":
//   case "pepperoni":
//     console.log("These are important ingredients for my pizza.");
//     break;
//   case "olives":
//     console.log(`I don't mind having ${topping} on my pizza.`);
//     break;
//   default:
//     console.log(`${topping} should not be on a pizza.`);
//     break;
// }

// ----------Activity 3-----------

// let password = "password";

// if (password.length < 8) {
//   console.log("The password is too short.");
// } else {
//   console.log(password);
// }

// -------Activity 4---------

// let num = 8; 

// if (num % 3 === 0 || num % 5 === 0) {
//   console.log("This number is divisible by 3 or 5.");
// } else {
//   console.log("This number is not divisible by 3 or 5.");
// }

//------------ Activity 5-----------


// let num = 15;

// if (num % 3 === 0 && num % 5 === 0) {
//   console.log("fizz buzz");
// } else if (num % 3 === 0) {
//   console.log("fizz");
// } else if (num % 5 === 0) {
//   console.log("buzz");
// } else {
//   console.log(num);
// }

//------------Acitvity 6------------

// let num = 12321; 
// let numStr = num.toString();
// let reversedStr = numStr.split("").reverse().join("");
// if (numStr === reversedStr) {
//   console.log(`${num} is a palindrome.`);
// } else {
//   console.log(`${num} is not a palindrome.`);
// }

//------------Ativity 7--------------

// let time = 9; 
// let placeOfWork = "office"; 
// let townOfHome = "Liverpool";

// if (time < 8) {
//   console.log(`At ${time} I'm at home in ${townOfHome}.`);
// } else if (time >= 8 && time < 9) {
//   console.log(`At ${time} I'm commuting to ${placeOfWork}.`);
// } else if (time >= 9 && time < 18) {
//   console.log(`At ${time} I'm at work in the ${placeOfWork}.`);
// } else {
//   console.log(`At ${time} I'm at home in ${townOfHome}.`);
// }

//---------Activity 8---------

// let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
// let vowels = ["a", "e", "i", "o", "u"];

// for (let i = str.length - 1; i >= 0; i--) {
//   if (vowels.includes(str[i])) {
//     console.log(`The index of the last vowel in the string is: ${i}`);
//     break;
//   }
// }

//-----------Activity 9-------
// let word = "example";

// if (word.charAt(0) === word.charAt(word.length - 1)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//-----------Activity 10--------

let num1 = 1;
let num2 = 2; 

let sum = num1 + num2;

if (sum % 2 === 0) {
  console.log(sum);
} else {
  console.log(num1 * num2);
}
