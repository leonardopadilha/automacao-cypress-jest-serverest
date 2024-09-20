const request = require('supertest')

require('dotenv').config()

BASE_URL = process.env.BASE_URL

async function registerUser(user) {
    const response = await request(BASE_URL)
                            .post('/usuarios')
                            .send(user)

    return response
}

module.exports = {
    registerUser
}