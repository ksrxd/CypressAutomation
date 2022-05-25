/// <reference types="Cypress"/>
import 'cypress-iframe'


describe('Test Suite', function()
{
    it('Handling Child window with href value', function() 
    {
          //test steps
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //extraigo url desde un webelement y navego hacia la misma
    //esto solo funciona si la url forma parte del dominio original X.com > X.com/X. no funciona para x.com > y.com
    cy.get("#opentab").then(function(el)
    {
        const url = el.prop("href")
        cy.visit(url)
    })

        

    })
 
it('handling frames', function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //cargo iframe con plugin cypress-iframe
    cy.frameLoaded("#courses-iframe")
    //cambio cypress a iframe mode y busco el elemento deseado (en indice 0)
    cy.iframe().find("a[href*='mentorship']").eq(0).click()
    //testeo que efectivamente se ha cargado lo solicitado con un assert
    cy.iframe().find("h1[class*='pricing-title']").should("have.length", 2)


})
})
