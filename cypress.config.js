const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    apiUrl: 'http://localhost:8000',
  },
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:3000',
  },
})
