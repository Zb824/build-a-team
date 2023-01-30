
const Intern = require("../lib/intern")

test ("test intern values" ,()=>{
  const intern = new Intern("bill", "3", "bill@email.com", "ndsu")
  expect(intern.getId()).toBe("3")
  expect(intern.getName()).toBe("bill")
  expect(intern.getEmail()).toBe("bill@email.com")
  expect(intern.getRole()).toBe("Intern")
  expect(intern.getSchool()).toBe("ndsu")
})