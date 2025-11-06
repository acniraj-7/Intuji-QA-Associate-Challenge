// // cypress/e2e/checkout.cy.js
// import CartPage from '../pages/CartPage'

// describe('Checkout Flow with Fake Payment', () => {
//   const cartPage = new CartPage()

//   const user = {
//     name: 'Myrl',
//     email: 'Alec.Denesik@yahoo.com',
//     password: 'ncqrvzgAsFuBveh'
//   }

//   beforeEach(() => {
//     // Reuse login session
//     cy.session(user.email, () => {
//       cy.visit('/login')
//       cy.get('input[data-qa="login-email"]').type(user.email)
//       cy.get('input[data-qa="login-password"]').type(user.password)
//       cy.get('button[data-qa="login-button"]').click()
//       cy.contains(`Logged in as ${user.name}`, { timeout: 10000 }).should('be.visible')
//     })
//   })

//   it('should add products, checkout with fake payment, and confirm order', () => {
//     // Step 1: Add products to cart
//     cartPage.visitProducts()
//     cartPage.addProductByCategory('Men', 'Tshirts', 'Men Tshirt')
//     cartPage.addProductByCategory('Women', 'Dresses', 'Women Dress')

//     // Step 2: Go to cart
//     cartPage.goToCart()

//     // Step 3: Proceed to Checkout
//     cy.contains('Proceed To Checkout').scrollIntoView().click()

//     // Step 4: Fill address (or use saved)
//     cy.get('input[name="name"]').clear().type(user.name)
//     cy.get('input[name="address1"]').clear().type('123 Test Street')
//     cy.get('input[name="city"]').clear().type('Kathmandu')
//     cy.get('input[name="state"]').clear().type('Bagmati')
//     cy.get('input[name="zipcode"]').clear().type('44600')
//     cy.get('input[name="mobile_number"]').clear().type('9801234567')

//     // Step 5: Enter fake card details
//     cy.get('input[name="name_on_card"]').clear().type(user.name)
//     cy.get('input[name="card_number"]').clear().type('4111111111111111')
//     cy.get('input[name="cvc"]').clear().type('123')
//     cy.get('input[name="expiry_month"]').clear().type('12')
//     cy.get('input[name="expiry_year"]').clear().type('2025')

//     // Step 6: Confirm payment
//     cy.contains('Pay and Confirm Order').scrollIntoView().click()

//     // Step 7: Validate order confirmation
//     cy.contains('Your order has been placed successfully!', { timeout: 10000 })
//       .should('be.visible')
//   })
// })
// cypress/e2e/checkout.cy.js

// import LoginPage from '../pages/LoginPage'
// import CartPage from '../pages/CartPage'
// import CheckoutPage from '../pages/CheckoutPage'

// describe('Checkout Flow with Fake Payment', () => {
//   const loginPage = new LoginPage()
//   const cartPage = new CartPage()
//   const checkoutPage = new CheckoutPage()

//   const user = {
//     name: 'Myrl',
//     email: 'Alec.Denesik@yahoo.com',
//     password: 'ncqrvzgAsFuBveh'
//   }

//   // Prevent test failures due to stray JS errors on the page
//   Cypress.on('uncaught:exception', (err, runnable) => {
//     return false
//   })

//   beforeEach(() => {
//     // Reuse session to avoid logging in every time
//     cy.session(user.email, () => {
//       loginPage.visit()
//       loginPage.enterEmail(user.email)
//       loginPage.enterPassword(user.password)
//       loginPage.clickLoginButton()
//       loginPage.verifyUserLoggedIn(user.name)
//     })
//   })

//   it('should complete checkout with fake payment', () => {
//     // Step 1: Visit products and add items
//     cartPage.visitProducts()
//     cartPage.addProductByCategory('Men', 'Tshirts', 'Men Tshirt')
//     cartPage.addProductByCategory('Women', 'Dresses', 'Women Dress')

//     // Step 2: Go to cart
//     cartPage.goToCart()

//     // Step 3: Update quantity
//     cartPage.updateQuantity('Men Tshirt', 2)

//     // Step 4: Verify cart total
//     cartPage.verifyCartTotal()

//     // Step 5: Proceed to checkout
//     checkoutPage.visitCheckout()

//     // Step 6: Fill address (or auto-fill if already saved)
//     checkoutPage.fillAddress({
//       name: user.name,
//       email: user.email,
//       address: '123 Test Street',
//       city: 'Test City',
//       state: 'Test State',
//       zipcode: '12345',
//       mobile: '9800000000'
//     })

//     // Step 7: Enter fake payment details and confirm
//     checkoutPage.enterFakeCardDetails({
//       cardNumber: '4111111111111111',
//       cvc: '123',
//       expiryMonth: '12',
//       expiryYear: '25'
//     })
//     checkoutPage.confirmOrder()

//     // Step 8: Validate order confirmation
//     checkoutPage.verifyOrderConfirmation()
//   })
// })


/// <reference types="cypress" />

// cypress/e2e/checkout.cy.js

// import LoginPage from '../pages/LoginPage'
// import CartPage from '../pages/CartPage'
// import CheckoutPage from '../pages/CheckoutPage'

// describe('Checkout Flow with Fake Payment', () => {
//   const loginPage = new LoginPage()
//   const cartPage = new CartPage()
//   const checkoutPage = new CheckoutPage()

//   const user = {
//     name: 'Myrl',
//     email: 'Alec.Denesik@yahoo.com',
//     password: 'ncqrvzgAsFuBveh'
//   }

//   beforeEach(() => {
//     // Login and restore session
//     cy.session(user.email, () => {
//       loginPage.visit()
//       loginPage.enterEmail(user.email)
//       loginPage.enterPassword(user.password)
//       loginPage.clickLoginButton()
//       loginPage.verifyUserLoggedIn(user.name)
//     })
//   })

//   it('should login, add product to cart, and complete checkout', () => {
//     // Step 1: Visit products and add items
//     cartPage.visitProducts()
//     cartPage.addProductByCategory('Men', 'Tshirts', 'Men Tshirt')
//     cartPage.addProductByCategory('Women', 'Dress', 'Women Dress')

//     // Step 2: Go to cart
//     checkoutPage.goToCart()

//     // Step 3: Proceed to checkout
//     checkoutPage.proceedToCheckout()

//     // Step 4: Fill address (optional)
//     checkoutPage.fillAddress({
//       name: 'Myrl Test',
//       address: '123 Test St',
//       city: 'Kathmandu',
//       state: 'Bagmati',
//       zipcode: '44600',
//       country: 'Nepal',
//       mobile: '9805275989'
//     })

//     // Step 5: Enter fake payment details
//     checkoutPage.enterPaymentDetails({
//       name: 'Myrl Test',
//       number: '4111111111111111',
//       cvc: '123',
//       expiryMonth: '12',
//       expiryYear: '2030'
//     })

//     // Step 6: Confirm order
//     checkoutPage.confirmOrder()

//     // Step 7: Verify order confirmation
//     checkoutPage.verifyOrderConfirmation()
//   })
// })
// import CheckoutPage from '../pages/CheckoutPage'

// describe('Checkout Flow with Fake Payment', () => {
//   const checkoutPage = new CheckoutPage()

//   const user = {
//     name: 'Myrl',
//     email: 'Alec.Denesik@yahoo.com',
//     password: 'ncqrvzgAsFuBveh'
//   }

//   it('should login, add product from home, and complete checkout', () => {
//     // Step 1: Visit login page
//     cy.visit('https://automationexercise.com/login')

//     // Login directly
//     cy.get('input[data-qa="login-email"]').type(user.email)
//     cy.get('input[data-qa="login-password"]').type(user.password)
//     cy.get('button[data-qa="login-button"]').click()

//     // Verify login success
//     cy.contains(user.name).should('be.visible')

//     // Step 2: Scroll to products section
//     cy.get('.features_items', { timeout: 15000 }).should('be.visible').scrollIntoView()

//     // Step 3: Add first product
//     cy.get('.features_items .product-image-wrapper', { timeout: 10000 })
//       .first()
//       .scrollIntoView()
//       .trigger('mouseover')
//       .find('a.btn.btn-default.add-to-cart')
//       .first() // ensures only one element is clicked
//       .click({ force: true })

//     // Step 4: Handle modal popup and go to cart
//     checkoutPage.goToCart()

//     // Step 5: Proceed to checkout
//     checkoutPage.proceedToCheckout()

//     // Step 6: Fill address
//     checkoutPage.fillAddress({
//       name: 'Myrl Test',
//       address: '123 Test St',
//       city: 'Kathmandu',
//       state: 'Bagmati',
//       zipcode: '44600',
//       country: 'Nepal',
//       mobile: '9805275989'
//     })

//     // Step 7: Enter fake payment details
//     checkoutPage.enterPaymentDetails({
//       name: 'Myrl Test',
//       number: '4111111111111111',
//       cvc: '123',
//       expiryMonth: '12',
//       expiryYear: '2030'
//     })

//     // Step 8: Confirm order
//     checkoutPage.confirmOrder()

//     // Step 9: Verify order confirmation
//     checkoutPage.verifyOrderConfirmation()
//   })
// })


// import CheckoutPage from '../pages/CheckoutPage'

// describe('Checkout Flow with Fake Payment', () => {
//   const checkoutPage = new CheckoutPage()

//   const user = {
//     name: 'Myrl',
//     email: 'Alec.Denesik@yahoo.com',
//     password: 'ncqrvzgAsFuBveh'
//   }

//   it('should login, add product from home, and complete checkout', () => {
//     // Step 1: Visit login page
//     cy.visit('https://automationexercise.com/login')

//     // Login directly
//     cy.get('input[data-qa="login-email"]').type(user.email)
//     cy.get('input[data-qa="login-password"]').type(user.password)
//     cy.get('button[data-qa="login-button"]').click()

//     // Verify login success
//     cy.contains(user.name).should('be.visible')

//     // Step 2: Scroll to products section
//     cy.get('.features_items', { timeout: 15000 }).should('be.visible').scrollIntoView()

//     // Step 3: Add first product
//     cy.get('.features_items .product-image-wrapper', { timeout: 10000 })
//       .first()
//       .scrollIntoView()
//       .trigger('mouseover')
//       .find('a.btn.btn-default.add-to-cart')
//       .first() // ensures only one element is clicked
//       .click({ force: true })

//     // Step 4: Handle modal popup and go to cart
//     checkoutPage.goToCart()

//     // Step 5: Proceed to checkout
//     checkoutPage.proceedToCheckout()

//     // Step 6: Click Place Order to go to payment section
//     checkoutPage.placeOrder()

//     // Step 7: Enter fake payment details
//     checkoutPage.enterPaymentDetails({
//       name: 'Myrl Test',
//       number: '4111111111111111',
//       cvc: '123',
//       expiryMonth: '12',
//       expiryYear: '2030'
//     })

//     // Step 8: Confirm order
//     checkoutPage.confirmOrder()

//     // Step 9: Verify order confirmation
//     checkoutPage.verifyOrderConfirmation()
//   })
// })


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
