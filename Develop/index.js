
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README


// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { default: Choices } = require("inquirer/lib/objects/choices");

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?',
        },
        // 'Description'
        {
            type: 'input',
            name: 'description',
            message: 'Give a short description of the project.',
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation?',
        },
        {
            type: 'input',
            name: 'problem',
            message: 'What problem does the project solve?',
        },
        {
            type: 'input',
            name: 'learned',
            message: 'What did you learn?',
        },
        // 'Table of contents'
        {
            type: 'confirm',
            name: 'contents',
            message: 'Include table of contents?'
        },
        // 'Installation'
        {
            type: 'input',
            name: 'installation',
            message: 'Give a step-by-step guide to installing the program.',
        },
        // 'Usage'
        {
            type: 'input',
            name: 'usage',
            message: 'How is the project used? Provide examples.',
        },
        // 'Credits'
        {
            type: 'input',
            name: 'collaborators',
            message: 'List any collaborators and the project, with links to their Github pages.',
        },
        {
            type: 'input',
            name: 'thirdParty',
            message: 'List any third party assets and include links.',
        },
        {
            type: 'input',
            name: 'tutorials',
            message: 'List and link any tutorials used in development.',
        },
        // 'Tests'
        {
            type: 'input',
            name: 'tests',
            message: 'Provide some examples of tests that can be run on the program.',
        },
        // 'License'
        {
            type: 'list',
            name: 'license',
            message: 'Which license would you like to use?',
            choices: ['MIT', 'Apache', 'GNU'],
        },
        // 'Questions'
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Provide an email where users can send questions.',
        },
    ])
    .then((data) => {
        console.log(data)
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
