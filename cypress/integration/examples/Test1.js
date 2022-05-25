/// <reference types="Cypress"/>


describe('My First Test Suite', function()
{
    it('My first test case', function() {

        //test steps for test case

        //abro linnk
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        //get: finds the locator
        cy.get("form input").type('ca');
        
        //wait
        cy.wait(2000);

          // visible muestra solo los elementos visibles
        cy.get(".product:visible").should("have.length", 4);


        //parend child chaining
        //redefino el locator con nombre propietario productLocator
        cy.get(".products").as('productLocator')
        cy.get("@productLocator").find(".product").should("have.length", 4)
        //add to cart from a parent element 
        cy.get("@productLocator").find(".product").eq(2).contains("ADD TO CART").click().then(function()
        {
            console.log('sf')
        });



        // add to cart filtering with text with a loop
        cy.get("@productLocator").find(".product").each(($el, index,$list) => {
            //variable que extrae el texto del elemento
        const textVegetable = $el.find("h4.product-name").text();
        // compruebo que la variable tenga el texto esperado (cashews) y si lo encuentra presiono add to cart
        if(textVegetable.includes("Cashews"))
        {
            cy.wrap($el).find("button").click();
        }
        })

        //assert if logo text is correctly dispalyed
        cy.get(".brand").should("have.text", "GREENKART")

        //alamacenar el webelement del logo y extraer texto
        cy.get('.brand').then(function(logoelement)
        {
            //imprimo el texto en consla
            cy.log(logoelement.text());
        });
        const logo = cy.get(".brand")
       // cy.log(cy.get(".brand").text())
       




    })
it('My second test case', function()
{
    //test steps

})

})