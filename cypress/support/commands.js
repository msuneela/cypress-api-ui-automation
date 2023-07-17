import "cypress-ntlm-auth/dist/commands";

Cypress.Commands.add('paymentRequest', (url,clienId,clientsecret,amount,iban) => {
    const options = {
        method: 'POST',
        url: url,
        failOnStatusCode: false,
      
        headers: {
           'Client-Id': clienId,
          'Client-Secret': clientsecret,
          'Content-Type': 'application/json',
          'Request-Id': Cypress.env('REQUESTID'),
          'Redirect-URL': Cypress.env('REDIRECTURL'),
          'Webhook-URL': Cypress.env('WEBHOOKURL')
        },
        body: {
          "amount": amount,
          "currencyCode": "EUR",
          "description": "test",
          "bankPaymentMethod": {
              "creditorName": "Padėk gatvės vaikams",
              "endToEndId": "1234567890",
              "informationStructured": {
                  "reference": "test"
              },
              "creditorAccount": {
                  "iban": iban
              }
          }    
       }
    }
 cy.request(options); 
});