// class ProductsPage {

//   visit() {
//     cy.visit('/products')
//     cy.get('.features_items', { timeout: 15000 }).should('be.visible')
//   }

//   filterByCategory(mainCategory, subCategory) {
//     cy.contains('a', mainCategory, { timeout: 10000 })
//       .scrollIntoView()
//       .should('be.visible')
//       .click()

//     cy.contains('a', subCategory, { timeout: 10000 })
//       .scrollIntoView()
//       .should('be.visible')
//       .click()

//     cy.url({ timeout: 10000 }).should('include', 'category_products')
//     cy.get('.features_items', { timeout: 15000 }).should('be.visible')
//   }

//   verifyFilteredProducts(keyword) {
//     // ✅ Fix: The product name is inside <p>, not <h2>
//     cy.get('.features_items .product-image-wrapper', { timeout: 15000 })
//       .should('have.length.greaterThan', 0)
//       .each(($el) => {
//         cy.wrap($el)
//           .find('.productinfo p')
//           .invoke('text')
//           .then((text) => {
//             expect(text.toLowerCase()).to.include(keyword.toLowerCase())
//           })
//       })
//   }

//   selectFirstProduct() {
//     cy.get('.features_items .product-image-wrapper', { timeout: 15000 })
//       .first()
//       .within(() => {
//         cy.get('a')
//           .contains('View Product')
//           .invoke('removeAttr', 'target')
//           .click({ force: true })
//       })
//     cy.get('.product-information', { timeout: 15000 }).should('be.visible')
//   }

//   verifyProductDetails({ name, price, availability }) {
//     cy.get('.product-information h2', { timeout: 10000 }).should('contain.text', name)
//     cy.get('.product-information span span', { timeout: 10000 }).should('contain.text', price)
//     cy.get('.product-information p:contains("Availability")', { timeout: 10000 })
//       .should('contain.text', availability)
//   }
// }

// export default ProductsPage




class ProductsPage {

  /**
   * Visit the Products page and ensure it loads correctly.
   */
  visit() {
    cy.visit('/products');
    cy.get('.features_items', { timeout: 15000 })
      .should('be.visible');
  }

  /**
   * Filter products by main and sub-category.
   * @param {string} mainCategory - The main category to filter by (e.g., "Women")
   * @param {string} subCategory - The sub-category to filter by (e.g., "Dress")
   */
  filterByCategory(mainCategory, subCategory) {
    // Click on the main category
    cy.contains('a', mainCategory, { timeout: 10000 })
      .scrollIntoView()
      .should('be.visible')
      .click();

    // Click on the sub-category
    cy.contains('a', subCategory, { timeout: 10000 })
      .scrollIntoView()
      .should('be.visible')
      .click();

    // Verify URL and products are visible
    cy.url({ timeout: 10000 }).should('include', 'category_products');
    cy.get('.features_items', { timeout: 15000 }).should('be.visible');
  }

  /**
   * Verify that filtered products contain the expected keyword.
   * @param {string} keyword - Keyword to check in product names
   */
  verifyFilteredProducts(keyword) {
    cy.get('.features_items .product-image-wrapper', { timeout: 15000 })
      .should('have.length.greaterThan', 0)
      .each(($el) => {
        cy.wrap($el)
          .find('.productinfo p')
          .invoke('text')
          .then((text) => {
            expect(text.toLowerCase()).to.include(keyword.toLowerCase());
          });
      });
  }

  /**
   * Select the first product in the filtered list and open its details page.
   */
  selectFirstProduct() {
    cy.get('.features_items .product-image-wrapper', { timeout: 15000 })
      .first()
      .within(() => {
        cy.get('a')
          .contains('View Product')
          .invoke('removeAttr', 'target') // Open in the same tab
          .click({ force: true });
      });

    // Ensure product detail page is visible
    cy.get('.product-information', { timeout: 15000 }).should('be.visible');
  }

  /**
   * Verify product details (name, price, availability) on the product page.
   * @param {Object} expected - Expected product details
   * @param {string} expected.name - Expected product name
   * @param {string} expected.price - Expected product price
   * @param {string} expected.availability - Expected availability status
   */
  verifyProductDetails({ name, price, availability }) {
    cy.get('.product-information h2', { timeout: 10000 }).should('contain.text', name);
    cy.get('.product-information span span', { timeout: 10000 }).should('contain.text', price);
    cy.get('.product-information p:contains("Availability")', { timeout: 10000 })
      .should('contain.text', availability);
  }
}

export default ProductsPage;
