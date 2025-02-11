/// <reference types="Cypress" />
//cypress-Spec file
import DevLogin from '../../support/pageObjects/DevLogin';

describe('My First Test Suite',function()
{
    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })


    it('My First TestCase', function(){
        //test steps
       
        cy.visit("https://hirelab.appexert.com/login/developers")
        const obj = new DevLogin()
        obj.login(this.data.email, this.data.password)
        //assert if text is correctly displayed
        cy.contains('We are so excited to have you onboard. We will help you with career goal').should('be.visible')
        // to print on log
        cy.get('.md\\:w-\\[63\\%\\] > :nth-child(2)').then(function(message){
            cy.log(message.text())
        })




    })

})
