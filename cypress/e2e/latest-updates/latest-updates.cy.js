context('Latest Updates', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8888/latest-updates.html')
    })

    it('Mobile: Latest Updates', () => {
        cy.viewport(375, 667)

        cy.get('.parent-info')
            .should('have.css', 'display', 'flex')
            .should('have.css', 'justify-content', 'center')
            .should('have.css', 'align-items', 'center')
            .should('have.css', 'margin', '88px 0px 40px')
            .should('have.css', 'padding', '0px 45px')

        cy.get('.parent-info .child-info .information .title')
            .should('have.class', 'macondo-regular')
            .should('have.css', 'color', 'rgb(55, 79, 47)')
            .should('have.css', 'font-size', '40px')
            .should('have.css', 'text-align', 'center')
            .should('have.css', 'padding', '13px 0px')
            .should('have.css', 'margin', '0px')

        cy.get('.parent-info .child-info .information p')
            .should('have.class', 'namdhinggo-regular')
            .should('have.css', 'color', 'rgb(55, 79, 47)')
            .should('have.css', 'font-size', '16px')
            .should('have.css', 'line-height', '24px')
            .should('have.css', 'text-align', 'center')
            .should('have.css', 'margin', '0px')
            .should('have.css', 'padding-bottom', '10px')

        cy.get('.parent-info .child-info .information .divider')
            .should('have.css', 'background-color', 'rgb(55, 79, 47)')
            .should('have.css', 'border', '0px none rgb(128, 128, 128)')
            .should('have.css', 'height', '1px')

        cy.get('.parent-info .child-info .information section')
            .should('have.css', 'padding-bottom', '13px')

        cy.get('.parent-info .child-info .information section .title')
            .should('have.class', 'macondo-regular')
            .should('have.css', 'font-size', '24px')
            .should('have.css', 'text-align', 'left')
            .should('have.css', 'padding', '13px 0px')
            .should('have.css', 'margin', '0px')

        cy.get('.parent-info .child-info .information section .content-block')
            .should('have.css', 'padding', '8px 0px')

        cy.get('.parent-info .child-info .information section h3.description')
            .should('have.class', 'namdhinggo-bold')
            .should('have.css', 'text-align', 'left')
            .should('have.css', 'padding-bottom', '0px')
            .should('have.css', 'color', 'rgb(55, 79, 47)')
            .should('have.css', 'font-size', '16px')
            .should('have.css', 'line-height', '24px')
            .should('have.css', 'margin', '0px')

        cy.get('.parent-info .child-info .information section p.description')
            .should('have.class', 'namdhinggo-regular')
            .should('have.css', 'text-align', 'left')
            .should('have.css', 'padding-bottom', '0px')
            .should('have.css', 'color', 'rgb(55, 79, 47)')
            .should('have.css', 'font-size', '16px')
            .should('have.css', 'line-height', '24px')
            .should('have.css', 'margin', '0px')

        cy.get('.parent-info .child-info .information section .description .reg-link')
            .should('have.css', 'text-decoration', 'underline')
            .should('have.css', 'color', 'rgb(76, 71, 47)')
            .should('have.css', 'font-weight', '700')

        cy.get('.parent-info .child-info .information section .books')
            .should('have.css', 'display', 'flex')
            .should('have.css', 'flex-wrap', 'wrap')
            .should('have.css', 'gap', '33px')

        cy.get('.parent-info .child-info .information section .books .book')
            .should('have.css', 'text-align', 'center')
            .should('have.css', 'margin', '0px')

        cy.get('.parent-info .child-info .information section .books .book .book-photo')
            .should('have.css', 'height', '141px')
            .should('have.css', 'border-radius', '10px')

        cy.get('.parent-info .child-info .information section.currently-reading .books .book').eq(0)
            .should('exist')

        cy.get('.parent-info .child-info .information section.recently-read .books .book').eq(0)
            .should('exist')

        cy.get('.parent-info .child-info .information section .books .book figcaption')
            .should('have.css', 'margin-top', '20px')

        cy.get('.parent-info .child-info .information section .books .book figcaption .link')
            .should('have.css', 'font-size', '16px')
            .should('have.css', 'text-decoration', 'none')
            .should('have.css', 'color', 'rgb(233, 228, 216)')
            .should('have.css', 'background-color', 'rgb(55, 79, 47)')
            .should('have.css', 'padding', '12px 6px')
            .should('have.css', 'border-radius', '5px')

        cy.get('#light-dark-toggle i').click()

        cy.get('.parent-info .child-info .information .title')
            .should('have.css', 'color', 'rgb(233, 228, 216)')

        cy.get('.parent-info .child-info .information p')
            .should('have.css', 'color', 'rgb(233, 228, 216)')

        cy.get('.parent-info .child-info .information .divider')
            .should('have.css', 'background-color', 'rgb(233, 228, 216)')

        cy.get('.parent-info .child-info .information section h3.description')
            .should('have.css', 'color', 'rgb(233, 228, 216)')

        cy.get('.parent-info .child-info .information section p.description')
            .should('have.css', 'color', 'rgb(233, 228, 216)')

        cy.get('.parent-info .child-info .information section .description .reg-link')
            .should('have.css', 'color', 'rgb(222, 248, 213)')

        cy.get('.parent-info .child-info .information section .books .book figcaption .link')
            .should('have.css', 'color', 'rgb(55, 79, 47)')
            .should('have.css', 'background-color', 'rgb(222, 248, 213)')

        cy.get('#light-dark-toggle i').click()

    })

    it('Desktop 768: Latest Updates', () => {
        cy.viewport(768, 667)

        cy.get('.parent-info .child-info .information .title')
            .should('have.css', 'font-size', '56px')
            .should('have.css', 'text-align', 'left')

        cy.get('.parent-info .child-info .information p')
            .should('have.css', 'font-size', '20.8px')
            .should('have.css', 'text-align', 'left')

        cy.get('.parent-info .child-info .information section .description .reg-link')
            .should('have.css', 'padding', '6px 0px')

    })

    it('Desktop 950: Latest Updates', () => {
        cy.viewport(950, 667)

        cy.get('.parent-info .child-info .information .updates')
            .should('have.css', 'display', 'grid')
            .should('have.css', 'grid-template-columns', '422px 422px')
            .should('have.css', 'gap', '16px')

    })

    it('Large Desktop 1700: Latest Updates', () => {
        cy.viewport(950, 667)

        cy.get('.parent-info')
            .should('have.css', 'width', '860px')
            .should('have.css', 'margin', '88px 0px 40px')

    })
})