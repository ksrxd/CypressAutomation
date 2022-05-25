/// <reference types="Cypress"/>


describe('My First Test Suite', function()
{
    it('Checkboxes', function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // be.checked: comprueba que la checkbox esta chekeada, "have.value" comprueba que el valor sea el esperado
        cy.get("#checkBoxOption1").check().should("be.checked").and("have.value", "option1")
        //descheckear box y comprobar que esta uncheck
        cy.get("#checkBoxOption1").uncheck().should("not.be.checked")
        //check a multiples boxes
        cy.get("input[type='checkbox']").check(["option2","option3"])







    })
it('Static Dropdowns', function()
{
    //test steps
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    // selecciono la opcion 2 del seolect setatico y compruebo que efectivamente se haya seleccionado
    cy.get("select").select("option2").should("have.value", "option2")
})
it('Dynamic dropdowns', function()
{
    //test steps
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //selecciono el box dinamico, escribo ind y selecciono la opcion correspondiente a india
    cy.get("#autocomplete").type("Ind")
    cy.get(".ui-menu-item div").each(($el, index, $list) => {
    if($el.text()==="India")
    {
        $el.click()
    }
    })
    //verifico que se selecciono india
    cy.get("#autocomplete").should("have.value", "India")
    
})
it('Visible & invisible elements', function()
{
    //test steps
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //selecciono el box dinamico, escribo ind y selecciono la opcion correspondiente a india
    cy.get("#displayed-text").should("be.visible")
    cy.get("#hide-textbox").click()
    cy.get("#displayed-text").should("not.be.visible")
    
})
it('Radio Buttons', function()
{
    //test steps
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.get("[value='radio2']").check().should("be.checked")
    
    
})

})