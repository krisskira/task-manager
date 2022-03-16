describe('Tasks', () => {

    const testRecordId = Date.now()
    const taskTitle = 'TEST::TITLE: ' + testRecordId;
    const taskDesc = 'TEST::DEC: ' + testRecordId;

    beforeEach(() => {
        cy.visit('/')
    })

    it('Task list is empty', () => {
        cy.get('#task-list-empty-message').should('exist')
    })

    it('Is Created a new task', () => {
        cy.get('[name=task-title]').type(taskTitle)
        cy.get('[name=task-description]').type(taskDesc)
        cy.get('[type="submit"]').click()
        cy.get('#task-scrolling-list').contains(taskTitle)
        cy.get('#task-scrolling-list').contains(taskDesc)
    })

    it('Edit task', () => {
        cy.get('[name=task-title]').type(taskTitle)
        cy.get('[name=task-description]').type(taskDesc)
        cy.get('[type="submit"]').click()
        cy.get(`[data-test-edit-task='${taskTitle}']`).click()
        cy.url().should('include', '/edit')
        cy.get('[name=task-description]').type('::TEST-END')
        cy.get('#task-edit-submit-button').click()
        cy.get('#task-scrolling-list').contains('::TEST-END')
    })
})