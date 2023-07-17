class PaymentPage{
    readonly termsNconditionsErrorText = "You have to agree to the terms and conditions and privacy policy"
    readonly emailErrorText = "Please enter email"
    readonly amountErrorText = "Please enter amount"

    get amountInput(){
        return cy.get('[data-testid="amount-input"]', { timeout: 5000 });
    }
    get emailInput() {
        return cy.get('[data-testid="email-input"]', { timeout: 5000 });
    }
    get chooseBank() {
        return cy.get('[for=":ra:"] > ._image_1vcce_39', { timeout: 5000 })
    }
    get checkbox() {
        return cy.get('[data-testid="checkmark-icon"]', { timeout: 5000 });
    }

    get payButton() {
        return cy.get('button._primary_fw6s8_13', { timeout: 5000 });
    }

    get termsNconditionsError() {
        return cy.get('[id=":rh:"]', { timeout: 5000 });
    }
    get emailError() {
        return cy.get('[id=":r9:"]', { timeout: 5000 })
    }
    get amountError() {
        return cy.get('[id=":r6:"]', { timeout: 5000 })
    }
    get bankLogin() {
        return cy.get('[alt="Swedbank"]', { timeout: 5000 });
    }
    get acceptCookie() {
        return cy.get('._row_1i6tc_27 > ._wrapper_fw6s8_1');
    }

}
export default new PaymentPage();