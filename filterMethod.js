// Given an array, return a new array that only includes the numbers.

function findNumbers(mixArray) {
  let numbersArr = [];
  mixArray.filter((el) => {
    if (
      typeof el === "number" &&
      Number.isNaN(Number(el)) !== Number.isNaN(NaN)
    ) {
      numbersArr.push(el);
    }
  });
  return numbersArr;
}

const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN]; // [1, 2, 55, 166]

console.log(findNumbers(arr));

// Write a function which remove users with language equals to 'ru'.

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

function filterUsers(usersArr) {
  let finalArray = [];

  usersArr.filter((el) => {
    if (el.lang !== "ru") {
      finalArray.push(el);
    }
  });
  return finalArray;
}

//console.log(filterUsers(users)); // [{ username: "Nil Armstrong, lang: "ENG" }]

// Write a function which filters object by field.

const users_1 = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];

function filterByField(array, field) {
  let finalArray = [];

  array.filter((el) => {
    if (el[field]) {
      finalArray.push(el);
    }
  });

  return finalArray;
}

console.log(filterByField(users_1, "isAstronaut"));
