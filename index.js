const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

//optimized
const titleCased = () => {
  return tutorials.map((upperCase) =>
    upperCase
      .split(" ")
      .map((upperTitle) => upperTitle[0].toUpperCase() + upperTitle.slice(1))
      .join(" ")
  );
};
titleCased();

// const titleCased = () => {
//   tutorials.map((upperCase) => {
//     const newArray = upperCase.split(" ");

//     const joinString = newArray
//       .map((upperTitle) => upperTitle[0].toUpperCase() + upperTitle.slice(1))
//       .join(" ");
//     return joinString
//   });

//   return tutorials;
// };
// let split_this = "split this sentence into individual words";
// newArray = split_this.split(" ");

// let capitalLetters = "";
// for (let capitalizeThis of newArray) {
//    consainedLetters = capitalizeThis[0].toUpperCase() + capilaizeThis.slice(1);
//    capitalLetters += consainedLetters
// }
// console.log(capitalLetters);
