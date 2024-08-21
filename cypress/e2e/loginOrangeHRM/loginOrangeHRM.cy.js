/// <reference types="cypress" />
import { LoginPage } from "../pages/loginPage";

const loginPage = new LoginPage();
let testData = {};

before(() => {
    cy.readFile('./cypress/e2e/loginOrangeHRM/loginOrangeHRM_testData.json').then((data) => {
        testData = data;
    })
});

describe('OrangeHRM login tests', () => {

    beforeEach(() => {
        cy.log('1. Go to the OrangeHRM login page');
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.log('Go to the login page successfully');
    });

    it("Login with valid username and password", () => {
        cy.log('2. Enter the username and password and login');
        loginPage.enterUsername('[name="username"]', testData.test1.username);
        loginPage.enterPassword('[name="password"]', testData.test1.password);
        loginPage.clickLogin('.oxd-button');
        cy.contains(testData.test1.expectedValue, { timeout: 10000 }).should('be.visible');
        cy.log("Login into the account successfully");
    } );

    it("Login with valid username and invalid password", () => {
        cy.log('2. Enter the username and password and login');
        loginPage.enterUsername('[name="username"]', testData.test2.username);
        loginPage.enterPassword('[name="password"]', testData.test2.password);
        loginPage.clickLogin('.oxd-button');
        cy.contains(testData.test2.expectedValue, { timeout: 10000 }).should('be.visible');
        cy.log("The error message shows successfully");
    } )
});


