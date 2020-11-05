const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your the name of your project?"
      },{
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
      },{
        type: "input",
        name: "description",
        message: "Please give a short description of your project"
      },{
        type: "input",
        name: "test",
        message: " what command needs to be run for tests ?",
        default: "npm test"
      },{
        type: "input",
        name: "usage",
        message: "What usage information do you need to know?"
      },{
        type: "input",
        name: "installation",
        message: "What needs to be installed?",
        default:"npm i"
      },{
        
            type: "input",
            name: "table of contents",
            message: "what's your table of contents?",
            
          },
];

// function to write README file
function writeToFile(fileName, data) {
    return false.writeFileSync(path.join(process.cwd(),fileName),data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses)=>{
        console.log("generate readme...");
        writeToFile("readme.md", generateMarkdown({...inquirerResponses}));
    })

}

// function call to initialize program
init();
