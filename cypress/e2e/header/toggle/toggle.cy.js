context('Toggle', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8888')
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

        cy.get('#light-mode-to-dark-mode-toggle button ')
            .should('have.attr', 'aria-pressed', 'false')
            .should('have.css', 'background-color', 'rgb(55, 79, 47)')
            .should('have.css', 'border', '2px solid rgba(0, 0, 0, 0)')
            .should('have.css', 'border-radius', '30px')
            .should('have.css', 'width', '55px')
            .should('have.css', 'height', '28px')
            .should('have.css', 'position', 'relative')
            .should('have.css', 'background-color', 'rgb(55, 79, 47)')

        cy.get('#light-mode-to-dark-mode-toggle button .toggle-icon')
            .should('have.css', 'background-image', 'url("http://localhost:8888/header/light-dark-toggle/img/mobile-sun.svg")')
            .should('have.css', 'width', '15.5px')
            .should('have.css', 'height', '15.5px')
            .should('have.css', 'position', 'absolute')
            .should('have.css', 'top', '4px')
            .should('have.css', 'left', '4px')
            .should('have.css', 'transition', 'left 0.5s')

        cy.get('#light-dark-toggle').click()

        cy.get('html')
            .should('have.attr', 'data-theme', 'dark')

        cy.get('body')
            .should('have.css', 'background-color', 'rgb(55, 79, 47)')

        cy.get('#light-mode-to-dark-mode-toggle button ')
            .should('have.attr', 'aria-pressed', 'true')
            .should('have.css', 'background-color', 'rgb(233, 228, 216)')

        cy.get('#light-mode-to-dark-mode-toggle button .toggle-icon')
            .should('have.css', 'background-image', 'url("http://localhost:8888/header/light-dark-toggle/img/mobile-moon.svg")')
            .should('have.css', 'width', '15.4375px')
            .should('have.css', 'height', '15.5px')
            .should('have.css', 'left', '32px')

        cy.get('#light-dark-toggle').press('Enter')
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
            .should('have.css', 'width', '70px')
            .should('have.css', 'height', '35px')

        cy.get('#light-mode-to-dark-mode-toggle button .toggle-icon')
            .should('have.css', 'background-image', 'url("http://localhost:8888/header/light-dark-toggle/img/desktop-sun.svg")')
            .should('have.css', 'width', '22.5px')
            .should('have.css', 'height', '22.5px')

        cy.get('#light-dark-toggle').click()

        cy.get('#light-mode-to-dark-mode-toggle button .toggle-icon')
            .should('have.css', 'background-image', 'url("http://localhost:8888/header/light-dark-toggle/img/desktop-moon.svg")')
            .should('have.css', 'width', '22px')
            .should('have.css', 'height', '23px')
            .should('have.css', 'left', '36px')

        cy.get('#light-dark-toggle').press('Enter')
    })
})