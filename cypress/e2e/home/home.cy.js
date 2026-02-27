context('Home', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8000')
    })

    it('Mobile: Home', () => {
        cy.viewport(375, 667)

        cy.get('.parent-info')
            .should('have.css', 'display', 'flex')
            .should('have.css', 'justify-content', 'center')
            .should('have.css', 'align-items', 'center')
            .should('have.css', 'height', '667px')

        cy.get('.parent-info .child-info h1')
            .should('have.class', 'macondo-regular')
            .should('have.css', 'color', 'rgb(55, 79, 47)')
            .should('have.css', 'font-size', '40px')
            .should('have.css', 'text-align', 'center')
            .should('have.css', 'padding', '13px 0px')
            .should('have.css', 'margin', '0px')

        cy.get('.parent-info .child-info p')
            .should('have.class', 'macondo-regular')
            .should('have.css', 'color', 'rgb(55, 79, 47)')
            .should('have.css', 'font-size', '16px')
            .should('have.css', 'line-height', '24px')
            .should('have.css', 'text-align', 'center')
            .should('have.css', 'margin', '0px')

        cy.get('.parent-info .child-info .buttons')
            .should('have.css', 'margin-top', '20px')
            .should('have.css', 'display', 'flex')
            .should('have.css', 'justify-content', 'center')
            .should('have.css', 'gap', '15px')

        cy.get('.parent-info .child-info .buttons .button')
            .should('have.css', 'font-size', '16px')
            .should('have.css', 'text-decoration', 'none')
            .should('have.css', 'color', 'rgb(233, 228, 216)')
            .should('have.css', 'background-color', 'rgb(55, 79, 47)')
            .should('have.css', 'padding', '12px 35px')
            .should('have.css', 'border-radius', '5px')

        cy.get('.parent-info .child-info .buttons .button').eq(1)
            .should('have.attr', 'href', 'mailto:saharafathelbab1@gmail.com')

        cy.get('#light-dark-toggle i').click()


        cy.get('.parent-info .child-info h1')
            .should('have.css', 'color', 'rgb(233, 228, 216)')

        cy.get('.parent-info .child-info p')
            .should('have.css', 'color', 'rgb(233, 228, 216)')

        cy.get('.parent-info .child-info .buttons .button')
            .should('have.css', 'color', 'rgb(55, 79, 47)')
            .should('have.css', 'background-color', 'rgb(222, 248, 213)')

        cy.get('#light-dark-toggle i').click()

    })

    it('Desktop: Home', () => {
        cy.viewport(768, 667)

        cy.get('.parent-info .child-info h1')
            .should('have.css', 'font-size', '56px')

        cy.get('.parent-info .child-info p')
            .should('have.css', 'font-size', '20.8px')

        cy.get('.parent-info .child-info .buttons')
            .should('have.css', 'margin-top', '20px')
            .should('have.css', 'display', 'flex')
            .should('have.css', 'justify-content', 'center')
            .should('have.css', 'gap', '15px')
        
        cy.get('.parent-info .child-info .buttons .button')
            .should('have.css', 'font-size', '20.8px')

        cy.get('#light-dark-toggle i').click()

        cy.get('.parent-info .child-info .buttons .button')
            .should('have.css', 'background-color', 'rgb(222, 248, 213)')

        cy.get('#light-dark-toggle i').click()

    })
})