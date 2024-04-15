const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  e2e: {
    'baseUrl':'https://consumersenergymanagement.ca/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
