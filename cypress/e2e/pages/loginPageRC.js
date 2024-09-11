export class LoginPageRC {
    
    enterUsername(username){
        cy.get('#credential').type(username);
    }

    enterPassword(password){
        cy.get('#password').type(password);
    }

    clickLogin(){
        cy.get('.btn-primary').click();
    }

    login(username,password) {
        this.enterUsername(username);
        cy.contains('Next').click();
        this.enterPassword(password);
        this.clickLogin();
    }
}