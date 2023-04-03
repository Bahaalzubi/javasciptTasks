// 1- Write a program that prints numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++){
console.log(i);
}

// 2-Write a program that prints the even numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++){
    if (i % 3){
    console.log(i);}
    }

// 3- Write a program that prints the odd numbers from 1 to 10 using a while loop.
let i = 1;
while (i <= 10) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}

// 4- Write a program that prints the multiplication table of a number entered by the user using a for loop.

const num = parseInt(prompt("Enter a number: "));
for(let i = 1; i <= 10; i++){
    
   console.log(`${num} * ${i} =${num*i}`);
}




// 5- Write a program that calculates the sum of numbers from 1 to 100 using a while loop.
let x = 1;
let sum = 0;
while (x <= 100){
    sum += x
    x++
}
console.log(+sum);





// 6- Write a program that calculates the factorial of a number entered by the user using a for loop.

// Prompt the user to enter a number
let z = parseInt(prompt("Enter a number:"));

// Initialize the factorial to 1
let factorial = 1;

// Calculate the factorial using a for loop
for (let i = 1; i <= z; i++) {
  factorial *= i;
}

// Print the factorial to the console
console.log(`The factorial of ${z} is ${factorial}.`);


// 7- Write a program that prints the Fibonacci series up to a certain number entered by the user using a while loop.

let limit = parseInt(prompt("Enter the limit of the Fibonacci series: "));
let num1 = 0, num2 = 1;
let nextTerm = num1 + num2;

while (nextTerm <= limit) {
  console.log(nextTerm);
  num1 = num2;
  num2 = nextTerm;
  nextTerm = num1 + num2;
}

// 8- Write a program that prints the reverse of the following numbers:
//5 , 10 , 15 , 20
// using a while loop.

let i = 4;
const numbers = [5, 10, 15, 20];

while (i >= 0) {
  console.log(numbers[i]);
  i--;
}

