// 1
let base = prompt("Enter base: ")
let height = prompt("Enter height: ")
let area = 0.5 * parseInt(base) * parseInt (height)
let output1 = alert(`The area of the triangle is ${area}`)

// 2
let a = prompt("Enter side a: ")
let b = prompt("Enter side b: ")
let c = prompt("Enter side c: ")
let num_a = parseInt(a), num_b = parseInt(b), num_c = parseInt(c)
let perimeter = num_a + num_b + num_c10
let output2 = alert(`The perimeter of the triangle is ${perimeter}`)

// 3
let length = prompt("Enter length: ")
let width = prompt("Enter width: ")
let area1 = parseInt(length) * parseInt(width)
let perimeter1 = 2*(parseInt(length) + parseInt(width))
let output3 = alert(`The are of the rectangle is ${area1} and the perimeter is ${perimeter1}`)

// // 4
let r = prompt("Enter radius: ")
let area2 = 3.14 * parseInt(r) * parseInt(r)
let circum = 2 * 3.14 * parseInt(r)
let output4 = alert(`The area of a circle is ${area2} and the circumference is ${circum}`)

//5


// 6
let x1=2, x2=6, y1=2, y2=10
let m2=(y2 - y1)/(x2-x2)
console.log(m2)

// 9
let hrs = prompt("Enter hours: ")
let rate = prompt("Enter rate per hour: ")
let total = parseInt(hrs) * parseInt(rate)
let output5 = alert(`Your weekly earning is ${total}`)

// 10
let myName = "pelumi"
if (myName.length > 7){
     console.log("Your name is long")
} else{
    console.log("Your name is short")
}

// 11
let firstName1 = 'Asabeneh'
let lastName1 = 'Yetayeh'

if(firstName1.length > lastName1.length){
    console.log("Your first name, Asabeneh is longer than your family's name, Yetayeh")
} else{
    console.log("Your first name is not longer than your family's name")
}

// 12
let myAge = 250
let yourAge = 25
let difference = myAge - yourAge
console.log(`I am ${difference} years older than you`)

// 13
let yourYear = prompt("Enter your age: ")
let actuaAge = 18
let diff = 18 - parseInt(yourYear)
if (parseInt(yourYear) > actuaAge){
    console.log("You are old enough to drive")
} else{
    console.log(`You will be allowed to drive after ${diff} years`)
}

// 14
// let numYears = prompt("Enter number of years you have lived: ")
console.log(new Date())

// 15
let date = new Date()
let year = date.getFullYear()
let month = date.getMonth()+1
let day = date.getDay()
let hours = date.getHours()
let mins = date.getMinutes()

console.log(`${year}-${month}-${day} ${hours}:${mins} `)
console.log(`${day}-${month}-${year} ${hours}:${mins} `)
console.log(`${year}/${month}/${day} ${hours}:${mins} `)
