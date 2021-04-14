describe('telekom bsp - login', () => {

  it('login', () => {

    cy.clearCookies();
    cy.visit('https://bsp.t-mobile.de/portal/');
    cy.get('#consentAcceptAll').click();

    cy.fixture('login').then(data => {
      cy.get('#login').find('input[type=text]').type(data.username);
      cy.get('#login').find('input[type=password]').type(data.password);
      cy.get('#login').find('form').submit();

      cy.url().should('contain','/portal/bsp/UserMgtModule/account');
    });
  });

})
