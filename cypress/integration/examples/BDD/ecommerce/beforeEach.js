beforeEach(function()
{

        //funcion para cargar datos
        cy.fixture("dataTestFrameWork").then(function (data) {
            this.data = data
        })

})
