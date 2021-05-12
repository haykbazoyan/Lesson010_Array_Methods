// How to pass arguments in sum function?

function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // prints 6

// Swapping Values using the Destructuring Assignment

let a = 3;
let b = 6;
[a, b] = [b, a];
console.log(a);
console.log(b);
