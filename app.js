const Badge = require("./src/badge");
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
let teamMembersArray = [];
function createManager(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is your team managers name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your team managers email?",
            name: "email"
        },
        {
            type: "number",
            message: "What is your managers office number?",
            name: "officeNumber"
        }
    ])
    .then(function(data) {
        const name = data.name;
        const email = data.email;
        const officeNumber = data.officeNumber;
        const id = 1;
        const teamMember = new Manager(name, id, email, officeNumber);
        teamMembersArray.push(teamMember);
        addTeamMember();
    })
}
function addTeamMember(){
    inquirer.prompt([
        {
            type: "list",
            message: "Do you want to add a team member?",
            choices: ["Yes", "No, I'm done."],
            name: "addMember"
        }
    ])
    .then(function(data){
        switch(data.addMember){
            case "Yes":
                createTeamMember();
                break;
            case "No, I'm done.":
                compileTeam();
                break;
        }
    })
}
function createTeamMember(){
    inquirer.prompt([
        {
            type: "list",
            message: "Is this employee an intern or engineer?",
            choices: ["Intern", "Engineer"],
            name: "jobTitle"
        }
    ])
    .then(function(data){
        switch(data.jobTitle){
            case "Intern":
                addIntern();
                break;
            case "Engineer":
                addEngineer();
                break;
        }
    })
}
function addIntern(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the Intern's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "Where does the Intern go to school?",
            name: "school"
        }
    ])
    .then(function(data){
        const name = data.name;
        const email = data.email;
        const school = data.school;
        const id = teamMembersArray.length + 1;
        const teamMember = new Intern(name, id, email, school);
        teamMembersArray.push(teamMember);
        addTeamMember();
    })
}
function addEngineer(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the Engineer's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the Engineer's GitHub username?",
            name: "github"
        }
    ])
    .then(function(data){
        const name = data.name;
        const email = data.email;
        const github = data.github;
        const id = teamMembersArray.length + 1;
        const teamMember = new Engineer(name, id, email, github);
        teamMembersArray.push(teamMember);
        addTeamMember();
    })
 }

 function compileTeam(){
     let badges = [];
     let badge;
     teamMembersArray.forEach(teamMember => {
         badge = new Badge(teamMember);
         badges.push(badge.template);
     });

     const template = `
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Team Generator</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    </head>
    <body>
         <section class="navbar navbar-dark bg-dark mb-5">
             <h1 class="navbar-brand">My Team</h1>
         </section>
  
         <section class="container team-list col-12">` + badges + `</section>
     </body>
 </html>`;

    fs.writeFileSync(`./dist/generatedHtml.html`, template, function(error){
        if (error){
            console.log(error);
        }
    });
}
createManager();
