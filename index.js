const puppeteer = require('puppeteer');
const path = './react.pdf';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/');
  console.log('ok')
  await page.emulateMedia('screen');
  await page.pdf({
    path,
    printBackground: true,
    width: '1280px',
    height: '1024px'
  });
  console.log(`pdf created at ${ path }`)
  await browser.close();
})()