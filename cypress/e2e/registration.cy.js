
import RegistrationPage from '../pages/RegistrationPage'
import { faker } from '@faker-js/faker'

describe('AutomationExercise Registration', () => {
  const regPage = new RegistrationPage()

  // We'll store user data here to reuse in other tests
  let user = {}

  it('registers a new user successfully and saves session', () => {
    // Generate random user data using Faker
    user = {
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(8),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      company: faker.company.name(),
      address1: faker.address.streetAddress(),
      address2: faker.address.secondaryAddress(),
      country: 'Canada', // Example, pick a valid dropdown option
      state: faker.address.state(),
      city: faker.address.city(),
      zipcode: faker.address.zipCode(),
      mobile: faker.phone.number('##########')
    }

    // Step 1: Signup
    regPage.visit()
    regPage.enterName(user.name)
    regPage.enterEmail(user.email)
    regPage.clickSignupButton()

    // Step 2: Fill account & address info
    regPage.selectTitle('Mr')
    regPage.enterPassword(user.password)
    regPage.selectDateOfBirth('10', 'May', '1990')
    regPage.checkNewsletter()
    regPage.checkOffers()
    regPage.enterFirstName(user.firstName)
    regPage.enterLastName(user.lastName)
    regPage.enterCompany(user.company)
    regPage.enterAddress1(user.address1)
    regPage.enterAddress2(user.address2)
    regPage.selectCountry(user.country)
    regPage.enterState(user.state)
    regPage.enterCity(user.city)
    regPage.enterZipcode(user.zipcode)
    regPage.enterMobileNumber(user.mobile)

    // Submit form and verify
    regPage.submitAccountCreation()
    regPage.verifyAccountCreated()
    regPage.continueAfterAccountCreated()
    regPage.verifyUserLoggedIn(user.name)

    // Save session for reuse in other tests
    cy.session(user.email, () => {
      cy.visit('/login')
      cy.get('input[data-qa="login-email"]').type(user.email)
      cy.get('input[data-qa="login-password"]').type(user.password)
      cy.get('button[data-qa="login-button"]').click()
      regPage.verifyUserLoggedIn(user.name)
    })
  })

  // Optionally, save user data in Cypress env to use in other specs
  after(() => {
    Cypress.env('registeredUser', user)
  })
})
