// // cypress/pages/CheckoutPage.js

// class CheckoutPage {

//   /**
//    * Visit the cart and proceed to checkout
//    */
//   proceedToCheckout() {
//     cy.get('a[href="/view_cart"]').first().scrollIntoView().click()
//     cy.url().should('include', 'view_cart')
//     cy.contains('Proceed To Checkout').scrollIntoView().click()
//   }

//   /**
//    * Fill billing/shipping address
//    * @param {Object} address - Address details
//    */
//   fillAddress(address) {
//     cy.get('input[name="name"]').clear().type(address.name)
//     cy.get('input[name="address1"]').clear().type(address.address1)
//     cy.get('input[name="city"]').clear().type(address.city)
//     cy.get('input[name="state"]').clear().type(address.state)
//     cy.get('input[name="zipcode"]').clear().type(address.zipcode)
//     cy.get('input[name="mobile_number"]').clear().type(address.mobile_number)
//   }

//   /**
//    * Fill payment details (fake)
//    * @param {Object} card - Card details
//    */
//   fillPaymentDetails(card) {
//     cy.get('input[name="name_on_card"]').clear().type(card.name_on_card)
//     cy.get('input[name="card_number"]').clear().type(card.card_number)
//     cy.get('input[name="cvc"]').clear().type(card.cvc)
//     cy.get('input[name="expiry_month"]').clear().type(card.expiry_month)
//     cy.get('input[name="expiry_year"]').clear().type(card.expiry_year)
//   }

//   /**
//    * Confirm payment and place order
//    */
//   confirmOrder() {
//     cy.contains('Pay and Confirm Order').scrollIntoView().click()
//   }

//   /**
//    * Verify order confirmation message
//    */
//   verifyOrderSuccess() {
//     cy.contains('Your order has been placed successfully!', { timeout: 10000 })
//       .should('be.visible')
//   }
// }

// export default CheckoutPage

// cypress/pages/CheckoutPage.js

// class CheckoutPage {

//   goToCart() {
//     cy.get('a[href="/view_cart"]').first().scrollIntoView().click({ force: true })
//     cy.url().should('include', 'view_cart')
//     cy.get('.cart_info', { timeout: 10000 }).should('be.visible')
//   }

//   proceedToCheckout() {
//     cy.contains('Proceed To Checkout').scrollIntoView().click({ force: true })
//     cy.url().should('include', '/checkout')
//   }

//   fillAddress(address) {
//     if (address) {
//       cy.get('input[name="name"]').clear().type(address.name)
//       cy.get('input[name="address"]').clear().type(address.address)
//       cy.get('input[name="city"]').clear().type(address.city)
//       cy.get('input[name="state"]').clear().type(address.state)
//       cy.get('input[name="zipcode"]').clear().type(address.zipcode)
//       cy.get('input[name="country"]').clear().type(address.country)
//       cy.get('input[name="mobile_number"]').clear().type(address.mobile)
//     }
//     // else assume saved address
//   }

//   enterPaymentDetails(card) {
//     cy.get('input[name="name_on_card"]').clear().type(card.name)
//     cy.get('input[name="card_number"]').clear().type(card.number)
//     cy.get('input[name="cvc"]').clear().type(card.cvc)
//     cy.get('input[name="expiry_month"]').clear().type(card.expiryMonth)
//     cy.get('input[name="expiry_year"]').clear().type(card.expiryYear)
//   }

//   confirmOrder() {
//     cy.contains('Pay and Confirm Order').click({ force: true })
//   }

//   verifyOrderConfirmation() {
//     cy.contains('Order Placed!').should('be.visible')
//   }
// }

// export default CheckoutPage


// class CheckoutPage {

//   goToCart() {
//     // Wait for the modal popup after adding to cart
//     cy.get('#cartModal', { timeout: 10000 }).should('be.visible')

//     // Click the 'View Cart' link inside the modal
//     cy.get('#cartModal a[href="/view_cart"]').first().click({ force: true })

//     // Verify navigation to cart page
//     cy.url().should('include', 'view_cart')
//     cy.get('.cart_info', { timeout: 10000 }).should('be.visible')
//   }

//   proceedToCheckout() {
//     cy.contains('Proceed To Checkout').scrollIntoView().click({ force: true })
//     cy.url().should('include', '/checkout')
//   }

//   fillAddress(address) {
//     if (address) {
//       cy.get('input[name="name"]').clear().type(address.name)
//       cy.get('input[name="address"]').clear().type(address.address)
//       cy.get('input[name="city"]').clear().type(address.city)
//       cy.get('input[name="state"]').clear().type(address.state)
//       cy.get('input[name="zipcode"]').clear().type(address.zipcode)
//       cy.get('input[name="country"]').clear().type(address.country)
//       cy.get('input[name="mobile_number"]').clear().type(address.mobile)
//     }
//     // else assume saved address
//   }

//   enterPaymentDetails(card) {
//     cy.get('input[name="name_on_card"]').clear().type(card.name)
//     cy.get('input[name="card_number"]').clear().type(card.number)
//     cy.get('input[name="cvc"]').clear().type(card.cvc)
//     cy.get('input[name="expiry_month"]').clear().type(card.expiryMonth)
//     cy.get('input[name="expiry_year"]').clear().type(card.expiryYear)
//   }

//   confirmOrder() {
//     cy.contains('Pay and Confirm Order').click({ force: true })
//   }

//   verifyOrderConfirmation() {
//     cy.contains('Order Placed!').should('be.visible')
//   }
// }

// export default CheckoutPage
// class CheckoutPage {

//   goToCart() {
//     // Wait for modal popup after adding product
//     cy.get('#cartModal', { timeout: 10000 }).should('be.visible')

//     // Click only the first "View Cart" link to avoid multiple element error
//     cy.get('#cartModal a[href="/view_cart"]').first().click({ force: true })

//     // Verify navigation to cart page
//     cy.url().should('include', 'view_cart')
//     cy.get('.cart_info', { timeout: 10000 }).should('be.visible')
//   }

//   proceedToCheckout() {
//     // Click only the first "Proceed To Checkout" button
//     cy.contains('Proceed To Checkout').first().scrollIntoView().click({ force: true })
//     cy.url().should('include', '/checkout')
//   }

//   fillAddress(address) {
//     if (address) {
//       Object.keys(address).forEach(key => {
//         cy.get(`input[name="${key === 'mobile' ? 'mobile_number' : key}"]`)
//           .clear()
//           .type(address[key])
//       })
//     }
//   }

//   enterPaymentDetails(card) {
//     Object.keys(card).forEach(key => {
//       const field = key === 'expiryMonth' ? 'expiry_month' :
//                     key === 'expiryYear' ? 'expiry_year' : key === 'name' ? 'name_on_card' : key
//       cy.get(`input[name="${field}"]`).clear().type(card[key])
//     })
//   }

//   confirmOrder() {
//     // Click only the first "Pay and Confirm Order" button
//     cy.contains('Pay and Confirm Order').first().click({ force: true })
//   }

//   verifyOrderConfirmation() {
//     cy.contains('Order Placed!').should('be.visible')
//   }
// }

// export default CheckoutPage


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
