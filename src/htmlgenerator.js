function createManagerCard(manager) {
  return `
  <div class="card employee" style="width: 30rem;">
  <div class="card-header">
    Manger
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Name: ${manager.getName()} </li>
    <li class="list-group-item">Id Number: ${manager.getId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
  </ul>
</div>




  `
}
function createEngineerCard(engineer) {
  return `

  <div class="card employee" style="width: 30rem;">
  <div class="card-header">
    Engineer
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Name: ${engineer.getName()} </li>
    <li class="list-group-item">Id Number: ${engineer.getId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
   <li class="list-group-item">Github: <a class="card-link" href="https://github.com/${engineer.getGithub()}"> ${engineer.getGithub()}</a></li>
  </ul>
</div>

  
  `
}
function createInternCard(intern) {
  return `
  <div class="card employee" style="width: 30rem;">
  <div class="card-header">
    Intern
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Name: ${intern.getName()} </li>
    <li class="list-group-item">Id Number: ${intern.getId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
    <li class="list-group-item">School: ${intern.getSchool()}</li>
  </ul>
</div>

  `
}

function createCards(team) {
  const cardArray = []
  cardArray.push(team.filter(employee => employee.getRole() === "Manager").map(manager => createManagerCard(manager)).join(""))
  cardArray.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => createEngineerCard(engineer)).join(""))
  cardArray.push(team.filter(employee => employee.getRole() === "Intern").map(intern => createInternCard(intern)).join(""))

  return cardArray.join("")

}

module.exports = function (team) {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="style.css">
  <article>
    <header>
      <h1 class ="text-center"> My Team </h1>
    </header>
  </article>
  <body>
   <div class ="container-fluid">
      <div class = "row">
      <div class="d-flex flex-wrap items">
  
  ${createCards(team)} 
  
    </div>
    </div>
    </div> 
  
  
  
  </body>
</html>
  
  `
}