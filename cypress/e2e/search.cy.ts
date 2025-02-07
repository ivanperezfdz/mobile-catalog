describe('Search Functionality', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should search for products', () => {
    cy.get('[data-testid="search-input"]').type('iphone');
    cy.get('[data-testid="product-card"]')
      .should('exist')
      .and('have.length.gt', 0);
  });

  it('should show no results message', () => {
    cy.get('[data-testid="search-input"]').type('nonexistentproduct123');

    cy.get('[data-testid="product-grid"]').should('not.exist');
  });
});
