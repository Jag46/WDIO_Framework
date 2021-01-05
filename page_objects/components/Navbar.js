import base from '../pages/base'

class Navbar extends base{

    get signButton(){
        return $('#signin_button')
    }

    isSignButtonVisible(){
        this.signButton.waitForExist()
        this.signButton.click()
    }

    get navTabIdentifier(){
        return $('.nav-tabs')
    }

    isNavTabIsVisible(){
        this.navTabIdentifier.waitForExist()  
    }

    get navPageIdentifier(){
        return $('#pages-nav')
    }

    isNavPageIsVisible(){
        this.navPageIdentifier.waitForExist()
    }


}

export default new Navbar()