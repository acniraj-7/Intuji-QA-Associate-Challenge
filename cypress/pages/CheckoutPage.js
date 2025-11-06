

class CheckoutPage {

  goToCart() {
    cy.get('#cartModal', { timeout: 10000 }).should('be.visible')
    cy.get('#cartModal a[href="/view_cart"]').first().click({ force: true })
    cy.url().should('include', 'view_cart')
    cy.get('.cart_info', { timeout: 10000 }).should('be.visible')
  }

  proceedToCheckout() {
    cy.contains('Proceed To Checkout').first().scrollIntoView().click({ force: true })
    cy.url().should('include', '/checkout')
  }

  placeOrder() {
    // Click the 'Place Order' button to go to payment section
    cy.contains('Place Order').first().scrollIntoView().click({ force: true })
  }

  enterPaymentDetails(card) {
    // Payment section input fields
    cy.get('input[name="name_on_card"]').clear().type(card.name)
    cy.get('input[name="card_number"]').clear().type(card.number)
    cy.get('input[name="cvc"]').clear().type(card.cvc)
    cy.get('input[name="expiry_month"]').clear().type(card.expiryMonth)
    cy.get('input[name="expiry_year"]').clear().type(card.expiryYear)
  }

  confirmOrder() {
    cy.contains('Pay and Confirm Order').first().click({ force: true })
  }

  verifyOrderConfirmation() {
    cy.contains('Order Placed!').should('be.visible')
  }
}

export default CheckoutPage
