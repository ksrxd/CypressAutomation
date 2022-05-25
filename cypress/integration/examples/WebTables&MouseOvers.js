/// <reference types="Cypress"/>


describe('Test Suite', function()
{
    it('Handling tables', function() 
    {
          //test steps
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //loop para obtener el curso especifico
        cy.get("tr td:nth-child(2)").each(($el, index, $list)=>
        {
                const text = $el.text()
                if(text.includes("Python"))
                {
                    cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
                    {
                      const priceText =  price.text()
                      expect(priceText).to.equal("25")
                    })

                }               
            })

        })

    })
 
it('Mouse over', function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get("div.mouse-hover-content").invoke("show")
    cy.contains("Top").click({force:true})
    cy.url().should("include", "top")

})

