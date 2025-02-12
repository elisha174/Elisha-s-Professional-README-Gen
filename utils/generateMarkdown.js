
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//let license = data.license;

function renderLicenseBadge(licenses) {
  let licenseBadge = '';

  console.log(`before the licenseBadge switch::   ${licenses}`);

  switch (licenses) {
    case 'Apache':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]'; 
      break;
    case 'BSD':
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]';
      break;
    case 'Eclipse' :
      licenseBadge = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]';
      break;
    case 'GNU':
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]';
      break;
    case 'IBM':
      licenseBadge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]';
      break;
    case 'Perl' :
      licenseBadge = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]';
      break;
    default:
      licenseBadge = '';
      break;
  }

  return licenseBadge; 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenses) {
  let licenseLink = '';

  console.log(`before the licenseLink switch::   ${licenses}`);
  
  switch (licenses) {
    case 'Apache':
      licenseLink = 'https://opensource.org/licenses/Apache-2.0'; 
      break;
    case 'BSD':
      licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'Eclipse' :
      licenseLink = 'https://opensource.org/licenses/EPL-1.0';
      break;
    case 'GNU':
      licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'IBM':
      licenseLink = 'https://opensource.org/licenses/IPL-1.0';
      break;
    case 'Perl' :
      licenseLink = 'https://opensource.org/licenses/Artistic-2.0';
      break;
    default:
      licenseLink = '';
      break;
  }

  return licenseLink;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenses) {

  let licenseLinks = renderLicenseLink(licenses); 
  
  console.log(`Inside the License Section creator,:    ${licenseLinks}`);

  return `## License <br>\n ${licenseLinks} <br><br>`;
    
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(title, description, installationInstruc,usageInfo,contributionGuide, testInstruc, license, username, email) {

  console.log(title, description, installationInstruc,usageInfo,contributionGuide, testInstruc, license, username, email)

  let licenses = license;
  let licenseBadge = renderLicenseBadge(licenses);
  let licenseSec = renderLicenseSection(licenses)
 

  console.log(licenses); 
  console.log(`INside generate licenseBadge :>> ${licenseBadge}`);
  console.log(`INside generate licenseSec :>> ${licenseSec}`);
 

  return `# ${title} <br><br>
  ${licenseBadge} <br><br><br>
  ## Description <br>
  ${description} <br><br>
  ## Table of Contents <br>
  [Installation](#Installation) <br>
  [Usage](#Usage) <br>
  [Contributing](#Contributing) <br>
  [License](#License) <br>
  [Tests](#Tests) <br>
  [Questions](#Questions) <br><br>
  ## Installation <br>
  ${installationInstruc} <br><br>
  ## Usage <br>
  ${usageInfo} <br><br>
  ## Contributing <br>
  ${contributionGuide} <br><br>
  ${licenseSec}
  ## Tests <br>
  ${testInstruc} <br><br>
  ## Questions <br>
  Github profile link: https://git.bootcampcontent.com/${username} <br>
  For further inquiries, please reach out to me at ${email}.
`;
}

export default generateMarkdown;
