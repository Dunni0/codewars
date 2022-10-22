// 1
let monthInput = 'FebruarY'; /*prompt("enter a month");*/
month = monthInput.toLowerCase();

let now = new Date();
let year = now.getFullYear();
console.log(year);

switch(month) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'october':
    case 'september':
    case 'december':
    case 'august':
      console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 31 days`);
      break;
    case 'april':
    case 'june':
    case 'november':
      console.log (`${month.charAt(0).toUpperCase() + month.slice(1)} has 30 days`);
      break;
    case 'february':
      if ((year % 4 === 0  && year % 100 !== 0) || (year % 400 === 0)){
          console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 29 days`);
      } else {
          console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 28 days`);
      }
      break;
    default:
      console.log("this is not a month");
  
  }