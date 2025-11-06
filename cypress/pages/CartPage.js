
class CartPage {

  visitProducts() {
    cy.visit('/products')
    cy.get('.features_items', { timeout: 15000 }).should('be.visible')
  }

  addProductByCategory(mainCategory, subCategory, productName) {
    cy.get('#accordian')
      .contains(mainCategory)
      .first()
      .scrollIntoView()
      .should('be.visible')
      .click()

    cy.get('#accordian')
      .contains(subCategory)
      .first()
      .scrollIntoView()
      .should('be.visible')
      .click()

    cy.get('.features_items', { timeout: 15000 }).should('be.visible')

    cy.get('.features_items .product-image-wrapper')
      .contains(productName)
      .first()
      .scrollIntoView()
      .trigger('mouseover')
      .closest('.product-image-wrapper')
      .within(() => {
        cy.contains('Add to cart')
          .should('be.visible')
          .click({ force: true })
      })

    cy.get('#cartModal', { timeout: 10000 })
      .should('be.visible')
      .within(() => {
        cy.contains('button', 'Continue Shopping')
          .should('be.visible')
          .click({ force: true })
      })

    cy.wait(500)
  }

  goToCart() {
    cy.get('a[href="/view_cart"]').first().scrollIntoView().click()
    cy.url().should('include', 'view_cart')
    cy.get('.cart_info', { timeout: 10000 }).should('be.visible')
  }

  proceedToCheckout() {
    cy.contains('Proceed To Checkout').first().scrollIntoView().click({ force: true })
    cy.url().should('include', '/checkout')
  }

  updateQuantity(productName, newQuantity) {
    cy.visit('/products')
    cy.get('.features_items', { timeout: 15000 }).should('be.visible')

    for (let i = 1; i < newQuantity; i++) {
      cy.get('.features_items .product-image-wrapper')
        .contains(productName)
        .first()
        .scrollIntoView()
        .trigger('mouseover')
        .closest('.product-image-wrapper')
        .within(() => {
          cy.contains('Add to cart')
            .should('be.visible')
            .click({ force: true })
        })

      cy.get('#cartModal', { timeout: 10000 })
        .should('be.visible')
        .within(() => {
          cy.contains('button', 'Continue Shopping')
            .should('be.visible')
            .click({ force: true })
        })

      cy.wait(500)
    }
  }

  // Pass the expected total (calculated from your test data)
  verifyCartTotal(expectedTotal) {
    // Wait for the total element to appear
    cy.get('p.cart_total_price', { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then((totalText) => {
        const total = parseFloat(totalText.replace('Rs. ', '').replace(/,/g, '').trim())
        expect(total).to.eq(expectedTotal)
      })
  }

  removeProduct(productName) {
    cy.get('.cart_info tbody tr').each(($row) => {
      cy.wrap($row).find('td.cart_description h4 a').then(($el) => {
        if ($el.text().trim() === productName) {
          cy.wrap($row).find('.cart_quantity_delete').click({ force: true })
        }
      })
    })
  }
}

export default CartPage
