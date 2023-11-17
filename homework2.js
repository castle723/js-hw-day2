//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
function displayFavoriteDishes(person) {
    for (let category in person) {
        if (Array.isArray(person[category])) {
            console.log(`${category}: ${person[category].join(", ")}`);
        } else if (typeof person[category] === 'object') {
            console.log(`${category}:`);
            for (let subCategory in person[category][0]) {
                console.log(`  ${subCategory}: ${person[category][0][subCategory]}`);
            }
        } else {
            console.log(`${category}: ${person[category]}`);
        }
    }
}
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Use an arrow to create the printInfo method
Person.prototype.printInfo = () => {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
};

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
Person.prototype.addAge = (years) => {
    this.age += years;
};

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
function checkStringLength(str) {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            resolve("Big word");
        } else {
            reject("Small Number");
        }
    });
}

/* new code wars
Write a function that takes in a string of one or more words, and returns the same string, 
but with all five or more letter words reversed (Just like the name of this Kata). Strings passed
 in will consist of only letters and spaces. Spaces will be included only when more than one word
is present. */

function spinWords(string) {
    let words = string.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= 5) {
            words[i] = words[i].split('').reverse().join('');
        }
    }
    return words.join(' ');
}

/* old code wars
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!

*/

function squareDigits(num) {
    let numStr = num.toString();
    
    let squaredDigits = numStr.split('').map(digit => Math.pow(parseInt(digit, 10), 2)).join('');

    return parseInt(squaredDigits, 10);
}
