/// <reference types='cypress' />;
import '@testing-library/cypress/add-commands';

describe('to-do list App', () => {
  beforeEach(() => {
    cy.visit('/');
  });
});
