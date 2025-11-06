
import CheckoutPage from '../pages/CheckoutPage'

describe('Full Checkout Flow with Logout and Re-login', () => {
  const checkoutPage = new CheckoutPage()

  const user = {
    name: 'Myrl',
    email: 'Alec.Denesik@yahoo.com',
    password: 'ncqrvzgAsFuBveh'
  }

  it('should login, add product, checkout, logout, and re-login', () => {
    // Step 1: Visit login page and log in
    cy.visit('https://automationexercise.com/login')
    cy.get('input[data-qa="login-email"]').type(user.email)
    cy.get('input[data-qa="login-password"]').type(user.password)
    cy.get('button[data-qa="login-button"]').click()

    // Verify login success
    cy.contains(user.name).should('be.visible')

    // Step 2: Scroll to products section and add first product
    cy.get('.features_items', { timeout: 15000 }).scrollIntoView()
    cy.get('.features_items .product-image-wrapper')
      .first()
      .scrollIntoView()
      .trigger('mouseover')
      .find('a.btn.btn-default.add-to-cart')
      .first()
      .click({ force: true })

    // Step 3: Handle modal popup and go to cart
    checkoutPage.goToCart()

    // Step 4: Proceed to checkout
    checkoutPage.proceedToCheckout()

    // Step 5: Click Place Order to go to payment section
    checkoutPage.placeOrder()

    // Step 6: Enter fake payment details
    checkoutPage.enterPaymentDetails({
      name: 'Myrl Test',
      number: '4111111111111111',
      cvc: '123',
      expiryMonth: '12',
      expiryYear: '2030'
    })

    // Step 7: Confirm order
    checkoutPage.confirmOrder()

    // Step 8: Verify order confirmation
    checkoutPage.verifyOrderConfirmation()

    // Step 9: Log out
    cy.get('a[href="/logout"]').click()

    // Verify logout
    cy.get('button[data-qa="login-button"]').should('be.visible')

    // Step 10: Log back in
    cy.get('input[data-qa="login-email"]').type(user.email)
    cy.get('input[data-qa="login-password"]').type(user.password)
    cy.get('button[data-qa="login-button"]').click()

    // Step 11: Verify user state is preserved
    cy.contains(user.name).should('be.visible')
    cy.url().should('not.include', '/login')
  })
})
