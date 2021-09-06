// keep consistency in function declaration
// (don't use all default function constructor, assignment, and arrow functions)
// also, names of the variables should be descriptive and camel case
// (e.g. isPrime or isPrimeNumber instead of ispnum)

/* 
  to find an optimal solution for the function below it is only necessary to look
  up until the square root of the number. For instance 17, the square root
  is 4.12. So 17 can be written as 4.12 * 4.12. 
  If we want to divide 17 any other way in 2 numbers
  one of them has to be lower than the square root (4.12), and the other needs to be higher than 4.12.
  If we cannot find a lower number than its square root, there is no higher number either.
  So by checking up until the square root, it's enough.
*/
const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

/* 
  To optimise the expensive recurrence function calls for big numbers of the function below,
  I would use memoization to store already calculated fibonacci numbers and
  return them directly for further calls if they exist. Since JS is passed by reference
  we are mutating the const memo = {} object from the nxtPrmFib function directly. 
*/
const fibonacci = (num, memo = {}) => {
  if (memo[num]) {
    return memo[num];
  }
  if (num <= 1) {
    return 1;
  }
  return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
};

/* 
  Change the name of the function from 
  nxtPrmFib to something more readable like nextPrimeFibonacci.

  This nextPrimeFibonacci or nxtPrmFib function is hard to read.
  It needs to be re-written having readability in mind.

  Below are 2 shorter ways to write the main function. 
  One way uses recurrsion and the other is still a while loop.
*/

//  ---recurrsion way---
const nextPrimeFibonacci = (number, memo = {}, curr = 1) => {
  const fib = fibonacci(curr, memo);
  console.log("fib", fib, number);
  console.warn("bumping to", fib);
  return isPrime(fib) && fib > number
    ? console.warn("Next prime fib ", fib)
    : nextPrimeFibonacci(number, memo, ++curr);
};

//  ---LOOP way---
// const nextPrimeFibonacci = (number) => {
//   const memo = {};
//   let curr = 0;
//   let found = false;
//   let fib;
//   while (!found) {
//     fib = fibonacci(++curr, memo);
//     console.log("fib", fib, number);
//     found = isPrime(fib) && fib > number;
//     console.warn("bumping to", fib);
//   }
//   console.warn("Next prime fib ", fib);
// };

//  I wasn't sure how important are the console logs here (apart from the last one).
//  I left them in place, but normally, a PR shouldn't have
//  any console logs left.

nextPrimeFibonacci(20);
