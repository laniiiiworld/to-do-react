/// <reference types='cypress' />;
import '@testing-library/cypress/add-commands';

describe('to-do list App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders', () => {
    cy.findByTitle('theme button').should('exist');
    cy.findByText('All').should('exist');
    cy.findByText('Active').should('exist');
    cy.findByText('Completed').should('exist');
    cy.findByRole('textbox').should('exist');
    cy.findByTitle('add button').should('exist');
  });
});
