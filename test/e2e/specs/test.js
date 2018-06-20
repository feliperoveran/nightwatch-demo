// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.hello')
      .pause(5000)
      .assert.containsText('h1', 'Welcome to Your Vue.js App')
      .assert.elementCount('img', 1)
      .end();
  },
  'demo test google': function (browser) {
    browser
      .url('http://google.com')
      .waitForElementPresent('body', 3000)
      .setValue('input[type=text]', ['nightwatch', browser.Keys.ENTER])
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
}
