console.log("Welcome to instaliker")
const p = require('puppeteer');


(async ()=> {
  const ACCOUNT_USERNAME = "IAMABOT"
  const browser = await p.launch({headless: false})
  console.log("Launch Puppeteer Browser")
  const page = await browser.newPage()
  await page.goto(`https://www.instagram.com`)
  const inputUsernameSelector = 'input[name="username"'
  const inputUsername = await page.waitForSelector(inputUsernameSelector)
  console.log(`inputUsername`, inputUsername)
  await page.type(inputUsernameSelector, ACCOUNT_USERNAME)
  
  // browser.close()
})()
