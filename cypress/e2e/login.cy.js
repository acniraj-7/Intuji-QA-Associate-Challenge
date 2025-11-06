
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
    name: 'Myrl',           
    email: 'Alec.Denesik@yahoo.com', 
    password: 'ncqrvzgAsFuBveh'      
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
