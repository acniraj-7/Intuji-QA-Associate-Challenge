import RegistrationPage from '../pages/RegistrationPage'
import { faker } from '@faker-js/faker'

describe('AutomationExercise Registration', () => {
  const regPage = new RegistrationPage()

  it('registers a new user successfully', () => {
    // Generate random user data using Faker
    const name = faker.name.firstName()
    const email = faker.internet.email()
    const password = faker.internet.password(8)
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const company = faker.company.name()
    const address1 = faker.address.streetAddress()
    const address2 = faker.address.secondaryAddress()
    const country = 'Canada' // Example, choose valid option from dropdown
    const state = faker.address.state()
    const city = faker.address.city()
    const zipcode = faker.address.zipCode()
    const mobile = faker.phone.number('##########')

    // Step 1: Signup
    regPage.visit()
    regPage.enterName(name)
    regPage.enterEmail(email)
    regPage.clickSignupButton()

    // Step 2: Fill account & address info
    regPage.selectTitle('Mr')
    regPage.enterPassword(password)
    regPage.selectDateOfBirth('10', 'May', '1990')
    regPage.checkNewsletter()
    regPage.checkOffers()
    regPage.enterFirstName(firstName)
    regPage.enterLastName(lastName)
    regPage.enterCompany(company)
    regPage.enterAddress1(address1)
    regPage.enterAddress2(address2)
    regPage.selectCountry(country)
    regPage.enterState(state)
    regPage.enterCity(city)
    regPage.enterZipcode(zipcode)
    regPage.enterMobileNumber(mobile)

    // Submit form and verify
    regPage.submitAccountCreation()
    regPage.verifyAccountCreated()
    regPage.continueAfterAccountCreated()
    regPage.verifyUserLoggedIn(name)
  })
})
