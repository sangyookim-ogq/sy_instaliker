console.log("Welcome to instaliker")
require("dotenv").config();
const p = require('puppeteer');


const inputText = async (page, selector, text) => {
  const input = await page.waitForSelector(selector)
  return await page.type(selector, text)

}

(async ()=> {
  console.log(process.env)
  const browser = await p.launch({headless: false})
  console.log("Launch Puppeteer Browser")
  const page = await browser.newPage()
  await page.goto(`https://www.instagram.com`)

  await inputText(page, 'input[name="username"]', process.env.ACCOUNT_USERNAME)
  
  // browser.close()
})()
