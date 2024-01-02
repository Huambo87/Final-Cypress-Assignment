///<reference types = 'Cypress'/>

import selectors from '../support/final_selectors.js'

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

  // it('home_tab_test', () => {
  //   cy.get('[id="menu-item-31"]')
  //   cy.get('h1').should('not.be.empty')
  // })
  
  // it('about_tab_test', () => {
  //   cy.get('[id="menu-item-36"]').click()
  //   cy.get('h1').should('not.be.empty')
  // })

  // it('products_tab_test', () => {
  //   cy.get('[id="menu-item-32"]').click()
  //   cy.get('h1').should('not.be.empty')
  // })

  // it('services_tab_test', () => {
  //   cy.get('[id="menu-item-34"]').click()
  //   cy.get('h1').should('not.be.empty')
  // })

  // it('tools_tab_test', () => {
  //   cy.get('[id="menu-item-35"]').click()
  //   cy.get('h1').should('not.be.empty')
  // })

  // it('promotions_tab_test', () => {
  //   cy.get('[id="menu-item-673"]').click()
  //   cy.get('h1').should('not.be.empty')
  // })

  // it('careers_tab_test', () => {
  //   cy.get('[id="menu-item-1589"]').click()
  //   cy.get('h1').should('not.be.empty')
  // })

  // it('blog_tab_test', () => {
  //   cy.get('[id="menu-item-1725"]').click()
  //   cy.get('h1').should('not.be.empty')
  // })

  // it('faq_tab_test', () => {
  //   cy.get('[id="menu-item-1727"]').click()
  //   cy.get('h1').should('not.be.empty')
  // })

  // it('contacts_tab_test', () => {
  //   cy.get('[id="menu-item-1726"]').click()
  //   cy.get('h1').should('not.be.empty')
  // })

  it('home_tab_test', () => {
    cy.get(selectors.home_tab)
    cy.get('h1').should('not.be.empty')
  })
  
  it('about_tab_test', () => {
    cy.get(selectors.about_tab).click()
    cy.get('h1').should('not.be.empty')
  })

  it('products_tab_test', () => {
    cy.get(selectors.products_tab).click()
    cy.get('h1').should('not.be.empty')
  })

  it('services_tab_test', () => {
    cy.get(selectors.services_tab).click()
    cy.get('h1').should('not.be.empty')
  })

  it('tools_tab_test', () => {
    cy.get(selectors.tools_tab).click()
    cy.get('h1').should('not.be.empty')
  })

  it('promotions_tab_test', () => {
    cy.get(selectors.promotions_tab).click()
    cy.get('h1').should('not.be.empty')
  })

  it('careers_tab_test', () => {
    cy.get(selectors.careers_tab).click()
    cy.get('h1').should('not.be.empty')
  })

  it('blog_tab_test', () => {
    cy.get(selectors.blog_tab).click()
    cy.get('h1').should('not.be.empty')
  })

  it('faq_tab_test', () => {
    cy.get(selectors.faq_tab).click()
    cy.get('h1').should('not.be.empty')
  })

  it('contacts_tab_test', () => {
    cy.get(selectors.conatacts_tab).click()
    cy.get('h1').should('not.be.empty')
  })
})