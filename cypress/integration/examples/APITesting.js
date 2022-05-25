/// <reference types="Cypress"/>


describe('Mi frist Test', function()
{

    it('test case', function()
    {
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
            "name":"Learn Appium Automation with Java",
            "isbn":"bcww69dss",
            "aisle":"22s7",
            "author":"John foe"
        }).then(function(response)
        {
            expect(response.body).to.have.property("Msg", "successfully added")
            expect(response.status).to.eq(200)
        })
       


    })

})