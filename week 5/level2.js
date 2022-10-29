// 2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let replaced = text.replace(/[,.]/g, "")
let words = replaced.split(' ')

console.log(words)
console.log(words.length)

// 3
/*3 */
let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat")
console.log (shoppingCart)

shoppingCart.push('Sugar')
console.log(shoppingCart)

shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)
console.log(shoppingCart)

shoppingCart.splice(shoppingCart.indexOf('Tea'), 1, 'Green Tea')
console.log(shoppingCart)

// 4
let countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

countries.includes('Ethiopia') ? console.log('ethiopia'.toUpperCase()): countries.push('Ethiopia')

// 5
let webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  webTechs.includes('Sass') ? console.log('Sass is a css processor'): webTechs.push('Sass')
  console.log(webTechs)

//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack = [...frontEnd, ...backEnd]

console.log(fullStack);