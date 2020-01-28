const playwright = require('playwright');

(async () => {
  const browser = await playwright['chromium'].launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage('http://todomvc.com/examples/react/#/');
  await page.waitForSelector('input')
  const element = await page.$('input')
  await element.type('Practice microsoft playwright')
  await page.screenshot({ path: `chromium-ex_03.png` });
  await browser.close();
})();