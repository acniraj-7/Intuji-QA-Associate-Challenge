// // cypress/pages/LoginPage.js

// /**
//  * Page Object Model for Login Page
//  * Handles actions and verifications for user login and logout
//  */

// class LoginPage {

//   /**
//    * Navigate to the login page
//    */
//   visit() {
//     cy.visit('/login') // Relative URL, baseUrl should be set in cypress.config.js
//   }

//   /**
//    * Enter email in login form
//    * @param {string} email - User email
//    */
//   enterEmail(email) {
//     cy.get('input[data-qa="login-email"]').type(email)
//   }

//   /**
//    * Enter password in login form
//    * @param {string} password - User password
//    */
//   enterPassword(password) {
//     cy.get('input[data-qa="login-password"]').type(password)
//   }

//   /**
//    * Click the login button to submit form
//    */
//   clickLoginButton() {
//     cy.get('button[data-qa="login-button"]').click()
//   }

//   /**
//    * Verify user is logged in
//    * @param {string} name - Name of the logged-in user
//    */
//   verifyUserLoggedIn(name) {
//     cy.contains(`Logged in as ${name}`).should('be.visible')
//   }

//   /**
//    * Logout the current user
//    * Uses a safer selector to avoid timing issues
//    */
//   logout() {
//     cy.contains('a', 'Logout', { timeout: 10000 }).should('be.visible').click()
//   }

//   /**
//    * Verify user is logged out successfully
//    */
//   verifyUserLoggedOut() {
//     cy.url().should('include', '/login')
//     cy.contains('Login to your account').should('be.visible')
//   }
// }

// export default LoginPage


// cypress/pages/LoginPage.js

/**
 * Page Object Model for AutomationExercise Login Page
 * Handles actions and verifications for user login.
 * Designed to support session/cookie reuse in further tests.
 */

class LoginPage {

  /**
   * Navigate to the login page
   */
  visit() {
    cy.visit('/login') // Relative URL, baseUrl should be set in cypress.config.js
  }

  /**
   * Enter email in login form
   * @param {string} email - User email
   */
  enterEmail(email) {
    cy.get('input[data-qa="login-email"]').clear().type(email)
  }

  /**
   * Enter password in login form
   * @param {string} password - User password
   */
  enterPassword(password) {
    cy.get('input[data-qa="login-password"]').clear().type(password)
  }

  /**
   * Click the login button to submit form
   */
  clickLoginButton() {
    cy.get('button[data-qa="login-button"]').click()
  }

  /**
   * Verify user is logged in
   * @param {string} name - Name of the logged-in user
   */
  verifyUserLoggedIn(name) {
    cy.contains(`Logged in as ${name}`, { timeout: 10000 }).should('be.visible')
  }

  /**
   * Optional: Logout the current user
   * Included if needed in future scenarios
   */
  logout() {
    cy.contains('a', 'Logout', { timeout: 10000 }).should('be.visible').click()
  }

  /**
   * Optional: Verify user is logged out successfully
   */
  verifyUserLoggedOut() {
    cy.url().should('include', '/login')
    cy.contains('Login to your account').should('be.visible')
  }
}

export default LoginPage
