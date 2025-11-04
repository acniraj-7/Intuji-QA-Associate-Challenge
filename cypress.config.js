const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com', // <-- Add your website URL here
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
