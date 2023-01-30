const inquirer = require("inquirer");
const fs = require("fs");
const buildTeam = require("./src/htmlgenerator.js");
const path = require("path")


const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");



// an array for answered questions
const newEmployeeData = [];

//array of objects asked to user in ccli
const questions = async () => {
  const answers = await inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your ID number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email",
      },
      {
        type: "list",
        message: "What is your role?",
        name: "role",
        choices: ["Intern", "Engineer", "Manager"],
      },

    ])
    console.log (answers)
  //if engineer is selected

  if (answers.role === "Engineer") {
    const EngineerData = await inquirer
      .prompt([
        {
          type: "input",
          message: "What is your github user name?",
          name: "github",
        }
      ])
    const newEngineer = new Engineer(
      
      answers.name,
      answers.id,
      answers.email,
      EngineerData.github
      
    );
    console.log(newEngineer)
    newEmployeeData.push(newEngineer);

    
    // if manager is selected
  } else if (answers.role === "Manager") {
    const managerData = await inquirer.prompt([

      {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber",
      }

    ])
    const newManager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      managerData.officeNumber

    );
    newEmployeeData.push(newManager);

    //if intern is selected
  } else if (answers.role === "Intern") {
    const internData = await inquirer.prompt([

      {
        type: "input",
        message: "What school did you attend?",
        name: "school",
      },
    ])
    const newIntern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      internData.school

    );
    newEmployeeData.push(newIntern);
  }

}
///end of question function

async function promptQuestions() {
  await questions()

  const addEmployeeData = await inquirer.prompt([

    {
      name: "addEmployee",
      type: "list",
      message: "What would you like to do next?",
      choices: ['Add new employee', "Create team"]
    }
  ])
  //to add another member
  if (addEmployeeData.addEmployee === "Add new employee") {
    return promptQuestions()
  } else {
    createNewTeam()
  }

  // return createNewTeam();
}

promptQuestions();

function createNewTeam() {
  fs.writeFileSync(path.resolve(__dirname,"output","index.html"),
    buildTeam(newEmployeeData),
    "utf-8"
  )

}





