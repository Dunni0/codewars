// 1
let firstName = "pelumi", lastName = "Awounuga", country = "Nigeria", city = "Lagos", age = null, isMarried = false, year = 2022
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

// 2
console.log("10" === 10)

// 3
console.log(parseInt("9.8") === 10)

// 4i
console.log(typeof firstName === "string")
console.log(country === "Nigeria")

// 4ii
console.log(year === "2022")
console.log("10" === 10)

// 5
let python = "python".length
let jargon = "jargon".length
console.log(python !== jargon)

// 6
console.log (4 > 3 && 10 < 12) 
console.log (4 > 3 && 10 > 12)
console.log (4 > 3 || 10 < 12)
console.log (4 > 3 || 10 > 12)
console.log (!(4 > 3))
console.log (!(4 < 3))
console.log (!(false))
console.log (!(4 > 3 && 10 < 12))
console.log (!(4 > 3 && 10 > 12))
console.log (!(4 === '4'))
console.log("dragon" && "jargon".includes("on"))

//7
let date = new Date()
console.log(date.getFullYear())
console.log(date.getMonth()+1)
console.log(date)
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getTime())