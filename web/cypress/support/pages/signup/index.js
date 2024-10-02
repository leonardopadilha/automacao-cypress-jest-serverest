/// <reference types="cypress" />

import { el } from './elements.js'
class SignUpPage {
    go() {
        cy.visit('/')

        cy.get(el.loginTitle)
            .should('be.visible')
    }

    clickOnRegister() {
        cy.get(el.linkRegister)
            .should('be.visible')
            .click()

        cy.get(el.registerTitle)
            .should('be.visible')
    }

    register(user) {
        cy.get(el.name).type(user.nome)
        cy.get(el.email).type(user.email)
        cy.get(el.password).type(user.password)

        if (user.administrador) {
            cy.get(el.checkAdmin)
                .check()
        }

    }

    submit() {
        cy.get(el.btnRegister)
            .click()
    }

    haveTextsuccess(text) {
        cy.get(el.registerSuccess)
            .should('be.visible')
            .contains(text)
    }
}

export default new SignUpPage()