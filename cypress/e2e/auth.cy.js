describe('firstTests', () => {
    it('Login', () => {
        cy.visit('https://coding.pasv.us/user/login')
        cy.get('#normal_login_email')
            .should('be.visible')
            .clear()
            .type('y.mukhtaruly@gmail.com')
        cy.get('#normal_login_password')
            .should('be.visible')
            .clear()
            .type('')
        cy.get('[type=submit]').click()
        cy.get('.ant-avatar-square')
            .should('be.visible')
    })
})



