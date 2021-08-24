const mcqGen = require("inquirer");

const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
    validate: (value) => {
      if (value === "") {
        return "Name cannot be empty";
      }
      return true;
    },
  },
  {
    type: "confirm",
    name: "confirm",
    message: "Do you like javascript?",
    default: false,
  },
];

mcqGen.prompt(questions).then(function (site) {
  console.log("You answered: " + JSON.stringify(site, null, 2));
});
