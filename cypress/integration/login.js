describe('telekom bsp - login', () => {

  it('login', () => {

    cy.clearCookies();
    cy.visit('https://bsp.t-mobile.de/portal/');
    cy.get('#consentAcceptAll').click();

    cy.get('#login').find('input[type=text]').type(Cypress.env('USERNAME'));
    cy.get('#login').find('input[type=password]').type(Cypress.env('PASSWORD'));
    cy.get('#login').find('form').submit();

    cy.url().should('contain','/portal/bsp/UserMgtModule/account');
  });

})
