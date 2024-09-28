const API_SERVER="https://serverest.dev"

Cypress.Commands.add('findUserId', function(user) {
    cy.api({
        method: 'GET',
        url: `${API_SERVER}/usuarios?email=${user.email}`,
        failOnStatusCode: false
    }).then(response => { return response })
})

Cypress.Commands.add('deleteUser', function(userId) {
    cy.api({
        method: 'DELETE',
        url: `${API_SERVER}/usuarios/${userId}`
    }).then(response => { return response })
})