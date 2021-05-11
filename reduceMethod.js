// Given an array, return the sum of numbers that are 18 or over.

function sumNumOver18(numArr) {
  let sum = numArr
    .filter((el) => el > 18)
    .reduce((acc, element) => acc + element);
  return sum;
}

const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];
console.log(sumNumOver18(arr));

// Write a function which calculates average age of users.

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];

function getAverageAge(usersArr) {
  let sum = usersArr.reduce((acc, el) => {
    return acc + el.age;
  }, 0);
  return sum;
}

// function getAverageAge(usersArr) {
//   let sum = usersArr.reduce((acc, el) => acc.age + el.age);
//   return sum;
// }

console.log(getAverageAge(users)); // 55
