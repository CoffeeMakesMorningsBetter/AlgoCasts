// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   let arr = [0,1]
//   if(n === 1 || n === 0) return n 
//   for(let i = 2; i <=n; i++){
//     arr.push(arr[i-1] + arr[i-2])
//   }
//   return arr[n]
// }

// function fib(n) {
//   if(n <= 1) return n 
//   return fib(n-1) + fib(n-2)
// }

// Terrible Time Complexity Because of O(log(2^n)) EXPONENTIAL

// IMPORVE RECURSIVE SOLUTION - MEMOZIATION

function fib(n, memo = []) {
  if(n <= 1) return n 
  if(memo[n]) return memo[n]
  memo[n] = fib(n-1, memo) + fib(n-2, memo)
  return memo[n]
}
module.exports = fib;
