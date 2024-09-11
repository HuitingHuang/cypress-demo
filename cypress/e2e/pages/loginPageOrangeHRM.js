export class LoginPageOrangeHRM {
    
    enterUsername(username){
        cy.get('[name="username"]').type(username);
    }

    enterPassword(password){
        cy.get('[name="password"]').type(password);
    }

    clickLogin(){
        cy.get('.oxd-button').click();
    }

    login(username,password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }
}