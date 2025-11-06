
class RegistrationPage {
  /** Visit the signup/login page */
  visit() {
    cy.visit('/login') // baseUrl is configured in cypress.config.js
  }

  /** ------------------ Signup Form Methods ------------------ */

  enterName(name) {
    cy.get('input[data-qa="signup-name"]').clear().type(name)
  }

  enterEmail(email) {
    cy.get('input[data-qa="signup-email"]').clear().type(email)
  }

  clickSignupButton() {
    cy.get('button[data-qa="signup-button"]').click()
  }

  /** ------------------ Account Information Methods ------------------ */

  selectTitle(title = 'Mr') {
    const genderId = title === 'Mr' ? 1 : 2
    cy.get(`input[id="id_gender${genderId}"]`).check()
  }

  enterPassword(password) {
    cy.get('input[id="password"]').clear().type(password)
  }

  selectDateOfBirth(day, month, year) {
    cy.get('select[id="days"]').select(day)
    cy.get('select[id="months"]').select(month)
    cy.get('select[id="years"]').select(year)
  }

  checkNewsletter() {
    cy.get('input[id="newsletter"]').check()
  }

  checkOffers() {
    cy.get('input[id="optin"]').check()
  }

  /** ------------------ Address Information Methods ------------------ */

  enterFirstName(firstName) {
    cy.get('input[id="first_name"]').clear().type(firstName)
  }

  enterLastName(lastName) {
    cy.get('input[id="last_name"]').clear().type(lastName)
  }

  enterCompany(company) {
    cy.get('input[id="company"]').clear().type(company)
  }

  enterAddress1(address1) {
    cy.get('input[id="address1"]').clear().type(address1)
  }

  enterAddress2(address2) {
    cy.get('input[id="address2"]').clear().type(address2)
  }

  selectCountry(country) {
    cy.get('select[id="country"]').select(country)
  }

  enterState(state) {
    cy.get('input[id="state"]').clear().type(state)
  }

  enterCity(city) {
    cy.get('input[id="city"]').clear().type(city)
  }

  enterZipcode(zipcode) {
    cy.get('input[id="zipcode"]').clear().type(zipcode)
  }

  enterMobileNumber(mobile) {
    cy.get('input[id="mobile_number"]').clear().type(mobile)
  }

  /** Submit the account creation form */
  submitAccountCreation() {
    cy.get('button[data-qa="create-account"]').click()
  }

  /** ------------------ Verification Methods ------------------ */

  verifyAccountCreated() {
    // Wait up to 10 seconds for confirmation message
    cy.get('h2.title.text-center', { timeout: 10000 })
      .should('contain.text', 'Account Created!')
  }

  continueAfterAccountCreated() {
    cy.get('a[data-qa="continue-button"]').click()
  }

  verifyUserLoggedIn(name) {
    cy.contains(`Logged in as ${name}`, { timeout: 10000 }).should('be.visible')
  }

  /** ------------------ Session Helpers ------------------ */

  saveSession() {
    // Save cookies for reuse in future tests
    cy.getCookies().then(cookies => {
      cy.wrap(cookies).as('userCookies')
    })
  }

  restoreSession() {
    cy.get('@userCookies').then(cookies => {
      cookies.forEach(cookie => {
        cy.setCookie(cookie.name, cookie.value)
      })
    })
  }
}

export default RegistrationPage
