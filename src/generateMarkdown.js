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

  ## Usage
  ${mData.description}

  ## License
  ${mData.licenses}

  NOTE: The licenses for the application need to be selected from a list of options with a badge that is added near the top of the README. In addition, there needs to be a notice added to this section of the README that explains which license the application is covered under.

  ## Contributing
  ${mData.contributers}

  ## Tests

  ## Questions
  ${mData.name}
  ${mData.email}

  ## About the Author
  ${mData.about}
  ${mData.github}
  ${mData.}

  NOTE: This section should contain your GitHub username with a link to your GitHub profile. In addition, this section of the README should include the entered email with instructions on how to reach out.

`;
};

module.exports = generateMarkdown;
