//---------Activity 
// const alarms = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am"
// }

// let day = "Tuesday";
// let alarm;
// if (day === "Saturday" || day === "Sunday"){
//     alarm = alarms.weekendAlarm;
// } else {
//     alarm = alarms.weekdayAlarm;
// }

// console.log(alarm);

// ----------Activity 1 -------------

// const person = {
//     name: "Alex",
//     age: 30,
//     sayHi: function(){
//         return `Hello my name is ${this.name}`;
//     }
// };

// console.log(person.sayHi());

//-------------Activity 2-----------

// const pet = {
//     name: "Max",
//     typeOfPet: "dog",
//     age: 3,
//     colour: "brown",
//     eat: function() {
//       return `${this.name} is eating.`;
//     },
//     drink: function() {
//       return `${this.name} is drinking.`;
//     }
//   };
  
//   console.log(pet.eat());
//   console.log(pet.drink());

  //-------------------Activity 3------------

  const coffeeShop = {
    branch: "Costa",
    drinks: {
      americano: 2.50,
      latte: 3.00,
      cappuccino: 3.50
    },
    food: {
      croissant: 2.00,
      sandwich: 5.00,
      cake: 3.50
    },
    drinksOrdered: function(drinks) {
      let total = 0;
      let orderList = [];
      for (let drink in drinks) {
        if (drink in this.drinks) {
          orderList.push(`${drink} (${drinks[drink]}) - ${this.drinks[drink] * drinks[drink]}`);
          total += this.drinks[drink] * drinks[drink];
        }
      }
      return `Your order: ${orderList.join(", ")}. Total: ${total}`;
    },
    foodOrdered: function(food) {
      let total = 0;
      let orderList = [];
      for (let item in food) {
        if (item in this.food) {
          orderList.push(`${item} (${food[item]}) - ${this.food[item] * food[item]}`);
          total += this.food[item] * food[item];
        }
      }
      return `Your order: ${orderList.join(", ")}. Total: ${total}`;
    }
  };

console.log(coffeeShop.drinksOrdered({ americano: 2, latte: 1 }));
console.log(coffeeShop.foodOrdered({ sandwich: 3, cake: 2 }));