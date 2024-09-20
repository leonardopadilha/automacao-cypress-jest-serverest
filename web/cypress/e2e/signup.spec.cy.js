/// <reference types="cypress" />
import signUpPage from '../support/pages/signup'

describe('Sign up', () => {
  context('Register non-admin user successfully', () => {
    it('User is successfully registered', () => {
      const user = {
        "nome": "Teste QA_1",
        "email": "testes1112@teste.com",
        "password": "qa123",
        "administrador": false
      }

      cy.visit('/')
      signUpPage.clickOnRegister()
      signUpPage.register(user)
      signUpPage.submit()
    })
  })
})