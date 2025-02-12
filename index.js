// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
import fs from 'fs';



// TODO: Create an array of questions for user input
const questions = [
    "What is your project title?", 
    "What is the description of your project?", 
    "What are the installation instructions?",
    "What is the usage information?", 
    "What are the contribution guidelines?",
    "What are the test instructions?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    


    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Commit logged!')
      );

    //   fs.appendFile('README.md', `${generateMarkdown(data)}\n`, (err) =>
    //     err ? console.error(err) : console.log('Commit logged!')
    //   );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'title',
    },
    {
        type: 'input',
        message: questions[1],
        name: 'description',
      },
      {
        type: 'input',
        message: questions[2],
        name: 'installationInstruc',
      },
      {
        type: 'input',
        message: questions[3],
        name: 'usageInfo',
      },
      {
        type: 'input',
        message: questions[4],
        name: 'contributionGuide',
      },
      {
        type: 'input',
        message: questions[5],
        name: 'testInstruc',
      },
      {
      type: 'list',
      message: 'Choose which license to add?',
      name: 'license',
      choices: ['Apache', 'BSD', 'Eclipse', 'GNU', 'IBM', 'Perl'],
    },
    {
        type: 'input',
        message: 'Enter your Gitlab username:',
        name: 'username',
      },
      {
        type: 'input',
        message: 'Enter your email address',
        name: 'email',
      },
  ])
  .then(({title, description, installationInstruc,usageInfo,contributionGuide, testInstruc, license, username, email}) => 

    writeToFile('README.md', generateMarkdown(title, description, installationInstruc,usageInfo,contributionGuide, testInstruc, license, username, email))

  )
}




// Function call to initialize app
init();


