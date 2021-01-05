import { short, medium, long } from '../lib/timeouts'
import { mobile, tablet, desktop } from '../lib/devices'

describe('First test using WDIO', () => {

    it('Load google website', ()=>{

        browser.url('https://www.example.com/')
        browser.pause(3000)
        expect(browser).toHaveUrl('https://www.example.com/')
        expect(browser).toHaveTitle('Example Domain')

    })

    it('H1 is visible or not', () =>{
        const h1 = $('h1')
        h1.waitForExist()
        expect(h1).toBeVisible()
    })

    it('P is visible or not', () =>{
        const Page = $('p')
        Page.waitForExist()
        expect(Page).toBeVisible()
    })

    it('Link is visible or not', () =>{
        const Link = $('a')
        expect(Link).toHaveLink("https://www.iana.org/domains/example")
    })

    it('Get Element text', () =>{
        const text = $('h1').getText()
        console.log(text)
        const header = $('h1')
        header.waitForExist()
        expect(header).toHaveText('Example Domain')
    })

    it('Assert attribute value', () =>{
        browser.url('https://devexpress.github.io/testcafe/example/')
        browser.pause(3000)
        const button = $('#submit-button')
        button.waitForExist()
        expect(button).toHaveAttrContaining('type', 'submit')

    })

    it('Assert Value', () => {
        const button = $('#populate')
        button.waitForExist()
        expect(button).toHaveValue('Populate')
    })

    it('Save Screenshot', () => {
        browser.saveScreenshot('your-name.png')
    })
 
    it('Change Browser Viewport', () => {
        browser.setWindowSize(800, 600)
        browser.pause(long)
    })
 
    it('Set Mobile View', () => {
        browser.setWindowSize(mobile[0], mobile[1])
        browser.pause(short)
    })
 
    it('Set Tablet View', () => {
        browser.setWindowSize(tablet[0], tablet[1])
        browser.pause(short)
    })
 
    it('Set Desktop View', () => {
        browser.setWindowSize(desktop[0], desktop[1])
        browser.pause(short)
    })
})
