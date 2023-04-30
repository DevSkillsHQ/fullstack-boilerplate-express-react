describe("Frontend Test Spec", () => {
  it("should visit index", () => {
    cy.visit("http://localhost:3000/");
  });

  it("should display the component with correct props", () => {
    it("renders the component without errors", () => {
      cy.get("h4").should("have.text", "Transaction History");
      cy.get("ul").should("exist");
    });

    it("displays the list of transactions correctly", () => {
      cy.intercept("/transactions", { fixture: "transactions.json" });
      cy.get("li").should("have.length", 2);
      cy.get("li:first-child").should(
        "have.text",
        "64c61cb8-0ffe-4f6d-ac30-4ea615fe07d9 5"
      );
    });

    it("Doesn't have a account Id", () => {
      cy.get('input[name="from_account_id"]').clear();
      cy.get('input[name="to_account_id"]').clear();
      cy.get(".details > p").should("contain", "You need a account Id!!!");
    });

    it("Has a account Id", () => {
      cy.get('input[name="from_account_id"]')
        .clear()
        .type("64c61cb8-0ffe-4f6d-ac30-4ea615fe07d9");
        cy.get('input[name="to_account_id"]')
        .clear()
        .type("d841aa5e-ae7b-4b07-9276-b762c62a7d99");
      cy.get(".details").should(
        "contain",
        "64c61cb8-0ffe-4f6d-ac30-4ea615fe07d9"
      );
      cy.get("button").should("be.enabled");
    });
  });
});
