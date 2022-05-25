/// <reference types="Cypress"/>
//importo locators desde PageObject

import locatorsFramework from "../../support/PageObject/locatorsFramework.js"
import ProductPage from "../../support/PageObject/ProductsPage.js"



describe('Test Suite', function () {

    before(function () {
        //funcion para cargar datos
        cy.fixture("dataTestFrameWork").then(function (data) {
            this.data = data
        })
    })


    it("Cargando datos desde json", function () {
        //commando para timeout especifico para el test
        //Cypress.config("defaultCommandTimeout", 8000)
        //creo objeto para cargar los locators
        const LocatorsFramework = new locatorsFramework()
        const productPage = new ProductPage()

        cy.visit(Cypress.env('url'))
        LocatorsFramework.getEditBox().type(this.data.name)
        LocatorsFramework.getGender().select(this.data.gender)
        //validar datos de un input
        LocatorsFramework.getTwoWayDataBinding().should("have.value", this.data.name)

        LocatorsFramework.getEditBox().should("have.attr", "minlength", "2")
        LocatorsFramework.getEnterpreneur().should("be.disabled")

        //navego a shop
        LocatorsFramework.getShopTab().click()


        //cargando comando desde commands.js con loop sobre los webelements h4.card-title 

        //loop para cargar dataset desde un array (productName) en dataTestFrameWork.json

        this.data.productName.forEach(function (element) {
            console.log(element)
            cy.selectProduct(element)
        })
        productPage.checkoutButton().click()

        //sumar total de precios de los productos seleccionados y compararlo con el total que figura en la web
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

})