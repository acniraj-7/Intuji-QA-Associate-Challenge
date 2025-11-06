
import CartPage from '../pages/CartPage';

describe('Cart and Quantity Management', () => {
  const cartPage = new CartPage();

  it('Adds multiple products, re-adds one to increase quantity, verifies total, and removes a product', () => {
    // Ignore uncaught JS errors from external scripts
    Cypress.on('uncaught:exception', (err) => {
      console.log('Ignored uncaught error:', err.message);
      return false;
    });

    // Step 1: Visit Products Page
    cartPage.visitProducts();

    // Step 2: Add initial products
    cartPage.addProductByCategory('Women', 'Dress', 'Sleeveless Dress'); // Price 1000
    cartPage.addProductByCategory('Men', 'Tshirts', 'Men Tshirt');       // Price 400

    // Step 3: Go to cart
    cartPage.goToCart();

    // Step 4: Re-add 'Sleeveless Dress' to increase quantity
    cartPage.visitProducts();
    cartPage.addProductByCategory('Women', 'Dress', 'Sleeveless Dress'); // Now qty = 2

    // Step 5: Go back to cart
    cartPage.goToCart();

    // Step 6: Verify total (1000*2 + 400 = 2400)
    cartPage.verifyCartTotal();

    // Step 7: Remove one product and verify cart updates
    cartPage.removeProduct('Men Tshirt');
    cy.get('.cart_info tbody tr').should('have.length.at.least', 1);
  });
});
