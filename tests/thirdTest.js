module.exports = {
  'step one: navigate to telus': function (browser) {
    browser
      .url('https://www.telus.com/en/')
      .waitForElementVisible('body')
      .assert.titleContains("Phones, Internet and TV on Canada's fastest network | TELUS")
  },
  'step two: choose homephone': function (browser) { 
    browser
      .useXpath()
      .click('//*[@id="app"]/div/div/section[3]/div/div[2]/div[4]/div/a/div/picture/img')
      .useCss()
      .waitForElementVisible('body')
  },
  'step three: choose homephone lite plan': function (browser) { 
    browser
      .useXpath()
      .assert.visible('//*[@id="app"]/div/section[3]/div/div/div[1]/div/div/a')
      .assert.visible('//*[@id="app"]/div/section[3]/div/div/div[2]/div/div/a')
      .click('//*[@id="app"]/div/section[3]/div/div/div[2]/div/div/a')
      .useCss()
      .waitForElementVisible('body')
  },
  'step four: enter address details': function (browser) {
    browser
      .useXpath()
      .setValue('//*[@id="autocomplete-form-address-google"]', "King's College Cir")
      .setValue('//*[@id="autocomplete-form-suite"]', "1")
      .click('//*[@id="autocomplete-form-submit"]')
      .click('//*[@id="manual"]/section/div/div[4]/section/div/a')
      .setValue('//*[@id="autocomplete-form-address-google"]', "Toronto")
      .setValue('//*[@id="autocomplete-form-suite"]', "1")
      .click('//*[@id="autocomplete-form-submit"]')
      .click('//*[@id="manual-form-submit"]')
      .click('//*[@id="choose-addresses-0"]')
      .click('//*[@id="choose-form-submit"]')
  },
  'step five: add to cart': function (browser) { 
    browser
      .useCss()
      .waitForElementVisible('body')
      .pause(7000)
      .useXpath()
      .assert.visible('//*[@id="app-mount"]/main/section/div/div[4]/div/div[1]/div[3]/div[1]/div')
      .click('//*[@id="pdp-cta"]/div/button')
      .waitForElementVisible('body')
      .assert.visible('//*[@id="configurator"]/div/div/div')
      .click('//*[@id="review-button"]')
      .useCss()
      .waitForElementVisible('body')
  },
  'step six: review cart': function (browser) {
    browser
      .useXpath()
      .assert.visible('//*[@id="app"]/div/div[3]/div[3]/div/div/div/div/div[2]/div')
      .url('https://www.telus.com/en/checkout')
      .assert.equals('//*[@id="root"]/main/div/div[2]/div[2]/div[2]/div/div[2]/div/div/div/div[2]/div[1]/div[2]/div/div/span', '$30.00')
      .end()
  }
};