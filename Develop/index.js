const inquirer = require('inquirer');
const fs = require('fs');
const { default: Choices } = require("inquirer/lib/objects/choices");


// Runs a series of inquirer prompts
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
            message: 'List any collaborators on the project, with links to their Github pages.',
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
        const genMarkdown = require('./utils/generateMarkdown');
        // Generates the file with the string generated in generateMarkdown.js
        fs.writeFile('README.md', genMarkdown.generateMarkdown(data), (err) => err && console.error(err));
    });