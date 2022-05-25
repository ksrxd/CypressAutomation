/// <reference types="Cypress"/>
//importo locators desde PageObject
import locatorsFramework from "../pageObject/locatorsFramework"
import locatorsFramework from "../pageObject/locatorsFramework"



describe('Test Suite', function()
{
    
    before(function()
    {
        //funcion para cargar datos
        cy.fixture("dataTestFrameWork").then(function(data)
        {
            this.data = data
        })
    })


    it("Cargando datos desde json",function()
    {
            //creo objeto para cargar los locators
            const locatorsFramework = new locatorsFramework()

        cy.visit("https://rahulshettyacademy.com/angularpractice")
        cy.get("input[name='name']:nth-child(2)").type(this.data.name)
        cy.get("select").select(this.data.gender)
        //validar datos de un input
        cy.get(":nth-child(4) > .ng-untouched").should("have.value",this.data.name)

        cy.get("input[name='name']:nth-child(2)").should("have.attr", "minlength", "2")
        cy.get("#inlineRadio3").should("be.disabled")

        //navego a shop
        cy.get(":nth-child(2) > .nav-link").click()


        //cargando comando desde commands.js con loop sobre los webelements h4.card-title 
        
        //loop para cargar dataset desde un array (productName) en dataTestFrameWork.json
        
        this.data.productName.forEach(function(element)
        {
            console.log(element)
            cy.selectProduct(element)
        })

    })

})