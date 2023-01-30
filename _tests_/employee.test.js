const Employee = require("../lib/employee")

test ("test employee values" ,()=>{

  const employee = new Employee("zach", "1", "zach@email.com")

  expect(employee.getName()).toBe("zach")
  expect(employee.getId()).toBe("1")
  expect(employee.getEmail()).toBe("zach@email.com")
  expect(employee.getRole()).toBe("Employee")



});
