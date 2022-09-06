/// <reference types="cypress" />

describe("Add new booking", () => {
  it("loads Booking page", () => {
    cy.visit("/booking");
  });
  it("Specifies a date and guest amount", () => {
    cy.get("#date").click().type("2022-09-09");
    cy.get("#guestAmount").select("6");
    cy.contains("Gå vidare").click();
  });
  it("clicks on 1800", () => {
    cy.contains("1800").click();
    cy.contains("Gå vidare").click();
  });
  it("fills the form", () => {
    cy.get("input[name='name']").type("Bob");
    cy.get("input[name='email']").type("bob@yahoo.com");
    cy.get("input[name='telephone']").type("1234567891");
    cy.contains("Skapa Bokning").click();
  });
  it("checks if user exist", () => {
    cy.contains("här").click();
    cy.get("#book-cont div").last();
  });

  // cy.title().its('length').should('eq', 24)
});
