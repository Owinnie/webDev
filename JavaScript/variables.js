/*
var
let
const
*/

/* var */
var firstName = 'Winnie';
var surname = 'Ouma';
var currentAge = 20;

console.log(firstName);
// Winnie

console.log(surname);
// Ouma

console.log(currentAge);
// 20

console.log(surname, firstName, ':', currentAge);
// Ouma Winnie : 20


/* let */
let middleName;
console.log(middleName);
// undefined

let middleName = 'Tilla';
console.log(middleName);
// Tilla


/* const */
// needs to be declared and initialized at the same time
// syntax error below :
const todaysDay;
todaysDay = 'Tuesday';

// correct way
const todaysDay = 'Tuesday';

// no reassignment
todaysDay = 'Thursday';   // TypeError: Assignment to constant variable.
