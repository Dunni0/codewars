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

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//1  
for (let i = 0; i <= 10; i++) {
    console.log(i);
  }

let i = 0;
  while (i <= 10) {
    console.log(i);
    i++;
  }

let a = 0;
  do {
    console.log(a);
    a++;
  } while (a <= 10);

// 2

for(let i = 10; i >= 0; i--){
    console.log(i);
  }

let b = 10;
  while(b >= 0){
    console.log(b);
    b--;
  }

let x = 10;
  do{
    console.log(x);
    x--;
  } while(x >= 0)


// 3
  for(let i = 0; i > 0; i++){
console.log(i);
  }

// 4
let triangle = ""
for (let i = 0; i <= 7; i++) {
triangle += '#';
console.log(triangle);
}

// 5
for(let i = 0; i <= 10; i++){
  console.log(`${i} x ${i} = ${i * i}`);
}

// 6
let calc ='';
let inc ='';
for(let j = 0; j < 2; j++){
    inc += 'i \t i^2 \t i^3'
    if (j == 1) break
    console.log(inc);
for(let i = 0; i <= 10; i++){
    if (j == 1) break;
    console.log(inc);
    calc = `${inc}` + ` \n ${i} \t ${Math.floor(Math.pow(i, 2))} \t ${Math.floor(Math.pow(i, 3))}`
    console.log(calc);
}
}

// 7
for(let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

// 8
for(let i = 0; i <= 100; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}


// 9
for(let i = 0; i <= 100; i++){ 
    let notPrime = false;
    for(let j = 2; j <= i; j++){
        if(i % j === 0 && i !== j){
            notPrime = true;
        }
    }
    if(notPrime == false){
        console.log(i);
    }
}

// 10
let summ = 0;
for(let i = 0; i <= 100; i++){
    summ += i;
}
console.log(summ);

// 11
let evenSum = 0;
let oddSum = 0;
for(let i = 0; i <= 100; i++){
    i % 2 === 0 ? evenSum += i: oddSum += i;
}
console.log(evenSum);
console.log(oddSum);

// 12
arrOfBoth = [evenSum, oddSum];
console.log(arrOfBoth);

// 13
let randoArr = []
for(let i = 0; i < 5; i++){
    console.log(Math.floor(Math.random() * 20));
    randoArr.push(Math.floor(Math.random() * 20))
}
console.log(randoArr);

// 14
let uniqueArr = [];
while (uniqueArr.length < 5) {
    let i = Math.floor(Math.random() * 8);
    if(!uniqueArr.includes(i)){
        uniqueArr.push(i)
    }
}
console.log(uniqueArr);

// 15
let output = '';
let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let charLength = char.length;
for(let i = 0; i < 5; i++){
    output += char.charAt(Math.floor(Math.random() * charLength))
}
console.log(output);
