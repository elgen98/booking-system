/// <reference types="cypress" />

describe("Add new booking", () => {
  it("should add a new user", () => {
    cy.visit("/admin");

    // A booking must exist for test to work
    let countBefore = 0;
    cy.get("#book-cont")
      .children()
      .then(($elements) => {
        countBefore = $elements.length;
        cy.log("Before", countBefore);
      });

    // if (cy.get("#book-cont").children().should("not.exist")) {
    //   cy.log("s");
    // } else {
    //   cy.get("#book-cont")
    //     .children()
    //     .then(($elements) => {
    //       countBefore = $elements.length;
    //       cy.log("Before", countBefore);
    //     });
    // }

    // load booking page
    cy.visit("/booking");

    // Specifies date and guest amount
    cy.get("#date").click().type("2022-09-09");
    cy.get("#guestAmount").select("6");
    cy.contains("Gå vidare").click();

    // Clicks time
    const firstTime = cy.contains("1800");

    if (firstTime) {
      cy.get("button").contains("1800").click();
    } else {
      cy.get("button").contains("2100").click();
    }

    // cy.contains("1800").click();
    cy.contains("Gå vidare").click();

    // Fills form
    cy.get("input[name='name']").type("Bsob");
    cy.get("input[name='email']").type("bsob@yahoo.com");
    cy.get("input[name='telephone']").type("1234567891");
    cy.contains("Skapa Bokning").click();

    // Checks if user exist
    cy.contains("här").click();

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
  });
});
