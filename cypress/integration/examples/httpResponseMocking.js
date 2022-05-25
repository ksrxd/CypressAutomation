/// <reference types="Cypress"/>


describe('Mi frist Test', function()
{

    it('test case', function()
    {

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")

        // {request} - {mock}
        cy.intercept({
            method :'GET',
            url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        }, 
        {statusCode : 200,
        body : [
            {
                "book_name": "RestAssured with Java",
                "isbn": "RSU",
                "aisle": "2301"   }   ]
        
        }).as('bookretrievals')
        cy.get("button[class='btn btn-primary']").click()
         //validating if the correct backend data is being displayed on the frontend

        //length of the response array should match the frontend display
        cy.wait('@bookretrievals').should(({request,response})=>
        {
            cy.get('tr').should('have.length', response.body.length+1)
            
        })
        cy.get('p').should('have.text', 'Oops only 1 Book available')


    })

})