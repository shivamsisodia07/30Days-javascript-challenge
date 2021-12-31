const people = [
  { name: "Wes", year: 1997 },
  { name: "Kait", year: 1906 },
  { name: "Irv", year: 1990 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

//   const isadult = people.some(function (person) {
//     const currentYear = new Date().getFullYear();
//     console.log(currentYear);
//     if (currentYear - person.year > 18) {
//       return true;
//     }
//   });

const isadult = people.some(
  (person) => new Date().getFullYear() - person.year >= 19
);
console.log(isadult);

// Array.prototype.every() // is everyone 19 or older?

const everyAdult = people.every(
  (person) => new Date().getFullYear() - person.year < 19
);
console.log(everyAdult);
// Array.prototype.find()

const find = comments.find((comments) => comments.id === 823423);
console.log(find);
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

// Array.prototype.findIndex()

const index = comments.findIndex((comments) => comments.id === 823423);
console.log(index);

comments.splice(index, 1);
// Find the comment with this ID
// delete the comment with the ID of 823423
