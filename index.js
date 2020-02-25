const puppeteer = require('puppeteer');
const path = './cv.pdf';

const height = 842 * 2.4;
const width = 595 * 2.4;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/');
  console.log('ok')
  await page.emulateMedia('screen');
  await page.pdf({
    path,
    printBackground: true,
    width,
    height
  });
  console.log(`pdf created at ${ path }`)
  await browser.close();
})()