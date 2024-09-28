/// <reference types="cypress" />
import signUpPage from '../support/pages/signup'

describe('Sign up', () => {
  context('Register non-admin user successfully', () => {
    it('User is successfully registered', () => {
      cy.fixture('users').then(function(users) {
        const user = users.non_admin

        signUpPage.go('/')
        signUpPage.clickOnRegister()
        signUpPage.register(user)
        signUpPage.submit()

        cy.findUserId(user)
          .then((response) => {
            expect(response.status).to.eq(200)
            const userId = response.body.usuarios[0]._id

              cy.deleteUser(userId)
                .then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.message).to.eq("Registro excluído com sucesso")
                })
          })
      }) 
    })
  })

  context('Register admin user successfully', () => {
    it('User is successfully registered', () => {
      cy.fixture('users').then(function(users) {
        const user = users.admin

        signUpPage.go('/')
        signUpPage.clickOnRegister()
        signUpPage.register(user)
        signUpPage.submit()

        cy.findUserId(user)
          .then((response) => {
            expect(response.status).to.eq(200)
            const userId = response.body.usuarios[0]._id

              cy.deleteUser(userId)
                .then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.message).to.eq("Registro excluído com sucesso")
                })
          })
      }) 
    })
  })
})