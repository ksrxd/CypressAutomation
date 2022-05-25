/// <reference types="Cypress"/>


describe('Mi frist Test', function()
{

    it('test case', function()
    {

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")

        // intercept el url de la response
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req)=>
        {req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
        req.continue((res)=>
        {
            //expect(res.statusCode).to.equal(403)
        })
        
    }).as('dummyurl')
    cy.get("button[class='btn btn-primary']").click()
    cy.wait('@dummyurl')


    })

})