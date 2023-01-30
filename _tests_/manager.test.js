
const Manager = require("../lib/manager")

test ("test manager values" ,()=>{
  const manager = new Manager("mary", "4", "mary@email.com", "55")
  expect(manager.getId()).toBe("4")
  expect(manager.getName()).toBe("mary")
  expect(manager.getEmail()).toBe("mary@email.com")
  expect(manager.getRole()).toBe("Manager")
  expect(manager.getOfficNumber()).toBe("55")
})