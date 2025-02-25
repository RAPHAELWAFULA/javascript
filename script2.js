// 1. Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}

// 2. Count Characters
function countCharacters(str) {
  return str.length;
}

// 3. Capitalize Words
function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Array Functions

// 4. Find Maximum and Minimum
function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

// 5. Sum of Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// 6. Filter Array (Example: Filter even numbers)
function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// Mathematical Functions

// 7. Factorial
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// 8. Prime Number Check
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// 9. Fibonacci Sequence
function fibonacci(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n);
}

// Examples
console.log(reverseString("olleh"));
console.log(countCharacters("hello"));
console.log(capitalizeWords("hello ruff"));
console.log(findMax([3, 5, 7, 2, 8]));
console.log(findMin([3, 5, 7, 2, 8]));
console.log(sumArray([1, 2, 3, 4]));
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(factorial(5));
console.log(isPrime(7));
console.log(fibonacci(10));
