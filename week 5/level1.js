// 1
let arr = new Array()

// 2
let names = ["ada", "dunni", "mary", "mae", "temi", "grace"]
console.log (names.length)

// 4
console.log(names[Math.floor((names.length)/ 2)])

// 6
let itCompanies = [ 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle',  'Amazon']

// 5
let mixedDataTypes = [1, 2, /3/, '4', 'five', [6, 'seven', `8`], false, undefined, [null]]
console.log(mixedDataTypes.length)


// 7
console.log(itCompanies);

/*8 */
console.log(itCompanies.length);

// 9
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)])
console.log(itCompanies[itCompanies.length -1])

// 10
console.log(itCompanies[0], itCompanies[1], itCompanies[2], itCompanies[3], itCompanies[4], itCompanies[5], itCompanies[6])

// 11
let newItCompaniesArr 
for (let i = 0; i < itCompanies.length; i++) {
    newItCompaniesArr = itCompanies[i].toUpperCase();
    console.log(newItCompaniesArr);
}

// 12
console.log(`${itCompanies.slice(0, 6).join(', ')} and ${itCompanies[itCompanies.length -1] } are big IT compamies.`);

// 13
let exist = itCompanies[itCompanies.indexOf('Google')];
if(itCompanies.includes(exist)){
    console.log(`${exist}`);
} else{
    console.log(`${exist} is not found`);
}

//14
let compWithTwoOs = [];
for(let company of itCompanies){
    let normalCompanies = company;
    console.log(normalCompanies);
if(company.match(/o/gi) != null){
    if(company.match(/o/gi).length > 1){
        compWithTwoOs.push(company);
    } 
}
} console.log(compWithTwoOs);


// 15
console.log(itCompanies.sort());

// 16
console.log(itCompanies.reverse());

// 17
itCompanies.sort();
console.log(itCompanies.slice(0, 3));

// 18
console.log(itCompanies.slice(-3));

// 19
console.log(itCompanies.slice(itCompanies.indexOf(itCompanies[Math.floor(itCompanies.length / 2)]), 4));

// 19
console.log(itCompanies.slice(1));

//20
 console.log(itCompanies.splice(itCompanies.indexOf(itCompanies[Math.floor(itCompanies.length / 2)]), 1));
 console.log(itCompanies);

//22 
 console.log(itCompanies.splice(-1));
 console.log(itCompanies);

//  23
 console.log(itCompanies.splice(0, itCompanies.length));
 console.log(itCompanies)