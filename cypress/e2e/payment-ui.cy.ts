
import paymentPage from "../page-objects/payment.page";

describe('Home: Demo Payment page: Valid Scenarios', () => {

    it('Shold able to navigate payment page', () => {
        cy.visit(Cypress.env('BANKURL'));
        paymentPage.amountInput.should('be.visible');
    })

    it('should able to fill Amount and Email', () => {
        paymentPage.amountInput.type('0.01');
        paymentPage.emailInput.type(Cypress.env('EMAIL'));
        paymentPage.chooseBank.trigger('mouseover').click({ force: true });
    })

    it('should able to click terms and conditions checkbox and pay Button', () => {
        paymentPage.checkbox.click();
        paymentPage.payButton.click();
        cy.url().should('include', 'redirectPreferred=true');
    })
})

describe('Demo Payment: Error validations', () => {
    before(() => {
        cy.visit(Cypress.env('BANKURL'));
    });
    it('should able to see Errot for Email, Amount and TermsandConditions', () => {
        paymentPage.chooseBank.trigger('mouseover').click({ force: true });
        paymentPage.payButton.click();
        paymentPage.emailError.should('have.text', paymentPage.emailErrorText);
        paymentPage.emailError.should('have.css', 'color', 'rgb(255, 59, 48)');
        paymentPage.amountError.should('have.text', paymentPage.amountErrorText);
        paymentPage.amountError.should('have.css', 'color', 'rgb(255, 59, 48)');
        paymentPage.termsNconditionsError
            .should('have.text', paymentPage.termsNconditionsErrorText);
        paymentPage.termsNconditionsError.should('have.css', 'color', 'rgb(255, 59, 48)');
    })

    it('should able to fill Amount and Email', () => {
        paymentPage.amountInput.type('0.01');
        paymentPage.emailInput.type(Cypress.env('EMAIL'));
    })

    it('should able to see Error when terms and conditions not checked', () => {
        paymentPage.payButton.click();
        paymentPage.termsNconditionsError
            .should('have.text', paymentPage.termsNconditionsErrorText);
        paymentPage.termsNconditionsError.should('have.css', 'color', 'rgb(255, 59, 48)');
    })
})