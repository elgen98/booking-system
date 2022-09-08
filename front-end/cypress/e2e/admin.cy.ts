/// <reference types="cypress" />

describe("Add new booking", () => {
  it("", () => {
    cy.visit("/admin");

    let countBefore = 0;
    cy.get("#book-cont")
      .children()
      .then(($elements) => {
        countBefore = $elements.length;
        cy.log("Before", countBefore);
      });

    // Add booking
    cy.contains("Add booking").click();

    cy.get("input[name='name']").type("dave");
    cy.get("input[name='email']").type("dave@yahoo.se");
    cy.get("input[name='telephone_number']").type("1234567891");
    cy.get("input[name='guest_amount']").type("6");
    cy.get("input[name='time']").type("21");
    cy.get("input[name='date']").click().type("2022-09-10");

    cy.contains("Submit").click().click();

    // Add another booking for editing purposes
    cy.contains("Add booking").click();

    cy.get("input[name='name']").type("dave");
    cy.get("input[name='email']").type("dave@yahoo.se");
    cy.get("input[name='telephone_number']").type("123-456-78-91");
    cy.get("input[name='guest_amount']").type("6");
    cy.get("input[name='time']").type("21");
    cy.get("input[name='date']").click().type("2022-09-10");

    cy.contains("Submit").click().click();

    // Remove booking
    // cy.contains("Remove").click();

    cy.contains("Remove").each(($btn, index) => {
      if (index >= 1) cy.wrap($btn).click();
    });

    let countAfter = 0;
    cy.get("#book-cont")
      .children()
      .then(($elements) => {
        countAfter = $elements.length;

        if (countAfter > countBefore) {
          cy.log(`${countAfter} is more than ${countBefore}`);
          cy.log("A new booking has been added");
        } else {
          cy.log(`${countAfter} is less than or equal to ${countBefore}`);
          cy.log("Something went wrong");
        }
      });

    // Edit booking
    cy.contains("Edit").click();

    cy.get("input[name='name']").clear();
    cy.get("input[name='name']").type("edit");

    cy.get("input[name='email']").clear();
    cy.get("input[name='email']").type("edit@yahoo.se");
    cy.contains("Spara").first().click().click();
  });
});
