import App from '../page_objects/pages/App'
import LoginPage from '../page_objects/pages/LoginPage'
import Navbar from '../page_objects/components/Navbar'
import { browser } from '../lib/config'

//End to end to Help Page
describe('E2E Tests - help section', () => {
	it('Should log into application', () => {
                App.openLoginPage()
		LoginPage.login('username', 'password')
		Navbar.isNavTabIsVisible()
	})
 
	it('Search for test transaction', () => {
        $('.icon-cog').click()
        $('#help_link').waitForExist()
        $('#help_link').click()
        //browser.waitAndClick('#help_link')
        $('.span8').waitForExist()
        const message1 = $('.span8 > h3')
        expect(message1).toHaveText('How do I log into my account?')
        $('*=transfer funds').click()
        expect(message1).toHaveText('How do I transfer funds?')
        $('*=pay bills').click()
        expect(message1).toHaveText('How do I pay bills?')
	})
})