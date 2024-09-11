/// <reference types="cypress" />
import { LoginPageRC } from "../pages/loginPageRC";

const loginPage = new LoginPageRC();
let testData = {};

before(() => {
    cy.readFile('./cypress/e2e/loginRC/loginRC_testData.json').then((data) => {
        testData = data;
    });
});

describe('RingCentral Login Test', { tags: ['@login', '@loginRC'] }, () => {
    
    it("Login with valid username and password", { tags: '@loginRC-normal' }, () => {
        cy.log('1. Go to the Rincentral app login page');
        cy.visit("https://login.ringcentral.com/", {failOnStatusCode: false});
        cy.log('Go to the login page successfully');
        
        cy.log('2. Enter the username and password and login');
        loginPage.login(testData.test.username, testData.test.password);
        cy.contains(testData.test.expectedValue, { timeout: 10000 }).should('be.visible');
        cy.log("Login into the account successfully");
    } )

})


