const playwright = require('playwright');

// Will trhow an error because the input has not been loaded yet to be interacted
(async () => {
  const browser = await playwright['chromium'].launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage('http://todomvc.com/examples/react/#/');
  const element = await page.$('input')
  await element.type('Practice microsoft playwright')
  await page.screenshot({ path: `chromium-ex_02.png` });
  await browser.close();
})();