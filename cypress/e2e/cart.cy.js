
// cypress/e2e/cart.cy.js

import CartPage from '../pages/CartPage'
import LoginPage from '../pages/LoginPage'

describe('Cart and Checkout Flow', () => {
  const cartPage = new CartPage()
  const loginPage = new LoginPage()

  it('Logs in, adds products, updates quantity, verifies total, and removes a product', () => {
    // Ignore uncaught JS errors from external scripts
    Cypress.on('uncaught:exception', (err) => {
      console.log('Ignored uncaught error:', err.message)
      return false
    })

    // Step 1: Login
    loginPage.visit()
    loginPage.enterEmail('Alec.Denesik@yahoo.com')      
    loginPage.enterPassword('ncqrvzgAsFuBveh')           
    loginPage.clickLoginButton()
    loginPage.verifyUserLoggedIn('Myrl')    

    // Step 2: Visit Products Page
    cartPage.visitProducts()

    // Step 3: Add multiple products
    cartPage.addProductByCategory('Women', 'Dress', 'Sleeveless Dress') // Price 1000
    cartPage.addProductByCategory('Men', 'Tshirts', 'Men Tshirt')       // Price 400

    // Step 4: Increase quantity of 'Sleeveless Dress' to 3
    cartPage.updateQuantity('Sleeveless Dress', 3)

    // Step 5: Go to Cart
    cartPage.goToCart()

    // Step 6: Proceed to Checkout
    cartPage.proceedToCheckout()

    // Step 7: Verify total on checkout page (1000*3 + 400 = 3400)
    cartPage.verifyCartTotal()

    // Step 8: Go back to Cart to remove a product
    cy.visit('/view_cart')
    cartPage.removeProduct('Men Tshirt')

    // Step 9: Verify cart updates after removal
    cy.get('.cart_info tbody tr').should('have.length.at.least', 1)

    // Optional: Verify total after removal
    cartPage.verifyCartTotal()
  })
})
