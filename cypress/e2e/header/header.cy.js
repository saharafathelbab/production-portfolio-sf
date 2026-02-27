context('Header', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8000')
    })

    it('Header', () => {
        cy.viewport(375, 667)

        cy.get('body header')
            .should('have.css', 'display', 'flex')
            .should('have.css', 'justify-content', 'space-between')
            .should('have.css', 'position', 'fixed')
            .should('have.css', 'top', '0px')
            .should('have.css', 'background-color', 'rgb(233, 228, 216)')

        cy.get('#light-dark-toggle i').click()

        cy.get('body header')
            .should('have.css', 'background-color', 'rgb(55, 79, 47)')

        cy.get('#light-dark-toggle i').click()
    })

    it('Large Desktop 1700: Header', () => {
        cy.viewport(1700, 667)

        cy.get('body header')
            .should('have.css', 'position', 'relative')
            .should('have.css', 'width', '1020px')
            .should('have.css', 'margin', '0px')
    })
})