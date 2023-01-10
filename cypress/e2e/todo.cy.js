/// <reference types='cypress' />;
import '@testing-library/cypress/add-commands';

describe('to-do list App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders', () => {
    cy.findByTitle('Switch to dark mode button').should('exist');
    cy.findByText('All').should('exist');
    cy.findByText('Active').should('exist');
    cy.findByText('Completed').should('exist');
    cy.findByRole('textbox').should('exist');
    cy.findByTitle('add button').should('exist');
  });

  it('switchs to dark mode', () => {
    cy.findByTitle('Switch to dark mode button').click();
    cy.findByTitle('Switch to light mode button').should('exist');
  });

  it('adds an item', () => {
    cy.findByPlaceholderText('ADD Todo').type('Studying React');
    cy.findByTitle('add button').click();

    cy.findByRole('checkbox').should('exist');
    cy.findByText('Studying React').should('exist');
    cy.findByTitle('delete button').should('exist');
  });

  it('deletes an item', () => {
    cy.findByPlaceholderText('ADD Todo').type('Studying React');
    cy.findByTitle('add button').click();
    cy.findByPlaceholderText('ADD Todo').type('Eating');
    cy.findByTitle('add button').click();
    cy.findByPlaceholderText('ADD Todo').type('Sleeping');
    cy.findByTitle('add button').click();

    cy.findAllByTitle('delete button').first().click();

    cy.findByText('Studying React').should('not.exist');
    cy.findByText('Eating').should('exist');
    cy.findByText('Sleeping').should('exist');
  });

  describe('filter items', () => {
    beforeEach(() => {
      cy.findByPlaceholderText('ADD Todo').type('Studying React');
      cy.findByTitle('add button').click();
      cy.findByPlaceholderText('ADD Todo').type('Studying JavaScript');
      cy.findByTitle('add button').click();
      cy.findByPlaceholderText('ADD Todo').type('Studying Cypress');
      cy.findByTitle('add button').click();
      cy.findByPlaceholderText('ADD Todo').type('Eating');
      cy.findByTitle('add button').click();
      cy.findByPlaceholderText('ADD Todo').type('Sleeping');
      cy.findByTitle('add button').click();

      cy.findAllByRole('checkbox').eq(0).click();
      cy.findAllByRole('checkbox').eq(3).click();
    });

    it(`tests from 'All' tab`, () => {
      cy.findAllByRole('checkbox').should('have.length', 5);
      cy.findAllByRole('checkbox', { checked: true }).should('have.length', 2);
      cy.findAllByRole('checkbox', { checked: false }).should('have.length', 3);
    });

    it(`tests from 'Active' tab`, () => {
      cy.findByText('Active').click();

      cy.findAllByRole('checkbox').should('have.length', 3);
      cy.findAllByRole('checkbox', { checked: true }).should('have.length', 0);
      cy.findAllByRole('checkbox', { checked: false }).should('have.length', 3);
    });

    it(`tests from 'Completed' tab`, () => {
      cy.findByText('Completed').click();

      cy.findAllByRole('checkbox').should('have.length', 2);
      cy.findAllByRole('checkbox', { checked: true }).should('have.length', 2);
      cy.findAllByRole('checkbox', { checked: false }).should('have.length', 0);
    });
  });
});
