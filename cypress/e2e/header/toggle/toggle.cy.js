context('Toggle', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8000')
    })

    it('Mobile: Light and Dark Toggle', () => {
        cy.viewport(375, 667)

        cy.get('html')
            .should('have.attr', 'lang', 'en')
            .should('have.attr', 'data-theme', 'light')

        cy.get('body')
            .should('have.css', 'background-color', 'rgb(233, 228, 216)')
            .should('have.css', 'margin', '0px')
            .should('have.css', 'display', 'grid')
            .should('have.css', 'grid-template-rows', '667px 0px 0px')
            .should('have.css', 'height', '667px')
            .should('have.css', 'min-height', '667px')

        cy.get('#light-mode-to-dark-mode-toggle i')
            .should('have.css', 'color', 'rgb(55, 79, 47)')
            .should('have.css', 'font-size', '22.4px')
            .should('have.css', 'align-content', 'center')


        cy.get('#light-mode-to-dark-mode-toggle button')
            .should('have.attr', 'aria-pressed', 'false')
            .should('have.css', 'background', 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box')
            .should('have.css', 'border', '2px solid rgba(0, 0, 0, 0)')

        cy.get('#light-dark-toggle i')
            .should('have.class', 'fa-toggle-off')

        cy.get('#light-dark-toggle i').click()

        cy.get('#light-dark-toggle i')
            .should('have.class', 'fa-toggle-on')

        cy.get('html')
            .should('have.attr', 'data-theme', 'dark')

        cy.get('body')
            .should('have.css', 'background-color', 'rgb(55, 79, 47)')

        cy.get('#light-mode-to-dark-mode-toggle i')
            .should('have.css', 'color', 'rgb(233, 228, 216)')

        cy.get('#light-dark-toggle i').press('Enter')
    })

    it('Desktop: Light and Dark Toggle', () => {
        cy.viewport(768, 667)

        cy.get('html')
            .should('have.attr', 'lang', 'en')
            .should('have.attr', 'data-theme', 'light')

        cy.get('body')
            .should('have.css', 'background-color', 'rgb(233, 228, 216)')
            .should('have.css', 'margin', '0px')

        cy.get('#light-mode-to-dark-mode-toggle')
            .should('have.css', 'margin', '22px 10px')

        cy.get('#light-mode-to-dark-mode-toggle button')
            .should('have.css', 'border', '2px solid rgba(0, 0, 0, 0)')
            .should('have.css', 'border-radius', '5px')

        cy.get('#light-dark-toggle i').click()

        cy.get('#light-mode-to-dark-mode-toggle button').realHover()
            .should('have.css', 'background-color', 'rgb(222, 248, 213)')
            .within(() => {
                cy.get('i')
                    .should('have.css', 'color', 'rgb(55, 79, 47)')
            })

        cy.get('#light-mode-to-dark-mode-toggle button').focus()
            .should('have.css', 'border-color', 'rgb(233, 228, 216)')

        cy.get('#light-dark-toggle i').press('Enter')
    })
})