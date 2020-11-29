// function to generate a license badge at the top of the page
const generateBadges = licenseBadge => {
  let result = '';

  switch (licenseBadge) {
    case 'MIT':
      result = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'Eclipse':
      result = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
      break;
    case 'GNU':
      result = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case 'IBM':
      result = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
      break;
    case 'Mozilla':
      result = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;

    default: '';
  }

  return result
};


// function to generate markdown for README
const generateMarkdown = mData => {
  return `# ${mData.title} ${generateBadges(mData.licenses)}
  
  ## Description
  ${mData.description}

  ## Deployed
  ${mData.website}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [About](#about)

  ## Installation
  ${mData.installation}  

  ## Usage
  ${mData.description}

  ## License
  ${mData.licenses}

  ## Contributing
  ${mData.contributers}

  ## Tests
  ${mData.testing}  

  ## Questions
  If you have any questions, feel free to reach out to me at my email!   
  Email: ${mData.email}  
  GitHub: http://www.github.com/${mData.github}

  ## About 

  ${mData.about}  
  ${mData.github}  
  ${mData.email}  

`;
};

// enables this file to be required into another file
module.exports = generateMarkdown;
