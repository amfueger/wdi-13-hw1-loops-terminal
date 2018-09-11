// Section 2: JavasScript loops and expressions

//Part 1 terms

// Concatenation taking different strings and
// adding/appending them to each other

var age = 3;

console.log("I'm " + age + " years old!"); 

// interpolation formatting strings
// you have a string and a substring that's meant to be replaced with a value
// editing strings in place, as opposed to adding them to each other

var age = 3;

console.log(`I'm ${age} years old!`); 

//DRY Don't Repeat Yourself, aka 
// don't get WET, write everything twice

//declaring - tells compiler you need space for variable, but no space is allocated yet


// defining - allocates amount of physical memory for variable

//const is for identifiers that won't be reassigned
// let may be reassigned. It also will only be used in the blook
// it's defined in, 

//parent - directory above another directory

//????? How to get commands!!!

// Tab completion let's you use the tab key to auto-fill directories, file names, etc. 


// Part 2 Boolean expressions and operators

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'kevin';

//turns into...
console.log();
console.log()
console.log('Name' === 'Name')
console.log(a + b === c)
console.log(a x a === d);
console.log(e === 'kevin');
console.log(48 !== '48');


//Part 3 While loops

//1. Infinite Loop?
// yes because we forgot a variable

//2. Infinite Loop II
//no, because the variable becomes false

//3. Reading Code

//let, declaring limited in scope variables
let letters = "A";
let i = 0;

//loop argument, while (i is less than 20, and i currently === 0)
while (i < 20) {
// letters will add another A to the string	
	letters += "A";
//add 1 to i. 	
	i++;
}

//restart loop if while argument is still true. 

//print out to console letters
console.log(letters);
 
 // 21 A's or AAAAAAAAAAAAAAAAAAAAA

// Part 4

//1. for loops vs while
//while checks whether its condition is true, and executes until it is not
//for loop relies on knowing how many iterations
// while is for unknown iterations, for is for known, they both run loops

//2. Basic for loop
var i;
for (i = 0; i < 1000; i++)
{
  console.log(i);
}
//why is this not working????

//3. Mechanics of a for loop

//i = 0 to start, i is 0
//i < 100 i is less than 100
//i++ add 1 to i

//4. for loop in reverse i--
//5. more counting


var i;
for (i = 0; i <= 10; i++) {
	console.log('The value of i is: ' + i + ' out of 10');
}

