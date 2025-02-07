describe('Shopping Cart', () => {
  let firstProductId: string;

  beforeEach(() => {
    cy.visit('/');
    cy.wait(2000);
    cy.get('[data-testid="product-card"]')
      .first()
      .invoke('attr', 'data-product-id')
      .then((id) => {
        firstProductId = id as string;
      });
  });

  it('should add product to cart and navigate to cart page', () => {
    cy.get('[data-testid="product-card"]').first().click();
    cy.wait(2000);
    cy.get('[data-testid*="color-option"]').first().click();
    cy.get('[data-testid*="storage-option"]').first().click();

    cy.get('[data-testid="add-to-cart-button"]').click();
    cy.url().should('include', '/cart');
    cy.get('[data-testid*="cart-item"]').should('have.length', 1);
  });

  it('should remove product from cart', () => {
    cy.visit(`/products/${firstProductId}`);
    cy.wait(2000);
    cy.get('[data-testid*="color-option"]').first().click();
    cy.get('[data-testid*="storage-option"]').first().click();
    cy.get('[data-testid="add-to-cart-button"]').click();
    cy.get('[data-testid="remove-item-button"]').click();
    cy.get('[data-testid*="cart-item"]').should('not.exist');
  });

  it('should handle non-existent product gracefully', () => {
    cy.visit('/products/999999');
    cy.get('[data-testid="error-message"]').should('be.visible');
  });
});
