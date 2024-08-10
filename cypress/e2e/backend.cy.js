const apiUrl = `${Cypress.env("apiUrl")}`

describe('Backend Test Spec', () => {
  it('should call ping', () => {
    cy.request({
      failOnStatusCode: false,
      method: 'GET',
      url: `${apiUrl}/ping`,
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})