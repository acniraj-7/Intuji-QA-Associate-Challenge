
// import CartPage from '../pages/CartPage';

// describe('Cart and Quantity Management', () => {
//   const cartPage = new CartPage();

//   it('Adds multiple products, re-adds one to increase quantity, verifies total, and removes a product', () => {
//     // Ignore uncaught JS errors from external scripts
//     Cypress.on('uncaught:exception', (err) => {
//       console.log('Ignored uncaught error:', err.message);
//       return false;
//     });

//     // Step 1: Visit Products Page
//     cartPage.visitProducts();

//     // Step 2: Add initial products
//     cartPage.addProductByCategory('Women', 'Dress', 'Sleeveless Dress'); // Price 1000
//     cartPage.addProductByCategory('Men', 'Tshirts', 'Men Tshirt');       // Price 400

//     // Step 3: Go to cart
//     cartPage.goToCart();

//     // Step 4: Re-add 'Sleeveless Dress' to increase quantity
//     cartPage.visitProducts();
//     cartPage.addProductByCategory('Women', 'Dress', 'Sleeveless Dress'); // Now qty = 2

//     // Step 5: Go back to cart
//     cartPage.goToCart();

//     // Step 6: Verify total (1000*2 + 400 = 2400)
//     cartPage.verifyCartTotal();

//     // Step 7: Remove one product and verify cart updates
//     cartPage.removeProduct('Men Tshirt');
//     cy.get('.cart_info tbody tr').should('have.length.at.least', 1);
//   });
// });


// import CartPage from '../pages/CartPage';

// describe('Cart and Quantity Management', () => {
//   const cartPage = new CartPage();

//   it('Adds multiple products, re-adds one to increase quantity, verifies total, and removes a product', () => {
//     // Ignore uncaught JS errors from external scripts
//     Cypress.on('uncaught:exception', (err) => {
//       console.log('Ignored uncaught error:', err.message);
//       return false;
//     });

//     // Step 1: Visit Products Page
//     cartPage.visitProducts();

//     // Step 2: Add initial products
//     cartPage.addProductByCategory('Women', 'Dress', 'Sleeveless Dress'); // Price 1000
//     cartPage.addProductByCategory('Men', 'Tshirts', 'Men Tshirt');       // Price 400

//     // Step 3: Go to cart
//     cartPage.goToCart();

//     // Step 4: Re-add 'Sleeveless Dress' to increase quantity
//     cartPage.visitProducts();
//     cartPage.addProductByCategory('Women', 'Dress', 'Sleeveless Dress'); // Now qty = 2

//     // Step 5: Go back to cart
//     cartPage.goToCart();

//     // Step 6: Proceed to checkout to verify totals
//     cartPage.proceedToCheckout();

//     // Step 7: Verify total (1000*2 + 400 = 2400)
//     cartPage.verifyCartTotal();

//     // Step 8: Remove one product and verify cart updates
//     cartPage.removeProduct('Men Tshirt');
//     cy.get('.cart_info tbody tr').should('have.length.at.least', 1);
//   });
// });

// import CartPage from '../pages/CartPage';
// import LoginPage from '../pages/LoginPage';

// describe('Cart and Quantity Management with Login', () => {
//   const cartPage = new CartPage();
//   const loginPage = new LoginPage();

//   const user = {
//     name: 'Myrl',
//     email: 'Alec.Denesik@yahoo.com',
//     password: 'ncqrvzgAsFuBveh'
//   };

//   it('Logs in, adds products, updates quantity, verifies total, and removes a product', () => {
//     // Ignore uncaught JS errors from external scripts
//     Cypress.on('uncaught:exception', (err) => {
//       console.log('Ignored uncaught error:', err.message);
//       return false;
//     });

//     // Step 1: Login using LoginPage
//     loginPage.visit();
//     loginPage.enterEmail(user.email);
//     loginPage.enterPassword(user.password);
//     loginPage.clickLoginButton();
//     loginPage.verifyUserLoggedIn(user.name);

//     // Step 2: Add initial products from home/products page
//     cartPage.visitProducts();
//     cartPage.addProductByCategory('Women', 'Dress', 'Sleeveless Dress'); // Price 1000
//     cartPage.addProductByCategory('Men', 'Tshirts', 'Men Tshirt');       // Price 400

//     // Step 3: Go to cart
//     cartPage.goToCart();

//     // Step 4: Re-add 'Sleeveless Dress' to increase quantity to 2
//     cartPage.visitProducts();
//     cartPage.addProductByCategory('Women', 'Dress', 'Sleeveless Dress');

//     // Step 5: Go back to cart
//     cartPage.goToCart();

//     // Step 6: Proceed to checkout to verify total
//     cartPage.proceedToCheckout();

//     // Step 7: Verify total (1000*2 + 400 = 2400)
//     cartPage.verifyCartTotal();

//     // Step 8: Remove one product and verify cart updates
//     cartPage.removeProduct('Men Tshirt');
//     cy.get('.cart_info tbody tr').should('have.length.at.least', 1);
//   });
// });


// import CartPage from '../pages/CartPage'
// import LoginPage from '../pages/LoginPage'

// describe('Cart and Checkout Management', () => {
//   const cartPage = new CartPage()
//   const loginPage = new LoginPage()

//   it('Adds products, updates quantity, verifies total, removes product, and verifies updated total', () => {
//     // Ignore external JS errors
//     Cypress.on('uncaught:exception', (err) => {
//       console.log('Ignored uncaught error:', err.message)
//       return false
//     })

//     // Step 1: Login
//     loginPage.visitLoginPage()
//     loginPage.login('user@example.com', 'password') // Replace with valid credentials

//     // Step 2: Add products
//     cartPage.visitProducts()
//     cartPage.addProductByCategory('Women', 'Dress', 'Sleeveless Dress') // 1000
//     cartPage.addProductByCategory('Men', 'Tshirts', 'Men Tshirt')       // 400

//     // Step 3: Update quantity of one product
//     cartPage.updateQuantity('Sleeveless Dress', 3) // Qty = 3

//     // Step 4: Verify total on checkout page
//     cartPage.verifyTotalOnCheckout() // Total = 1000*3 + 400 = 3400

//     // Step 5: Remove a product from cart
//     cartPage.goToCart()
//     cartPage.removeProduct('Men Tshirt')

//     // Step 6: Verify updated total on checkout page
//     cartPage.verifyTotalOnCheckout() // Total = 1000*3 = 3000
//   })
// })



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
