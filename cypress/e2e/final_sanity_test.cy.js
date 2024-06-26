///<reference types = 'Cypress'/>

import selectors from '../support/final_selectors.js'

describe('Main Menu Test', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  beforeEach(() => {
    cy.visit('/')
  })

  it('home_tab_test', () => {
    cy.get(selectors.home_tab)
    cy.get('h1').should('not.be.empty')
  })

  it('about_tab_test', () => {
    cy.get(selectors.about_tab).click()
    cy.get('h1').should('not.be.empty').contains('About Consumers Energy Management Inc.')
  })

  it('products_tab_test', () => {
    cy.get(selectors.products_tab).click()
    cy.get('h1').should('not.be.empty').contains('Products')
  })

  it('services_tab_test', () => {
    cy.get(selectors.services_tab).click()
    cy.get('h1').should('not.be.empty').contains('Services')
  })

  it('tools_tab_test', () => {
    cy.get(selectors.tools_tab).click()
    cy.get('h1').should('not.be.empty').contains('Tools')
  })

  it('promotions_tab_test', () => {
    cy.get(selectors.promotions_tab).click()
    cy.get('h1').should('not.be.empty').contains('Promotions')
  })

  it('careers_tab_test', () => {
    cy.get(selectors.careers_tab).click()
    cy.get('h1').should('not.be.empty').contains('Careers')
  })

  it('blog_tab_test', () => {
    cy.get(selectors.blog_tab).click()
    cy.get('h1').should('not.be.empty').contains('Blog')
  })

  it('faq_tab_test', () => {
    cy.get(selectors.faq_tab).click()
    cy.get('h1').should('not.be.empty').contains('Frequently')
  })

  it('contacts_tab_test', () => {
    cy.get(selectors.conatacts_tab).click()
    cy.get('h1').should('not.be.empty').contains('Contact')
  })
})