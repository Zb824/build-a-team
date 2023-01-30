const Employee = require ("./employee")

class Manager extends Employee {
  constructor (name, id, email, officeNumber){
    super(name,id,email)
    this.officeNumber = officeNumber;
  }
    getRole(){
      return 'Manager'
    }
    getOfficNumber(){
      return this.officeNumber
    }
    getRole(){
      return "Manager"
    }
}


module.exports = Manager;

