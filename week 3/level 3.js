// 1
let date = new Date()
let year = date.getFullYear()
let month = date.getMonth()+1
let day = date.getDay()
let hours = date.getHours()
let mins = date.getMinutes()


if (day <= 9){
    day = `0${day}`
}

if (month <= 9){
    month = `0${month}`
}

if (hours <= 9){
    day = `0${hours}`
}

if (mins <= 9){
    day = `0${mins}`
}

console.log(`${year}-${month}-${day} ${hours}:${mins} `)




