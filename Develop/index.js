// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
			name: "title",
			message: "What is your title of your project?",
      validate: (projectNameInput) => {
        if (projectNameInput) {
          return true;
        } else {
          console.log("Please Enter your name!")
          return false
        }
      }
},
  {
    type: "input",
			name: "description",
			message: "Please describe your project:",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("A valid project description is required")
          return false
        }
      }
},
{
  type: "input",
    name: "installation",
    message: "Please describe the installtion process if applicable:",
},
{
  type: "input",
    name: "contribution",
    message: "If applicable, provide guidelines on how others can contribute",
},
{
  type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ['MIT','GNU GPLv3','Apache License 2.0','ISC','N/A']
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, error => {
    if (error) {
      return console.log('Sorry there was an unexpected error :' + error)
    }

    console.log("Success, your README.md file has been generated!")
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function (newProject) {
    console.log(newProject)
    writeToFile("../dist/README.md", generateMarkdown(newProject))
  })
  .catch(err => {
    console.log(err)
  })
}

// Function call to initialize app
init();

module.exports = questions