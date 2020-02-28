module.exports = {
  'step one: navigate to telus': function (browser) {
    browser
      .url('https://www.telus.com/en/')
      .waitForElementVisible('body')
      .client.maximizeWindow();
      .assert.titleContains("Phones, Internet and TV on Canada's fastest network | TELUS")
  },
  'step two: choose homephone': function (browser) { 
  	browser
  		.assert.bodyContains('Shop our products and services')
  		.useXpath()
  		.assert.visible('//*[@id="app"]/div/div/section[3]/div/div[2]/div[4]/div/a/div/picture/img')
  		.click('//*[@id="app"]/div/div/section[3]/div/div[2]/div[4]/div/a/div/picture/img')
  },
  'step three: choose homephone lite plan': function (browser) { 
  	browser
  		.assert.bodyContains('Home Phone plans')
  		.useXpath()
  		.assert.visible('//*[@id="app"]/div/section[3]/div/div/div[1]/div/div/a')
  		.assert.visible('//*[@id="app"]/div/section[3]/div/div/div[2]/div/div/a')
  		.click('//*[@id="app"]/div/section[3]/div/div/div[2]/div/div/a')
  },
  'step four: enter address details': function (browser) {
  	browser
  		.assert.visible('input[type=text]')
        .setValue('//*[@id="autocomplete-form-address-google"]', "King's College Cir")
        .setValue('//*[@id="autocomplete-form-suite"]', "1")
        .click('//*[@id="autocomplete-form-submit"]')
        .click('//*[@id="manual"]/section/div/div[4]/section/div/a')
        .setValue('//*[@id="autocomplete-form-address-google"]', "Toronto")
        .setValue('//*[@id="autocomplete-form-suite"]', "1")
        .click('//*[@id="autocomplete-form-submit"]')
        .assert.visible('//*[@id="manual"]')
        .click('//*[@id="manual-form-submit"]')
        .assert.visible('//*[@id="choose"]')
        .click('//*[@id="choose-addresses-0"]')
        .click('//*[@id="choose-form-submit"]')
  },
  'step five: add to cart': function (browser) { 
  	browser
  		.assert.bodyContains('Home Phone Lite')
  		.assert.visible('//*[@id="app-mount"]/main/section/div/div[4]/div/div[1]/div[3]/div[1]/div')
  		.click('//*[@id="pdp-cta"]/div/button')
  		.assert.visible('//*[@id="configurator"]/div/div/div')
  		.click('//*[@id="review-button"]')
  },
  'step six: review cart': function (browser) {
  	browser
  		.assert.bodyContains('Order Details')
  		.assert.visible('//*[@id="app"]/div/div[3]/div[3]/div/div/div/div/div[2]/div')
  		.url('https://www.telus.com/en/checkout')
  		.assert.equals('//*[@id="root"]/main/div/div[2]/div[2]/div[2]/div/div[2]/div/div/div/div[2]/div[1]/div[2]/div/div/span', '$30.00')
  		.end
  },