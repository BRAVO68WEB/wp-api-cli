const mcqGen = require("inquirer");

const questions = [
  {
    type: "input",
    name: "name",
    message: "Give title :- ",
    validate: (value) => {
      if (value === "") {
        return "Title cannot be empty";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "entry",
    message: "Blog entry :- ",
    validate: (value) => {
      if (value === "") {
        return "Entry cannot be empty";
      }
      return true;
    },
  },
  {
    type: "confirm",
    name: "confirm",
    message: "Publish post ?",
    default: false,
  },
];

mcqGen.prompt(questions).then(function (site) {
  console.log("You answered: " + JSON.stringify(site, null, 2));
});
