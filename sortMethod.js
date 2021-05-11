// - Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:

// "Asc" returns a sorted array in ascending order.
function sortByAsc(arr) {
  return arr.sort((a, b) => a - b);
}
// "Desc" returns a sorted array in descending order.
function sortByDesc(arr) {
  return arr.sort((a, b) => b - a);
}
// Main function
function sortByAscDesc(array, sortType = "Asc") {
  if (sortType === "Asc") {
    return sortByAsc(array);
  } else if (sortType === "Desc") {
    return sortByDesc(array);
  }
  return `Error`;
}

let num = [7, 3, 8, 6, 5, 4, 2, 1];
let num2 = [1, 2, 5, 4];
console.log(sortByAscDesc(num, "Asc"));
console.log(sortByAscDesc(num, "Desc"));
console.log(sortByAscDesc(num2));
