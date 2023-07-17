
describe('Demo Payment:API valid test data', () => {
  it('Should see correct bank status and ID as parameter ', () => {
    cy.paymentRequest(Cypress.env('APIURL'), Cypress.env('CLIENTID'), Cypress.env('CLIENTSECRET'), 0.01, Cypress.env('IBAN')).then((response) => {
      console.log(response);
      expect(response.status).to.eq(200);
      expect(response.body).has.property('bankStatus', 'STRD');
      expect(response.body).has.property('id');
    });
  })
  it('Should see correct status group ', () => {
    cy.paymentRequest(Cypress.env('APIURL'), Cypress.env('CLIENTID'), Cypress.env('CLIENTSECRET'), 0.01, Cypress.env('IBAN')).then((response) => {
      expect(response.body).has.property('statusGroup', 'started');
    });
  })
});

describe('Demo Payment:API Error scenarior', () => {
  it('Should see 400 error status, errorcode, inavalide payment error when amount is 0 ', () => {
    cy.paymentRequest(Cypress.env('APIURL'), Cypress.env('CLIENTID'), Cypress.env('CLIENTSECRET'), 0.00, Cypress.env('IBAN')).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.error.code).to.eq(10021);
      expect(response.body.error.description).to.eq('Invalid payment data.');
    });

  })

  it('Should see 401 unauthorised  status when Invalid Client ID ', () => {
    cy.paymentRequest(Cypress.env('APIURL'), 'sfgshfgsj', Cypress.env('CLIENTSECRET'), 0.00, Cypress.env('IBAN')).then((response) => {
      expect(response.status).to.eq(401);
    });

  })
  it('Should see 400 error status, errorcode, inavalide payment error when Invalid IBAN is provided ', () => {
    cy.paymentRequest(Cypress.env('APIURL'), Cypress.env('CLIENTID'), Cypress.env('CLIENTSECRET'), 0.00, 'dsafsafs').then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.error.code).to.eq(90010);
      expect(response.body.error.description).to.eq('Creditor iban is not allowed.');
    });

  })
  it('Should see 400 error status, errorcode, inavalide payment error when Invalid IBAN is provided ', () => {
    cy.paymentRequest(Cypress.env('APIURL'), Cypress.env('CLIENTID'), Cypress.env('CLIENTSECRET'), 0.00, 'dsafsafs').then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.error.code).to.eq(90010);
      expect(response.body.error.description).to.eq('Creditor iban is not allowed.');
    });

  })
});
