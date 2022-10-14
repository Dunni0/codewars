// 1
console.log('Love is the best thing in this world. Some found their love and some are still looking for their love.'.match(/love/gi))

// 2
console.log("You cannot end a sentence with because because because is a conjunction".match("because"))

// 3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!?, %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/[@$&%#!*,;]/g, ""))

// 4
let incomeDes = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month"
let allIncome = incomeDes.match(/\d+/g)
console.log(Number(allIncome[0]) + Number(allIncome[1]) + Number(allIncome[2]))