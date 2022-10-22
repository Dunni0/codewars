// 1
let yourYear = prompt("Enter your age: ")
let actuaAge = 18
let diff = 18 - parseInt(yourYear)
if (parseInt(yourYear) > actuaAge){
    console.log("You are old enough to drive")
} else{
    console.log(`You will be allowed to drive after ${diff} years`)
}


// 2
let myAge = 25;
let yourAge = prompt("Enter your age: ")
yourAge = parseInt(yourAge)

if (yourAge > myAge ){
    console.log('You are ' + (yourAge - myAge) + ' years older than me');
} else if (myAge > yourAge){
    console.log("I am " + (myAge - yourAge) + " years older than you")
} else if (myAge === yourAge){
    console.log("We are age mates")
}

// 3
let a = 4
let b = 3

if (a > b){
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} is less than ${b}`);
}

a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`);

// 4
let checkNum = prompt("Enter num: ")
correctNum = parseFloat(checkNum);

checkNum % 2 === 0 ? console.log(`${checkNum} is an even number`) : console.log(`${checkNum} is an odd number`);




