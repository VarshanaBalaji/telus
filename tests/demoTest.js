module.exports = {
  'step one: navigate to telus': function (browser) {
    browser
      .url('https://www.telus.com/en/')
      .assert.urlContains('www.telus.com')
      .waitForElementVisible('body')
      .assert.titleContains("Phones, Internet and TV on Canada's fastest network | TELUS")
  },
  'step two: choose homephone': function (browser) { 
    browser
      .useXpath()
      .click("//h3[contains(text(),'Home Phone')]")
  },
  'step three: choose homephone lite plan': function (browser) { 
    browser
      .useXpath()
      .assert.visible("//h3[text()='Home Phone']")
      .assert.visible("//h3[text()='Home Phone Lite']")
      .click("//a[contains(text(),'Order Home Phone Lite')]")
  },
  'step four: enter address details and add to cart': function (browser) {
    browser
      .useXpath()
      .waitForElementVisible('/html/body/main/div/div/section/div/section/div/div[2]/section/div/div/div/div/div/form/div/section[1]/div/section[1]/div/div[2]/input',10000)
      .setValue('/html/body/main/div/div/section/div/section/div/div[2]/section/div/div/div/div/div/form/div/section[1]/div/section[1]/div/div[2]/input', "Templeton Station Rd, Richmond, BC, Canada")
      .setValue('/html/body/main/div/div/section/div/section/div/div[2]/section/div/div/div/div/div/form/div/section[1]/div/section[2]/div/div[2]/input', "1")
      .click("//button[@id='autocomplete-form-submit']")
      .waitForElementVisible("//div[@class='style__CartButtonContainer-xhejrr-2 QAoHU']", 30000)
      .click("//div[@class='style__CartButtonContainer-xhejrr-2 QAoHU']//button[@type='button']")
   },
   'step five: Review Cart': function (browser) { 
      browser
        .useXpath()
        .click("//button[@id='review-button']")
        .assert.visible("//a[contains(text(),'Home Phone Lite')]")
        .assert.visible("//strong[contains(text(),'Home Phone')]")
        .assert.visible("//a[@class='Button__StyledButton-sa7xo3-0 sc-VigVT kGQlDS']")
        .assert.visible("//span[contains(text(),'Continue shopping')]")
        .pause(4000)
        .end();
   }
};