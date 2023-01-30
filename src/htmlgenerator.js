function createManagerCard(manager){
  return `
  <h2>${manager.name} </h2>
  `
}
function createEngineerCard(engineer){
  return `
  <h2>${engineer.name} </h2>
  `
}
function createInternCard(intern){
  return `
  <h2>${intern.name} </h2>
  `
}

function createCards(team){
  const cardArray = []
  cardArray.push(team.filter(employee => employee.getRole()=== "Manager").map(manager => createManagerCard(manager)).join(""))
  cardArray.push(team.filter(employee => employee.getRole()=== "Engineer").map(engineer => createEngineerCard(engineer)).join(""))
  cardArray.push(team.filter(employee => employee.getRole()=== "Intern").map(intern => createInternCard(intern)).join(""))

  return cardArray.join("")

}

module.exports = function(team){
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Team</title>
</head>
<body>
     <div class ="container-fluid">
        <div class = "row">
            <div class ="col-12">
${createCards(team)}
            </div>
        </div>
    </div> 
  
</body>
</html>
  
  `
}