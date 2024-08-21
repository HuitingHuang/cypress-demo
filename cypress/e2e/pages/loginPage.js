export class LoginPage {
    
    enterUsername(username_textbox, username){
        cy.get(username_textbox).type(username);
    }

    enterPassword(password_textbox, password){
        cy.get(password_textbox).type(password);
    }

    clickLogin(login_button){
        cy.get(login_button).click();
    }
}