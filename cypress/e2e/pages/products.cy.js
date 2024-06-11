describe('Product page', () => {
  beforeEach(() => {
    cy.visit('/en/US');
  });

  it('testing all products are displayed', () => {
    // @fixme Replace this with actual implementation, and add more
    cy.visit('/en/US/product');
    cy.get('span').should('contain', 'Menthol Blu PLUS+ Tank™');
  });

  it('Checks whether the user avatar is displayed', () => {
    cy.visit('/en/US/product');
    cy.get('img[alt="avatar"]').should('be.visible');
  });

  it('Check whether the menu hides.', () => {
    cy.visit('/en/US/product');
    cy.scrollTo('bottom');
    cy.get('div').should('not.have.css', 'top', '0px');
    cy.scrollTo('top');
    cy.get('div').should('have.css', 'top', 'auto');
  });
});
