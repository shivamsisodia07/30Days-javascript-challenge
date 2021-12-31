const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello");
// Interpolated
console.log("hello i am a %s ", "🙂");

// Styled
console.log(`%c hello i am `, `font-size:15px; background:red`);

// warning!
console.warn("ohh no");

// Error :|
console.error("ohh shit!!");

// Info
console.info("wow");

// Testing

//   this will show error b/c condition is false
console.assert(1 === 2, "thats wrong ans");
// this will not shown in console beacuse condition is true
console.assert(1 === 1, "thats right");

// clearing
//   console.clear();

// Viewing DOM Elements
const p = document.querySelector("p");
console.log(p);
//   this will open p
console.dir(p);
// Grouping together

dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log("hi " + `${dog.name}`);
  console.log("his age " + `${dog.age}`);
  console.groupEnd(`${dog.name}`);
});
// counting
console.count("shivam");
console.count("hi");
console.count("hi");
console.count("shivam");
console.count("hi");
console.count("hi");
// timing

//   this will start the Timer
console.time("something name");

//this will stop the timer
console.timeEnd("something name");

console.table(dogs);
