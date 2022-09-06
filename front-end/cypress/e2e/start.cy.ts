/// <reference types="cypress" />

describe("Home page", () => {
  it("loads home page", () => {
    cy.visit("/");
  });
  it("loads contact page", () => {
    cy.contains("Kontakt").click();
  });
  it("loads booking page", () => {
    cy.contains("Boka bord").click();
  });
  it("loads admin page", () => {
    cy.contains("här").click();
  });
});
