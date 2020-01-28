const playwright = require('playwright')
const chai = require('chai')
const expect = chai.expect
const BASE_URL = 'http://todomvc.com/examples/react/#/'

// playwright variables
let page, browser, context

describe('TO DO APP TESTS - PLAYWRIGHT', () => {

    beforeEach(async () => {
        browser = await playwright['chromium'].launch({ headless: false })
        context = await browser.newContext()
        page = await context.newPage(BASE_URL)
    })

    afterEach(async function() {
        await page.screenshot({ path: `${this.currentTest.title.replace(/\s+/g, '_')}.png` })
        await browser.close()
    })

    it('List is loaded empty', async() => {
        const sel = 'ul.todo-list li'
        const list = await page.$$(sel)
        expect(list.length).to.equal(0)
    })

    it('Adds a new todo in empty list', async() => {
        await page.waitForSelector('input')
        const element = await page.$('input')
        await element.type('Practice microsoft playwright')
        await element.press('Enter')

        // check list of ToDo
        const sel = 'ul.todo-list li'
        await page.waitForSelector(sel)
        const list = await page.$$(sel)
        expect(list.length).to.equal(1)
        expect(await page.$eval(sel, node => node.innerText)).to.be.equal('Practice microsoft playwright')
    })
})