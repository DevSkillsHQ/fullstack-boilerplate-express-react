const API_URL = "http://localhost:4000"

describe("Backend Test Spec", () => {
  it("should get the transactions list", () => {
    cy.request({
      failOnStatusCode: false,
      method: "GET",
      url: `${API_URL}/transactions`,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("should return a list of accounts", () => {
    const account_id = 'd841aa5e-ae7b-4b07-9276-b762c62a7d99'
    cy.request({
      failOnStatusCode: false,
      method: "GET",
      url: `${API_URL}/accounts/${account_id}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("should create a new transaction", () => {
    const transactionData = {
      account_id: "d841aa5e-ae7b-4b07-9276-b762c62a7d99",
      amount: "100",
    };

    cy.request({
      method: "POST",
      url: `${API_URL}/transactions`,
      body: transactionData,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('transaction_id')
      expect(response.body.amount).to.eq('100')
      expect(response.headers['content-type']).to.include('application/json')
      expect(response.headers['access-control-allow-origin']).to.eq('*')
    });
  });
});