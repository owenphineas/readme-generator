// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description} ${data.motivation} ${data.problem} ${data.learned}
## Table of contents
## Installation
${data.installation}
## Usage
${data.usage}
## Credits
${data.collaborators} ${data.thirdParty} ${data.tutorials}
## Tests
${data.tests}
## License
${data.license}
## Questions
If you have any questions or feedback, you can reach out to me via Github: ${data.username} or email: ${data.email}.
`;
}

module.exports = generateMarkdown;
