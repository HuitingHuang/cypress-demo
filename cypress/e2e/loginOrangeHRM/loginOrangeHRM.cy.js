/// <reference types="cypress" />
import { LoginPageOrangeHRM } from "../pages/loginPageOrangeHRM";

const loginPage = new LoginPageOrangeHRM();
let testData = {};

before(() => {
    cy.readFile('./cypress/e2e/loginOrangeHRM/loginOrangeHRM_testData.json').then((data) => {
        testData = data;
    })
});

describe('OrangeHRM login tests', { tags: ['@login', '@loginOHRM'] }, () => {

    beforeEach(() => {
        cy.log('1. Go to the OrangeHRM login page');
        cy.visit("https://opensource-demo.orangehrmlive.com/", {failOnStatusCode: false});
        cy.log('Go to the login page successfully');
    });

    it("Login with valid username and password", { tags: '@loginOHRM-normal' }, () => {
        cy.log('2. Enter the username and password and login');
        loginPage.login(testData.test1.username, testData.test1.password);
        cy.contains(testData.test1.expectedValue, { timeout: 10000 }).should('be.visible');
        cy.log("Login into the account successfully");
    } );

    it("Login with valid username and invalid password", { tags: '@loginOHRM-error' }, () => {
        cy.log('2. Enter the username and password and login');
        loginPage.login(testData.test2.username, testData.test2.password);
        cy.contains(testData.test2.expectedValue, { timeout: 10000 }).should('be.visible');
        cy.log("The error message shows successfully");
    } )
});


