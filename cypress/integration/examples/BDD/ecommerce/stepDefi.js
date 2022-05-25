/// <reference types="Cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor"
import locatorsFramework from "../../../support/PageObject/locatorsFramework"
import ProductPage from "../../../support/ProductsPage"

const LocatorsFramework = new locatorsFramework()
const productPage = new ProductPage()

Given('I open Ecommerce page', function ()
{
    cy.visit(Cypress.env('url'))
})

When('I add items to Cart', function()
{

    LocatorsFramework.getShopTab().click()
    this.data.productName.forEach(function (element) {
        console.log(element)
        cy.selectProduct(element)
    })
    productPage.checkoutButton().click()

})


And("Validate the total prices", ()=>
{
    var sum = 0
        cy.get("tr td:nth-child(4) strong").each(($el, index, $list) => {
            const amount = $el.text()
            var res = amount.split(" ")
            var res = res[1].trim()
            sum = Number(sum) + Number(res)

        }).then(function () {
            cy.log(sum)

        })
        //obtengo el valor que aparece en la web para compararlo con lo sumado anteriormente
        cy.get("h3 strong").then(function (element) {
            const amount = element.text()
            var res = amount.split(" ")
            var total = res[1].trim()
            expect(sum).to.equal(Number(total))
        })
})


Then("select the country submit and verify Thank You message", ()=>
{
    cy.contains("Checkout").click()
    // escribo en suggest box
    cy.get("#country").type("India")
    //selecciono el resultado 
    cy.get(".suggestions > ul > li > a").click()
    //checkbox
    cy.get("#checkbox2").click({ force: true })

    //selecciono purchase
    cy.get("input[type='submit']").click()
    //valido mensaje de compra correcta
    //cy.get(".alert").should("have.text", "Success! Thank you! Your order will be delivered in next few weeks :-).")
    cy.get(".alert").then(function (element) {
        const actualText = element.text()
        expect(actualText.includes("Success")).to.be.true
    })
})


//2mnd scenarionpm
When("I fill the form details", function(dataTable)
{
    LocatorsFramework.getEditBox().type(dataTable.rawTable[1][0])
    LocatorsFramework.getGender().select(dataTable.rawTable[1][1])
}) 
Then("validate the forms behaviour", function()
{
    LocatorsFramework.getTwoWayDataBinding().should("have.value", this.data.name)

    LocatorsFramework.getEditBox().should("have.attr", "minlength", "2")
    LocatorsFramework.getEnterpreneur().should("be.disabled")
})
And("select the shop page", ()=>
{
    LocatorsFramework.getShopTab().click()
})



