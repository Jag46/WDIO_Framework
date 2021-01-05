import LoginPage from '../page_objects/pages/LoginPage'
import Navbar from '../page_objects/components/Navbar'
import App from '../page_objects/pages/App'

//End to end Payment Page
describe('E2E Tests - Pay', () => {
	it('Should log into application', () => {
		App.openLoginPage()
		LoginPage.login('username', 'password')
		Navbar.isNavTabIsVisible()
	})
 
	it('Should make payment', () => {
		$('#pay_bills_tab').click()
		const selectPayee = $('#sp_payee')
		selectPayee.waitForExist()
		selectPayee.selectByAttribute('value', 'apple')
		const selectAccount = $('#sp_account')
		selectAccount.waitForExist()
		selectAccount.selectByVisibleText('Loan')
		$('#sp_amount').setValue('500')
		$('#sp_date').setValue('2020-03-31')
		$('#sp_description').setValue('Test')
		$('#pay_saved_payees').click()
		const message = $('#alert_content')
		expect(message).toHaveText('The payment was successfully submitted.')
	})
})