// Returns a license badge based on which license is passed in
function renderLicenseBadge(data) {
  if(data.license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if(data.license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if(data.license === 'GNU') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else {
    // If there is no license, returns an empty string
    return ''
  }
}

let licenseBadge = renderLicenseBadge();

// Returns the license link
function renderLicenseLink(data) {
  if(data.license === 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  } else if(data.license === 'Apache') {
    return 'https://opensource.org/licenses/Apache-2.0'
  } else if(data.license === 'GNU') {
    return 'https://www.gnu.org/licenses/gpl-3.0'
  } else {
    // If there is no license, returns an empty string
    return ''
  }
}

let licenseLink = renderLicenseLink();

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
${licenseBadge}
${licenseLink}
## Questions
If you have any questions or feedback, you can reach out to me via Github: ${data.username} or email: ${data.email}.
`;
}

module.exports = generateMarkdown;
