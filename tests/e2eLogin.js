import LoginPage from '../page_objects/pages/LoginPage'
import Navbar from '../page_objects/components/Navbar'
import App from '../page_objects/pages/App'
import * as dataHelper from '../lib/data-helper'

//End to end Login Page
describe('E2E Tests - Login / Logout Flow', () => {
    it('Should not login with invalid credentials', () => {
        App.openHomePage()
        Navbar.isSignButtonVisible()
        LoginPage.loginFormIsVisible()
        LoginPage.loginFormFill(dataHelper.getRandomName, dataHelper.getRandomName)
        LoginPage.loginFormSubmit()
        const message = LoginPage.errorIdentifier
        expect(message).toHaveText('Login and/or password are wrong.')
    })

    it('Should login with valid credentials', () => {
        App.openHomePage()
        Navbar.isSignButtonVisible()
        LoginPage.loginFormIsVisible()
        LoginPage.loginFormFill('username', 'password')
        LoginPage.loginFormSubmit()
        Navbar.isNavTabIsVisible()
    })

    it('Should logout from app', () => {
        App.logoutPage()
        Navbar.isNavPageIsVisible()
    })
})