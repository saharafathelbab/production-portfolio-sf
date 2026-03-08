context('Main Navigation', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8888')
    })

    it('Mobile: Main Navigation', () => {
        cy.viewport(375, 667)

        cy.get('#main-navigation')
            .should('have.css', 'margin', '6px 10px')

        cy.get('#main-navigation .menu-toggle')
            .should('have.css', 'display', 'block')

        cy.get('#main-navigation .menu-toggle i')
            .should('have.css', 'cursor', 'pointer')
            .should('have.css', 'color', 'rgb(55, 79, 47)')
            .should('have.css', 'font-size', '35.2px')
            .should('have.css', 'align-content', 'center')
            .should('have.class', 'fa-bars')

        cy.get('#main-navigation .nav-links')
            .should('have.css', 'display', 'none')
            .should('have.css', 'list-style-type', 'none')

        cy.get('#main-navigation .menu-toggle')
            .should('have.attr', 'aria-label', 'Open Navigation Menu')
            .should('have.attr', 'aria-expanded', 'false')
            .should('have.attr', 'tabindex', '0')

        cy.get('#main-navigation .menu-toggle').click()

        cy.get('#main-navigation .menu-toggle')
            .should('have.css', 'padding', '0px')
            .should('have.attr', 'aria-label', 'Close Navigation Menu')
            .should('have.attr', 'aria-expanded', 'true')

        cy.get('#main-navigation .menu-toggle i')
            .should('have.class', 'fa-times')
            .should('have.css', 'margin', '12px 5px')

        cy.get('#main-navigation .nav-links')
            .should('have.class', 'active')
            .should('have.css', 'display', 'flex')
            .should('have.css', 'background-color', 'rgb(55, 79, 47)')
            .should('have.css', 'padding', '0px 78px 20px 16px')
            .should('have.css', 'flex-direction', 'column')
            .should('have.css', 'list-style-type', 'none')

        cy.get('#main-navigation')
            .should('have.css', 'height', '667px')
            .should('have.css', 'margin', '0px')
            .should('have.css', 'background-color', 'rgb(55, 79, 47)')
            .should('have.css', 'position', 'fixed')
            .should('have.css', 'right', '0px')

        cy.get('#main-navigation .nav-links li')
            .should('have.css', 'padding-bottom', '8px')

        cy.get('#main-navigation .nav-links li .nav-link')
            .should('have.class', 'port-lligat-slab-regular')
            .should('have.css', 'text-decoration', 'none')
            .should('have.css', 'color', 'rgb(233, 228, 216)')
            .should('have.css', 'font-size', '16px')

        cy.get('#light-dark-toggle').click()

        cy.get('#main-navigation .menu-toggle i')
            .should('have.css', 'color', 'rgb(55, 79, 47)')

        cy.get('#main-navigation .nav-links')
            .should('have.css', 'background-color', 'rgb(233, 228, 216)')

        cy.get('#main-navigation .menu-toggle i').click()

        cy.get('#main-navigation .menu-toggle i')
            .should('have.class', 'fa-bars')
            .should('have.css', 'color', 'rgb(233, 228, 216)')


        cy.get('#light-dark-toggle').click()

    })

    it('Desktop: Main Navigation', () => {
        cy.viewport(768, 667)

        cy.get('#main-navigation')
            .should('have.css', 'margin', '12px 10px')

        cy.get('#main-navigation .nav-links')
            .should('have.css', 'display', 'flex')
            .should('have.css', 'flex-direction', 'row')
            .should('have.css', 'position', 'static')
            .should('have.css', 'gap', '20px')

        cy.get('#main-navigation .nav-links li a')
            .should('have.css', 'text-decoration', 'none')
            .should('have.css', 'font-size', '20px')
            .should('have.css', 'color', 'rgb(55, 79, 47)')
            .should('have.css', 'padding', '12px 5px')

        cy.get('#light-dark-toggle').click()

        cy.get('#main-navigation .nav-links li a')
            .should('have.css', 'color', 'rgb(233, 228, 216)')

        cy.get('#light-dark-toggle').click()

    })

    it('Window Resized: Main Navigation', () => {
        cy.viewport(767, 667)

        cy.get('#main-navigation .menu-toggle')
            .should('have.attr', 'aria-label', 'Open Navigation Menu')
            .should('have.attr', 'aria-expanded', 'false')
            .should('have.attr', 'tabindex', '0')

        cy.get('#main-navigation .menu-toggle').click()

        cy.viewport(798, 667)

        cy.get('#main-navigation .nav-links')
            .should('not.have.class', 'active')

        cy.get('#main-navigation .menu-toggle')
            .should('have.attr', 'aria-label', 'Open Navigation Menu')
            .should('have.attr', 'aria-expanded', 'false')

        cy.viewport(767, 667)

        cy.get('#main-navigation .menu-toggle')
            .should('have.attr', 'aria-label', 'Open Navigation Menu')
            .should('have.attr', 'aria-expanded', 'false')

        cy.get('#main-navigation .menu-toggle i')
            .should('have.class', 'fa-bars')


    })
})