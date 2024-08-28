const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "89xi48",

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: true
  },
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 5000,
    specPattern: process.env.SPEC_FILES && process.env.SPEC_FILES.length > 0 ? process.env.SPEC_FILES.split(',') : undefined,
    retries: {
      runMode: 2,   
      openMode: 0,  
    },
    env: {
      "grepTags": process.env.TAGS && process.env.TAGS.length > 0 ? process.env.TAGS : undefined,
      "grepFilterSpecs": true
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },
});
