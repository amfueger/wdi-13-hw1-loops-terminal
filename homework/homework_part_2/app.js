// Section 2: JavasScript loops and expressions

//Part 1 terms
/*
Question 1: What is the difference between interpolation 
and concatenation? Examples:

 Answer: 
 Concatenation taking different strings and
adding/appending them to each other
this is the old way of interpolation
*/
var age = 3;

console.log("I'm " + age + " years old!"); 
/*
interpolation formatting strings
you have a string and a substring that's meant to be replaced with a value
editing strings in place, as opposed to adding them to each other
newer way to do concatination 
*/
var age = 3;

console.log(`I'm ${age} years old!`); 

/* Question 2: What does DRY stand for? Why pay 
 attention to it? What programming tools 
 have we learned to write DRY code?

Answer:

DRY Don't Repeat Yourself, aka 
don't get WET, write everything twice
tools we use to write DRY code: const vs. let vs. var, functions, loops
*/

/*

Question 3: What is the difference between declaring a 
variable and assigning a value to a variable? 
What does "define" mean?

Answer:
declaring - tells compiler you need space for variable, 
but no space is allocated yet
defining - allocates amount of physical memory for variable

/* 
Question 4: When should we use const and when should 
we use let?

Answer: 

const is for identifiers that won't have their type reassigned
let may be reassigned. Let also will only be used in the blook
it's defined in
*/

/*
Question 5: what is a parent directory?
Answer: 

parent - directory above another directory
*/

/*
Question 6: If you're unsure about a command,
how can you get more info without using the internet?
Answer:
man source
or help

*/

/* Question 7: What is "tab completion" and why is it
so very cool?

Answer: 
Tab completion let's you use the tab key to auto-fill directories, file names, etc. 
*/

// Part 2 Boolean expressions and operators

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'kevin';

//turns into...
console.log(a < b);
console.log(c >= d);
console.log('Name' == 'Name');
console.log(a + b === c);
console.log(a * a === d);
console.log(e === 'kevin');
console.log(48 !== '48');


//Part 3 While loops

/*
1. Infinite Loop?
yes because we forgot a variable

2. Infinite Loop II
no, because the variable becomes false

3. Reading Code

21 A's or AAAAAAAAAAAAAAAAAAAAA
*/

//let, declaring limited in scope variables
//that can change
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

//print out to console letters once the above is not true

console.log(letters);
 


// Part 4

/* 1. for loops vs while
while checks whether its condition is true, and executes until it is not
for loop relies on knowing how many iterations
while is for unknown iterations, for is for known, they both run loops

2. Basic for loop
*/
for (let i = 0; i < 1000; i++)
{
  console.log(i)
}

/*
3. Mechanics of a for loop

i = 0 to start, i is 0
i < 100 i is less than 100
i++ add 1 to i

4. for loop in reverse i--
*/
for (let i = 999; i >= 0; i--) {
  console.log(i)
}


//5. more counting



for (let i = 0; i <= 10; i++) {
	console.log('The value of i is: ' + i + ' out of 10');
}

