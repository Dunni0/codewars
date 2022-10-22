// 1
let grades = prompt("Enter your grade")
switch(true) {
    case (grades >= 90 && grades <= 100) :
        console.log('You scored an A');
        break;
    case (grades >= 70 && grades <= 89):
        console.log('You scored a B');
        break;
    case (grades >= 60 && grades <= 69):
        console.log('You scored a C');
        break;
    case (grades >= 50 && grades <= 59):
        console.log('You scored a D');
        break;
    case (grades >= 40 && grades <= 49):
        console.log('You scored a E');
        break;
    case (grades >= 0 && grades <= 39):
        console.log('You failed woefully');
        break;
    default:
        console.log('you did not take the exam. Report to the principal\'s office');
}


// 2
let anyMonth = prompt("Enter month: ");
let month = anyMonth.toLowerCase();

switch(month){
    case 'december':
    case 'january':
    case 'february':
        console.log('The season is Winter');
        break;
    case 'march':
    case 'april':
    case 'may':
        console.log('The season is Spring');
        break;
    case 'june':    
    case 'july':    
    case 'august':
        console.log('The season is Summer');
        break;
    case 'september':   
    case 'october':   
    case 'november':
        console.log('The season is Autumn');
        break;
    default:
        console.log('You did not enter a month')   

}

// 3
let day = prompt("What is the day today?")
let today = day.toLowerCase();

switch(today){
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log(`${today.charAt(0).toUpperCase() + today.slice(1)} is a working day`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`${today.charAt(0).toUpperCase() + today.slice(1)} is a weekend`);
        break
    default:
        console.log('Not a day of the week')
        
}


