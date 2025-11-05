// // cypress/e2e/login.cy.js

// /**
//  * Login Test for AutomationExercise.com
//  * This test covers:
//  * - Logging in with an existing user
//  * - Verifying successful login
//  * - Logging out and verifying successful logout
//  */

// import LoginPage from '../pages/LoginPage'

// describe('User Login Flow', () => {
//   const loginPage = new LoginPage()

//   // Replace these with the credentials generated during registration
//   const user = {
//     name: 'Myrl',
//     email: 'Alec.Denesik@yahoo.com',
//     password: 'ncqrvzgAsFuBveh'
//   }

//   it('should log in successfully with valid credentials', () => {
//     // Navigate to login page
//     loginPage.visit()

//     // Fill in login form
//     loginPage.enterEmail(user.email)
//     loginPage.enterPassword(user.password)

//     // Submit form
//     loginPage.clickLoginButton()

//     // Verify login success
//     loginPage.verifyUserLoggedIn(user.name)
//   })

//   it('should log out successfully and redirect to login page', () => {
//     // Perform logout
//     loginPage.logout()

//     // Verify user is logged out
//     loginPage.verifyUserLoggedOut()
//   })
// })
// cypress/e2e/login.cy.js

/**
 * Login Test for AutomationExercise.com
 * This test covers:
 * - Logging in with an existing user
 * - Verifying successful login
 * - Storing session/cookies for reuse in further tests
 */

import LoginPage from '../pages/LoginPage'

describe('User Login Flow', () => {
  const loginPage = new LoginPage()

  // Use a fixed test user or the credentials generated from registration
  const user = {
    name: 'Myrl',           // Replace with actual name
    email: 'Alec.Denesik@yahoo.com', // Replace with actual email
    password: 'ncqrvzgAsFuBveh'      // Replace with actual password
  }

  // Reuse session for faster login in multiple tests
  beforeEach(() => {
    cy.session(user.email, () => {
      loginPage.visit()
      loginPage.enterEmail(user.email)
      loginPage.enterPassword(user.password)
      loginPage.clickLoginButton()
      loginPage.verifyUserLoggedIn(user.name)
    })
  })

  it('should log in successfully with valid credentials', () => {
    // Directly visit dashboard/home page since session is restored
    cy.visit('/')
    loginPage.verifyUserLoggedIn(user.name)
  })
})
