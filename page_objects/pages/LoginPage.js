import base from '../pages/base'

class LoginPage extends base{

    get loginForm(){
        return $('#login_form')
    }

    get errorIdentifier(){
        return $('.alert-error')
    }

    loginFormIsVisible(){
        this.loginForm.waitForExist()
    }

    get usernameInput(){
        return $('#user_login')
    }

    get passwordInput(){
        return $('#user_password')
    }

    get submitButton(){
        return $('input[type="submit"]')
    }

    loginFormFill(username, password){
        this.usernameInput.setValue(username)
        this.passwordInput.setValue(password)
    }

    loginFormSubmit(){
        this.submitButton.click()
    }

    login(username, password){
        this.loginForm.waitForExist()
        this.usernameInput.setValue(username)
        this.passwordInput.setValue(password)
        this.submitButton.click()
    }

}

export default new LoginPage()