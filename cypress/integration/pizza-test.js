describe("Pizza App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza")
  })

  const firstInput = () => cy.get("input[name=firstName]");
  const lastInput = () => cy.get("input[name=lastName]");
  const specialInput = () => cy.get("input[name=special]");
  const checkBoxes = () => cy.get('[type = "checkbox"]')
  const submitButton = () => cy.get(".orderButton")
  it("Can add text to inputs", () => {
    firstInput()
    .should("have.value", "")
    .type("Austin")
    .should("have.value", "Austin")

    lastInput()
    .should("have.value", "")
    .type("Carrill")
    .should("have.value", "Carrill")

    specialInput()
    .should("have.value", "")
    .type("Special")
    .should("have.value", "Special")
  })

  it("Can select checkbox", () => {
    checkBoxes()
    .check()
  })

  it("Submit button submits", () => {
    submitButton()
    .should("be.enabled")
  })
})