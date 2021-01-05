import LoginPage from '../page_objects/pages/LoginPage'
import Navbar from '../page_objects/components/Navbar'
import App from '../page_objects/pages/App'

describe('E2E Tests - Transaction filter', () => {
	it('Should log into application', () => {
		App.openLoginPage()
		LoginPage.login('username', 'password')
		Navbar.isNavTabIsVisible()
	})
 
	it('Search for test transaction', () => {
        $('#account_activity_tab').click()
        $('#tabs > ul > li:nth-child(2) > a').waitForExist()
        $('#tabs > ul > li:nth-child(2) > a').click()
        $('#aa_description').waitForExist()
        $('#aa_description').setValue('Test')
        $('button[type="submit"]').click()
        $('#filtered_transactions_for_account').waitForExist()
        const message = $('.well')
        expect(message).toHaveText('No results.')

	})
})