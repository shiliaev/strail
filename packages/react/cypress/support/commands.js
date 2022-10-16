Cypress.Commands.add('findByTestId', (testId) => {
    cy.get(`[data-test-id=${testId}]`);
})
