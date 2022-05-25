/// <reference types="Cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })
describe('JWT Session', ()=>
{
    it('Logeando con token', async()=>
    {
        //login con comando custom LoginApi 
        cy.LoginApi().then(function()
        {
            //ejecuto onBeforeLoad para inyectar el token antes de visitar la pagina
            cy.visit("https://rahulshettyacademy.com/client", {
            onBeforeLoad : function(window)
            {
                //seteo token en localStorage extraido con funcion loginApi
                window.localStorage.setItem('token', Cypress.env('token'))
            }
            })
        })

        //agrego producto al carrito
        cy.get(".card-body button:last-of-type").eq(1).click();
        //click en carrito
        cy.get("[routerlink*='cart']").click()
        //click checkoeut
        cy.contains("Checkout").click()
        //country select con filtrado

        cy.get("[placeholder*='Country']").type("ind")
        cy.wait(5000)

        cy.get(".ta-results button").each(($el, index, $list) =>
        {

            if($el.text() === "India")
            {
                cy.get
                cy.wrap($el).click({force:true})
            }
        })
        //placeorder
        cy.get(".btnn").click()
        cy.wait(2000)
        cy.get(".order-summary button").click()




    })
})