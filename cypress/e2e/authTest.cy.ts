describe('template spec', () => {
  beforeEach(() => {
    cy.task("removeTestUser")
  })

  it('can correctly signup & login a new user', () => {
    cy.visit('http://localhost:5173/');

    // Navigate to signup page
    cy.get('[data-testid="nav-signup"]').click();

    // Signup new user
    cy.get('[data-testid="signup-username"]').type("testUser");
    cy.get('[data-testid="signup-password"]').type("testPass");
    cy.get('[data-testid="signup-submit"]').click();

    // Login new user
    cy.get('[data-testid="login-username"]').type("testUser");
    cy.get('[data-testid="login-password"]').type("testPass");
    cy.get('[data-testid="login-submit"]').click();

    // Navigate to profile page
    cy.get('[data-testid="nav-profile"]').click();

    // Assert profile page
    cy.get('[data-testid="profile-username"]').should("have.text", "testUser's profile");
  })
})