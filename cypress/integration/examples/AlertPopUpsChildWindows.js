/// <reference types="Cypress"/>


describe('My First Test Suite', function()
{
    it('Alerts', function() {
          //test steps
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get("#alertbtn").click()



    //manage alert
    cy.on("window:alert",(str)=>
    {
        //Mocha
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
    cy.get("[value='Confirm']").click()
    cy.on("window:confirm",(str)=>
    {
        //Mocha
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })






    })

it('Switch tabs scope', function()
{
    //Cypress no soporta el cambio a otras tabs
    // Workaround: edit el DOM para que el link se abra en la misma tab (eliminar target='_blank' del DOM)
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get("#opentab").invoke('removeAttr','target').click();


})
it('Manage Browser', function()
{
    //Cypress no soporta el cambio a otras tabs
    // Workaround: edit el DOM para que el link se abra en la misma tab (eliminar target='_blank' del DOM)
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get("#opentab").invoke('removeAttr','target').click();


    //validar que se navego a la nueva pagina con cy.url y assert should
    cy.url().should('include', 'rahulshettyacademy')
    //go back
    cy.go('back')
    //go forward
    cy.go('forward')

})
})
