///<reference types = 'Cypress'/>

import { oldheatsystem } from '../fixtures/final_params.json'
import { newheatsystem } from '../fixtures/final_params.json'
import selectors from '../support/final_selectors.js'



describe('Main Menu Test', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    beforeEach(() => {
        cy.visit('/savings-calculator/')
    })

    it('calc_old_heat_cost_test', () => {
        cy.stepOne('Ontario', 'Toronto', '1 + Basement', '1750', '45')
        oldheatsystem.forEach(element => {

            cy.get(selectors.old_heat_sys).select(element.heatsys)
            cy.pause()
            cy.get(selectors.old_heat_cost).should('not.have.text', '$0.00')
        })  
    })

    it('calc_new_heat_cost_and_savings_test', () => {
        cy.stepOne('Ontario', 'Toronto', '1 + Basement', '1750', '45')
        newheatsystem.forEach(element => {

            cy.get(selectors.new_heat_sys).select(element.nheatsys)
            cy.pause()
            cy.get(selectors.new_heat_cost).should('not.have.text', '$0.00')
            cy.get(selectors.annual_heat_savings).should('not.have.text', '$0.00')
            cy.get(selectors.total_annual_savings).should('not.have.text', '$0.00')
            cy.get(selectors.total_extended_savings).should('not.have.text', '$0.00')
        })  
    })
})