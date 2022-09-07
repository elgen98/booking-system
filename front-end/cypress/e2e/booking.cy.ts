/// <reference types="cypress" />

describe("Add new booking", () => {
  it("should add a new user", () => {
    cy.visit("/admin");
    cy.get("#book-cont").children().as("before");

    // load booking page
    cy.visit("booking");

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
    cy.get("#book-cont").children().as("after");
    // if ("@after" > "@before") {
    //   cy.log("This", "@after");
    //   cy.log("That", "@before");
    // } else {
    //   cy.log("This", "@after");
    //   cy.log("That", "@after");
    // }
  });
});
