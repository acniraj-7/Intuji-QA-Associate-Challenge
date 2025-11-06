



// // cypress/pages/CartPage.js
// class CartPage {

//   visitProducts() {
//     cy.visit('/products')
//     cy.get('.features_items', { timeout: 15000 }).should('be.visible')
//   }

//   addProductByCategory(mainCategory, subCategory, productName) {
//     // Navigate to main category
//     cy.get('#accordian')
//       .contains(mainCategory)
//       .first()
//       .scrollIntoView()
//       .should('be.visible')
//       .click()

//     // Navigate to subcategory
//     cy.get('#accordian')
//       .contains(subCategory)
//       .first()
//       .scrollIntoView()
//       .should('be.visible')
//       .click()

//     // Wait for products to load
//     cy.get('.features_items', { timeout: 15000 }).should('be.visible')

//     // Find the specific product and add to cart
//     cy.get('.features_items .product-image-wrapper')
//       .contains(productName)
//       .first()
//       .scrollIntoView()
//       .trigger('mouseover')
//       .closest('.product-image-wrapper')
//       .within(() => {
//         cy.contains('Add to cart')
//           .should('be.visible')
//           .click({ force: true })
//       })

//     // Close modal by clicking "Continue Shopping"
//     cy.get('#cartModal', { timeout: 10000 })
//       .should('be.visible')
//       .within(() => {
//         cy.contains('button', 'Continue Shopping')
//           .should('be.visible')
//           .click({ force: true })
//       })

//     cy.wait(500) // Ensure modal is closed
//   }

//   goToCart() {
//     cy.get('a[href="/view_cart"]').first().scrollIntoView().click()
//     cy.url().should('include', 'view_cart')
//     cy.get('.cart_info', { timeout: 10000 }).should('be.visible')
//   }

//   updateQuantity(productName, newQuantity) {
//     // Simulate quantity increase by re-adding the same product
//     cy.visit('/products')
//     cy.get('.features_items', { timeout: 15000 }).should('be.visible')

//     for (let i = 1; i < newQuantity; i++) {
//       cy.get('.features_items .product-image-wrapper')
//         .contains(productName)
//         .first()
//         .scrollIntoView()
//         .trigger('mouseover')
//         .closest('.product-image-wrapper')
//         .within(() => {
//           cy.contains('Add to cart')
//             .should('be.visible')
//             .click({ force: true })
//         })

//       // Close modal
//       cy.get('#cartModal', { timeout: 10000 })
//         .should('be.visible')
//         .within(() => {
//           cy.contains('button', 'Continue Shopping')
//             .should('be.visible')
//             .click({ force: true })
//         })

//       cy.wait(500)
//     }
//   }

//   verifyCartTotal() {
//     let calculatedTotal = 0

//     cy.get('.cart_info tbody tr').each(($row) => {
//       cy.wrap($row).find('td.cart_price p').invoke('text').then(priceText => {
//         cy.wrap($row).find('td.cart_quantity')
//           .invoke('text')
//           .then(qtyText => {
//             const price = parseFloat(priceText.replace('Rs. ', '').replace(/,/g, '').trim())
//             const qty = parseInt(qtyText.trim()) || 1
//             calculatedTotal += price * qty
//           })
//       })
//     }).then(() => {
//       cy.get('.cart_total_price').invoke('text').then(totalText => {
//         const total = parseFloat(totalText.replace('Rs. ', '').replace(/,/g, '').trim())
//         expect(total).to.eq(calculatedTotal)
//       })
//     })
//   }

//   removeProduct(productName) {
//     cy.get('.cart_info tbody tr').each(($row) => {
//       cy.wrap($row).find('td.cart_description h4 a').then(($el) => {
//         if ($el.text().trim() === productName) {
//           cy.wrap($row).find('.cart_quantity_delete').click({ force: true })
//         }
//       })
//     })
//   }
// }

// // Export default
// export default CartPage



// // cypress/pages/CartPage.js
// class CartPage {

//   visitProducts() {
//     cy.visit('/products')
//     cy.get('.features_items', { timeout: 15000 }).should('be.visible')
//   }

//   addProductByCategory(mainCategory, subCategory, productName) {
//     // Navigate to main category
//     cy.get('#accordian')
//       .contains(mainCategory)
//       .first()
//       .scrollIntoView()
//       .should('be.visible')
//       .click()

//     // Navigate to subcategory
//     cy.get('#accordian')
//       .contains(subCategory)
//       .first()
//       .scrollIntoView()
//       .should('be.visible')
//       .click()

//     // Wait for products to load
//     cy.get('.features_items', { timeout: 15000 }).should('be.visible')

//     // Find the specific product and add to cart
//     cy.get('.features_items .product-image-wrapper')
//       .contains(productName)
//       .first()
//       .scrollIntoView()
//       .trigger('mouseover')
//       .closest('.product-image-wrapper')
//       .within(() => {
//         cy.contains('Add to cart')
//           .should('be.visible')
//           .click({ force: true })
//       })

//     // Close modal by clicking "Continue Shopping"
//     cy.get('#cartModal', { timeout: 10000 })
//       .should('be.visible')
//       .within(() => {
//         cy.contains('button', 'Continue Shopping')
//           .should('be.visible')
//           .click({ force: true })
//       })

//     cy.wait(500) // Ensure modal is closed
//   }

//   goToCart() {
//     cy.get('a[href="/view_cart"]').first().scrollIntoView().click()
//     cy.url().should('include', 'view_cart')
//     cy.get('.cart_info', { timeout: 10000 }).should('be.visible')
//   }

//   updateQuantity(productName, newQuantity) {
//     // Simulate quantity increase by re-adding the same product
//     cy.visit('/products')
//     cy.get('.features_items', { timeout: 15000 }).should('be.visible')

//     for (let i = 1; i < newQuantity; i++) {
//       cy.get('.features_items .product-image-wrapper')
//         .contains(productName)
//         .first()
//         .scrollIntoView()
//         .trigger('mouseover')
//         .closest('.product-image-wrapper')
//         .within(() => {
//           cy.contains('Add to cart')
//             .should('be.visible')
//             .click({ force: true })
//         })

//       // Close modal
//       cy.get('#cartModal', { timeout: 10000 })
//         .should('be.visible')
//         .within(() => {
//           cy.contains('button', 'Continue Shopping')
//             .should('be.visible')
//             .click({ force: true })
//         })

//       cy.wait(500)
//     }
//   }

//   proceedToCheckout() {
//     cy.contains('Proceed To Checkout').first().scrollIntoView().click({ force: true })
//     cy.url().should('include', '/checkout')
//   }

//   verifyCartTotal() {
//     // Verify total after going to checkout page
//     let calculatedTotal = 0

//     cy.get('.cart_info tbody tr').then($rows => {
//       $rows.each((index, row) => {
//         const $row = Cypress.$(row)
//         const priceText = $row.find('td.cart_price p').text().replace('Rs. ', '').replace(/,/g, '').trim()
//         const qtyText = $row.find('td.cart_quantity').text().trim()

//         const price = parseFloat(priceText) || 0
//         const qty = parseInt(qtyText) || 1
//         calculatedTotal += price * qty
//       })

//       cy.get('.cart_total_price').invoke('text').then(totalText => {
//         const total = parseFloat(totalText.replace('Rs. ', '').replace(/,/g, '').trim())
//         expect(total).to.eq(calculatedTotal)
//       })
//     })
//   }

//   removeProduct(productName) {
//     cy.get('.cart_info tbody tr').each(($row) => {
//       cy.wrap($row).find('td.cart_description h4 a').then(($el) => {
//         if ($el.text().trim() === productName) {
//           cy.wrap($row).find('.cart_quantity_delete').click({ force: true })
//         }
//       })
//     })
//   }
// }

// // Export default
// export default CartPage



// cypress/pages/CartPage.js
// class CartPage {

//   visitProducts() {
//     cy.visit('/products')
//     cy.get('.features_items', { timeout: 15000 }).should('be.visible')
//   }

//   addProductByCategory(mainCategory, subCategory, productName) {
//     cy.get('#accordian')
//       .contains(mainCategory)
//       .first()
//       .scrollIntoView()
//       .should('be.visible')
//       .click()

//     cy.get('#accordian')
//       .contains(subCategory)
//       .first()
//       .scrollIntoView()
//       .should('be.visible')
//       .click()

//     cy.get('.features_items', { timeout: 15000 }).should('be.visible')

//     cy.get('.features_items .product-image-wrapper')
//       .contains(productName)
//       .first()
//       .scrollIntoView()
//       .trigger('mouseover')
//       .closest('.product-image-wrapper')
//       .within(() => {
//         cy.contains('Add to cart')
//           .should('be.visible')
//           .click({ force: true })
//       })

//     cy.get('#cartModal', { timeout: 10000 })
//       .should('be.visible')
//       .within(() => {
//         cy.contains('button', 'Continue Shopping')
//           .should('be.visible')
//           .click({ force: true })
//       })

//     cy.wait(500)
//   }

//   goToCart() {
//     cy.get('a[href="/view_cart"]').first().scrollIntoView().click()
//     cy.url().should('include', 'view_cart')
//     cy.get('.cart_info', { timeout: 10000 }).should('be.visible')
//   }

//   proceedToCheckout() {
//     cy.contains('Proceed To Checkout').first().scrollIntoView().click({ force: true })
//     cy.url().should('include', '/checkout')
//   }

//   updateQuantity(productName, newQuantity) {
//     // Simulate quantity increase by re-adding the same product
//     cy.visit('/products')
//     cy.get('.features_items', { timeout: 15000 }).should('be.visible')

//     for (let i = 1; i < newQuantity; i++) {
//       cy.get('.features_items .product-image-wrapper')
//         .contains(productName)
//         .first()
//         .scrollIntoView()
//         .trigger('mouseover')
//         .closest('.product-image-wrapper')
//         .within(() => {
//           cy.contains('Add to cart')
//             .should('be.visible')
//             .click({ force: true })
//         })

//       cy.get('#cartModal', { timeout: 10000 })
//         .should('be.visible')
//         .within(() => {
//           cy.contains('button', 'Continue Shopping')
//             .should('be.visible')
//             .click({ force: true })
//         })

//       cy.wait(500)
//     }
//   }

//   verifyCartTotal() {
//     // Verify the total on the checkout page after proceeding
//     let calculatedTotal = 0

//     cy.get('.cart_info tbody tr').each(($row) => {
//       cy.wrap($row).find('td.cart_price p').invoke('text').then(priceText => {
//         cy.wrap($row).find('td.cart_quantity').invoke('text').then(qtyText => {
//           const price = parseFloat(priceText.replace('Rs. ', '').replace(/,/g, '').trim())
//           const qty = parseInt(qtyText.trim()) || 1
//           calculatedTotal += price * qty
//         })
//       })
//     }).then(() => {
//       // Wait for checkout page total to be visible
//       cy.get('.cart_total_price').should('be.visible').invoke('text').then(totalText => {
//         const total = parseFloat(totalText.replace('Rs. ', '').replace(/,/g, '').trim())
//         expect(total).to.eq(calculatedTotal)
//       })
//     })
//   }

//   removeProduct(productName) {
//     cy.get('.cart_info tbody tr').each(($row) => {
//       cy.wrap($row).find('td.cart_description h4 a').then(($el) => {
//         if ($el.text().trim() === productName) {
//           cy.wrap($row).find('.cart_quantity_delete').click({ force: true })
//         }
//       })
//     })
//   }
// }

// export default CartPage



// class CartPage {

//   visitProducts() {
//     cy.visit('/products')
//     cy.get('.features_items', { timeout: 15000 }).should('be.visible')
//   }

//   addProductByCategory(mainCategory, subCategory, productName) {
//     cy.get('#accordian')
//       .contains(mainCategory)
//       .first()
//       .scrollIntoView()
//       .should('be.visible')
//       .click()

//     cy.get('#accordian')
//       .contains(subCategory)
//       .first()
//       .scrollIntoView()
//       .should('be.visible')
//       .click()

//     cy.get('.features_items', { timeout: 15000 }).should('be.visible')

//     cy.get('.features_items .product-image-wrapper')
//       .contains(productName)
//       .first()
//       .scrollIntoView()
//       .trigger('mouseover')
//       .closest('.product-image-wrapper')
//       .within(() => {
//         cy.contains('Add to cart')
//           .should('be.visible')
//           .click({ force: true })
//       })

//     cy.get('#cartModal', { timeout: 10000 })
//       .should('be.visible')
//       .within(() => {
//         cy.contains('button', 'Continue Shopping')
//           .should('be.visible')
//           .click({ force: true })
//       })

//     cy.wait(500)
//   }

//   goToCart() {
//     cy.get('a[href="/view_cart"]').first().scrollIntoView().click()
//     cy.url().should('include', 'view_cart')
//     cy.get('.cart_info', { timeout: 10000 }).should('be.visible')
//   }

//   proceedToCheckout() {
//     cy.contains('Proceed To Checkout').first().scrollIntoView().click({ force: true })
//     cy.url().should('include', '/checkout')
//   }

//   updateQuantity(productName, newQuantity) {
//     cy.visit('/products')
//     cy.get('.features_items', { timeout: 15000 }).should('be.visible')

//     for (let i = 1; i < newQuantity; i++) {
//       cy.get('.features_items .product-image-wrapper')
//         .contains(productName)
//         .first()
//         .scrollIntoView()
//         .trigger('mouseover')
//         .closest('.product-image-wrapper')
//         .within(() => {
//           cy.contains('Add to cart')
//             .should('be.visible')
//             .click({ force: true })
//         })

//       cy.get('#cartModal', { timeout: 10000 })
//         .should('be.visible')
//         .within(() => {
//           cy.contains('button', 'Continue Shopping')
//             .should('be.visible')
//             .click({ force: true })
//         })

//       cy.wait(500)
//     }
//   }

//   verifyTotalOnCheckout() {
//     // Go to checkout page
//     this.proceedToCheckout()

//     let calculatedTotal = 0

//     cy.get('.cart_info tbody tr').each(($row) => {
//       cy.wrap($row).find('td.cart_price p').invoke('text').then(priceText => {
//         cy.wrap($row).find('td.cart_quantity').invoke('text').then(qtyText => {
//           const price = parseFloat(priceText.replace('Rs. ', '').replace(/,/g, '').trim())
//           const qty = parseInt(qtyText.trim()) || 1
//           calculatedTotal += price * qty
//         })
//       })
//     }).then(() => {
//       cy.get('.cart_total_price').should('be.visible').invoke('text').then(totalText => {
//         const total = parseFloat(totalText.replace('Rs. ', '').replace(/,/g, '').trim())
//         expect(total).to.eq(calculatedTotal)
//       })
//     })
//   }

//   removeProduct(productName) {
//     cy.get('.cart_info tbody tr').each(($row) => {
//       cy.wrap($row).find('td.cart_description h4 a').then(($el) => {
//         if ($el.text().trim() === productName) {
//           cy.wrap($row).find('.cart_quantity_delete').click({ force: true })
//         }
//       })
//     })
//   }
// }

// export default CartPage




// class CartPage {

//   visitProducts() {
//     cy.visit('/products')
//     cy.get('.features_items', { timeout: 15000 }).should('be.visible')
//   }

//   addProductByCategory(mainCategory, subCategory, productName) {
//     cy.get('#accordian')
//       .contains(mainCategory)
//       .first()
//       .scrollIntoView()
//       .should('be.visible')
//       .click()

//     cy.get('#accordian')
//       .contains(subCategory)
//       .first()
//       .scrollIntoView()
//       .should('be.visible')
//       .click()

//     cy.get('.features_items', { timeout: 15000 }).should('be.visible')

//     cy.get('.features_items .product-image-wrapper')
//       .contains(productName)
//       .first()
//       .scrollIntoView()
//       .trigger('mouseover')
//       .closest('.product-image-wrapper')
//       .within(() => {
//         cy.contains('Add to cart')
//           .should('be.visible')
//           .click({ force: true })
//       })

//     cy.get('#cartModal', { timeout: 10000 })
//       .should('be.visible')
//       .within(() => {
//         cy.contains('button', 'Continue Shopping')
//           .should('be.visible')
//           .click({ force: true })
//       })

//     cy.wait(500)
//   }

//   goToCart() {
//     cy.get('a[href="/view_cart"]').first().scrollIntoView().click()
//     cy.url().should('include', 'view_cart')
//     cy.get('.cart_info', { timeout: 10000 }).should('be.visible')
//   }

//   proceedToCheckout() {
//     cy.contains('Proceed To Checkout').first().scrollIntoView().click({ force: true })
//     cy.url().should('include', '/checkout')
//   }

//   updateQuantity(productName, newQuantity) {
//     cy.visit('/products')
//     cy.get('.features_items', { timeout: 15000 }).should('be.visible')

//     for (let i = 1; i < newQuantity; i++) {
//       cy.get('.features_items .product-image-wrapper')
//         .contains(productName)
//         .first()
//         .scrollIntoView()
//         .trigger('mouseover')
//         .closest('.product-image-wrapper')
//         .within(() => {
//           cy.contains('Add to cart')
//             .should('be.visible')
//             .click({ force: true })
//         })

//       cy.get('#cartModal', { timeout: 10000 })
//         .should('be.visible')
//         .within(() => {
//           cy.contains('button', 'Continue Shopping')
//             .should('be.visible')
//             .click({ force: true })
//         })

//       cy.wait(500)
//     }
//   }

//   // FIX: Renamed method to match test
//   verifyCartTotal() {
//     this.proceedToCheckout()

//     let calculatedTotal = 0

//     cy.get('.cart_info tbody tr').each(($row) => {
//       cy.wrap($row).find('td.cart_price p').invoke('text').then(priceText => {
//         cy.wrap($row).find('td.cart_quantity').invoke('text').then(qtyText => {
//           const price = parseFloat(priceText.replace('Rs. ', '').replace(/,/g, '').trim())
//           const qty = parseInt(qtyText.trim()) || 1
//           calculatedTotal += price * qty
//         })
//       })
//     }).then(() => {
//       cy.get('.cart_total_price').should('be.visible').invoke('text').then(totalText => {
//         const total = parseFloat(totalText.replace('Rs. ', '').replace(/,/g, '').trim())
//         expect(total).to.eq(calculatedTotal)
//       })
//     })
//   }

//   removeProduct(productName) {
//     cy.get('.cart_info tbody tr').each(($row) => {
//       cy.wrap($row).find('td.cart_description h4 a').then(($el) => {
//         if ($el.text().trim() === productName) {
//           cy.wrap($row).find('.cart_quantity_delete').click({ force: true })
//         }
//       })
//     })
//   }
// }

// export default CartPage




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

  // ✅ Final working verifyCartTotal method
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
