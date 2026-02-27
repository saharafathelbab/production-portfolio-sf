context('Footer', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8000/about-me.html')
    })

    it('Footer', () => {
        cy.viewport(375, 667)

        cy.get('#additional-links')
            .should('have.css', 'padding', '0px 20px')
            .should('have.css', 'align-self', 'end')

        cy.get('#additional-links .parent-info')
            .should('have.css', 'margin-top', '40px')

        cy.get('#additional-links .parent-info .child-info .buttons')
            .should('have.css', 'display', 'flex')
            .should('have.css', 'justify-content', 'center')
            .should('have.css', 'gap', '15px')

        cy.get('#additional-links .parent-info .child-info .buttons .button')
            .should('have.css', 'font-size', '16px')
            .should('have.css', 'text-decoration', 'none')
            .should('have.css', 'color', 'rgb(233, 228, 216)')
            .should('have.css', 'background-color', 'rgb(55, 79, 47)')
            .should('have.css', 'padding', '12px 35px')
            .should('have.css', 'border-radius', '5px')

        cy.get('#additional-links .parent-info .child-info .buttons .button').eq(1)
            .should('have.attr', 'href', 'mailto:saharafathelbab1@gmail.com')

        cy.get('#light-dark-toggle i').click()


        cy.get('#additional-links .parent-info .child-info .buttons .button')
            .should('have.css', 'color', 'rgb(55, 79, 47)')
            .should('have.css', 'background-color', 'rgb(222, 248, 213)')

        cy.get('#light-dark-toggle i').click()

    })

    it('Desktop: Footer', () => {
        cy.viewport(1023, 667)

        cy.get('#additional-links')
            .should('have.css', 'padding', '20px')

    })
})