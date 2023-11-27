const { defineConfig } = require("cypress");
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)    //report plugin
    },
    baseUrl: 'https://develop.d2vr74cwsk1kb.amplifyapp.com/contact',
  },
});
//npm run cypress:run:chrome