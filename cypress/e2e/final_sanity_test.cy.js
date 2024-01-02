///<reference types = 'Cypress'/>

// import selectors from '../support/final_selectors.js'

describe('Home Page Test', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    //Returning false here prevents Cypress
    //from failing the test
    return false
  })

  beforeEach(() => {
    cy.visit('/')
    // cy.get('body').should('be.visible')
  })

  it('home_tab_test', () => {
    cy.get('[id="menu-item-31"]')
    cy.get('h1').should('not.be.empty')
  })
  
  it('about_tab_test', () => {
    cy.get('[id="menu-item-36"]').click()
    cy.get('h1').should('not.be.empty')
  })

  it('products_tab_test', () => {
    cy.get('[id="menu-item-32"]').click()
    cy.get('h1').should('not.be.empty')
  })

  it('services_tab_test', () => {
    cy.get('[id="menu-item-34"]').click()
    cy.get('h1').should('not.be.empty')
  })

  it('tools_tab_test', () => {
    cy.get('[id="menu-item-35"]').click()
    cy.get('h1').should('not.be.empty')
  })

  it('promotions_tab_test', () => {
    cy.get('[id="menu-item-673"]').click()
    cy.get('h1').should('not.be.empty')
  })

  it('careers_tab_test', () => {
    cy.get('[id="menu-item-1589"]').click()
    cy.get('h1').should('not.be.empty')
  })

  it('blog_tab_test', () => {
    cy.get('[id="menu-item-1725"]').click()
    cy.get('h1').should('not.be.empty')
  })

  it('faq_tab_test', () => {
    cy.get('[id="menu-item-1727"]').click()
    cy.get('h1').should('not.be.empty')
  })

  it('contacts_tab_test', () => {
    cy.get('[id="menu-item-1726"]').click()
    cy.get('h1').should('not.be.empty')
  })
})