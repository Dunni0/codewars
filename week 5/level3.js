const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

// 1
let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages.sort());

let minAge = Math.min(...ages)
console.log(minAge);

let maxAge = Math.max(...ages)
console.log(maxAge);


let sum = 0;
for (let age of ages) {
    sum += age;  
}
console.log(sum);

let average = Math.round(sum/ages.length)
console.log(average);

console.log((maxAge - minAge));

console.log(Math.abs(minAge - average));
console.log(Math.abs(maxAge - average));

// 2
console.log(countries.slice(0,10));

// 3
console.log(countries.length);
console.log(countries[Math.floor(countries.length /2)]);

// 4
let firstHalf;
let secondHalf;
if (countries.length % 2 === 0){
    firstHalf = countries.slice(0, countries.indexOf(countries[Math.floor((countries.length - 1) /2)]));
    secondHalf = countries.slice(countries.indexOf(countries[Math.floor((countries.length - 1) /2)]), countries.indexOf(countries[countries.length -1]))


} else {
    firstHalf = countries.slice(0, countries.indexOf(countries[Math.floor((countries.length /2) + 1 )]))
    secondHalf = countries.slice(countries.indexOf(countries[Math.floor((countries.length  /2)) +1]))
}

console.log(firstHalf);
console.log(secondHalf);

console.log(countries.indexOf('Kenya' ));
console.log(countries.indexOf(countries[Math.floor((countries.length  /2)) +1]));





















