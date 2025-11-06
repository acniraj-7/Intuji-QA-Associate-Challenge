const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com', // Your website URL
    screenshotsFolder: "cypress/screenshots", // Folder to save screenshots
    screenshotOnRunFailure: true, // Automatically capture screenshots on test failures
    video: false, // Optional: disable video recording
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // You can add more plugins or intercepts if needed
    },
  },
});
