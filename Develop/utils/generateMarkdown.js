const index = require("../index.js");
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT') {
      badge = '![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
  } else if (license === 'Apache 2.0') {
      badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else if (license === 'GNU GPLv3') {
      badge = '![License: GNU GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else {
    badge = ""
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
    if(license === 'MIT') {
      licenseLink = 'https://choosealicense.com/licenses/mit/'
    } else if (license === 'Apache 2.0') {
      licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
    } else if (license === 'GPL v3.0') {
      licenseLink = 'https://www.gnu.org/licenses'
    } else {
      licenseLink = ""
    }
    return licenseLink;
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'N/A') {
    licenseSection = ''
} else {
  licenseSection =
  `License: ${license} `
}
return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	return `
# ${data.title}

## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
### ${renderLicenseLink(data.license)}

## Project Description
${data.description}

## Table of Contents:
 *[Installation Instructions](#installation)
 *[Usage Guidelines](#usage)
 *[Licensing](#license)
 *[Testing](#tests)
 *[Contribution](#contribution)
 *[Questions/Concerns](#questions)

 ## Installation
 ### Please install the following before using this app
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests:
### Run the following commands in your terminal to test this app:
### ${data.tests}

## Questions
### if you have any questions, please don't hesitate to reach out to me at
### Github: https://github.com/${data.username}
### or
### Email: ${data.email}
`;
}


module.exports = generateMarkdown
