context('About', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8000/about-me.html')
    })

    it('Mobile: About', () => {
        cy.viewport(375, 667)

        cy.get('.parent-info')
            .should('have.css', 'display', 'flex')
            .should('have.css', 'justify-content', 'center')
            .should('have.css', 'align-items', 'center')
            .should('have.css', 'margin', '50px 0px 40px')
            .should('have.css', 'padding', '0px 45px')

        cy.get('.parent-info .child-info')
            .should('have.css', 'text-align', 'center')

        cy.get('.parent-info .child-info .profile .profile-photo')
            .should('have.css', 'height', '103px')
            .should('have.css', 'border-radius', '180px')

        cy.get('.parent-info .child-info .information h1')
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

        cy.get('.reg-link')
            .should('have.css', 'text-decoration', 'underline')
            .should('have.css', 'color', 'rgb(76, 71, 47)')
            .should('have.css', 'font-weight', '700')
            .should('have.css', 'border-radius', '5px')
            .should('have.css', 'padding', '2px')

        cy.get('.parent-info .child-info .information .extracurriculars figure')
            .should('have.css', 'padding', '0px')
            .should('have.css', 'padding', '0px')

        cy.get('.parent-info .child-info .information .extracurriculars figure .extracurricular')
            .should('have.css', 'width', '300px')
            .should('have.css', 'padding-top', '20px')

        cy.get('.parent-info .child-info .information .extracurriculars figure figcaption')
            .should('have.class', 'namdhinggo-regular')
            .should('have.css', 'font-size', '16px')
            .should('have.css', 'color', 'rgb(55, 79, 47)')

        cy.get('#light-dark-toggle i').click()

        cy.get('.parent-info .child-info .information h1')
            .should('have.css', 'color', 'rgb(233, 228, 216)')

        cy.get('.parent-info .child-info .information p')
            .should('have.css', 'color', 'rgb(233, 228, 216)')

        cy.get('.reg-link')
            .should('have.css', 'color', 'rgb(222, 248, 213)')

        cy.get('.parent-info .child-info .information .extracurriculars figure figcaption')
            .should('have.css', 'color', 'rgb(233, 228, 216)')

        cy.get('#light-dark-toggle i').click()

    })

    it('Desktop 768: About', () => {
        cy.viewport(768, 667)

        cy.get('.parent-info .child-info')
            .should('have.css', 'margin-top', '30px')

        cy.get('.parent-info .child-info .information .extracurriculars figure .extracurricular')
            .should('have.css', 'width', '678px')

        cy.get('.parent-info .child-info .information .extracurriculars figure figcaption')
            .should('have.css', 'margin-top', '5px')
    })

    it('Desktop 1023: About', () => {
        cy.viewport(1023, 667)

        cy.get('.parent-info .child-info')
            .should('have.css', 'margin-top', '50px')
            .should('have.css', 'display', 'flex')
            .should('have.css', 'column-gap', '60px')
            .should('have.css', 'justify-content', 'center')

        cy.get('.parent-info .child-info .profile .profile-photo')
            .should('have.css', 'height', '220px')

        cy.get('.parent-info .child-info .information .title')
            .should('have.css', 'text-align', 'left')

        cy.get('.parent-info .child-info .information .description')
            .should('have.css', 'text-align', 'left')
    })

    it('Desktop 1700: About', () => {
        cy.viewport(1700, 667)

        cy.get('.parent-info')
            .should('have.css', 'width', '1360px')
            .should('have.css', 'margin', '0px')

        cy.get('.parent-info .child-info .information .extracurriculars')
            .should('have.css', 'display', 'flex')
            .should('have.css', 'column-gap', '10px')
            .should('have.css', 'justify-content', 'center')
    })
})