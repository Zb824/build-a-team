const Engineer = require("../lib/engineer")

test("test engineer values", () => {

  const engineer = new Engineer("bob", "2", "bob@email.com", "bobgithub")

  expect(engineer.getName()).toBe("bob")

  expect(engineer.getId()).toBe("2")

  expect(engineer.getEmail()).toBe("bob@email.com")

  expect(engineer.getGithub()).toBe("bobgithub")
  
  expect(engineer.getRole()).toBe("Engineer")

})