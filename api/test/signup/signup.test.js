const request = require('supertest')
const { registerUser } = require('../../functions/signup/registerUser')

describe('Sign up', () => {
    it('Register non-admin user successfully', async () => {
        const user = {
            nome: "Teste QA_1",
            email: "testes1118@teste.com",
            password: "qa123",
            administrador: 'false'
          }
          
          const response = await registerUser(user)
          expect(response.status).toEqual(201)

    })
})