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
  type: 'input',
  name: 'usage',
  message: 'What is the use of your project?',
  validate: usageInput => {
      if (usageInput) {
          return true;
      } else {
          console.log('Please provide a use for your project');
          return false;
      }
  }
},
{
  type: 'input',
  name: 'tests',
  message: 'How do you test this project?',
  validate: testingInput => {
      if (testingInput) {
          return true;
      } else {
          console.log('Please explain how to test this project');
          return false;
      }
  }
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
    choices: ['MIT','GNU GPLv3','Apache 2.0','ISC','N/A']
},
{
  type: 'input',
  name: 'username',
  message: 'What is your Github username?',
  validate: askMeInput => {
      if (askMeInput) {
          return true;
      } else {
          console.log('Please provide your username so others can reach out to you with questions');
          return false;
      }
  }
},
{
  type: 'input',
  name: 'email',
  message: 'What is your email?',
  validate: emailInput => {
      if (emailInput) {
          return true;
      } else {
          console.log('Please provide an email');
          return false;
      }
  }
}
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