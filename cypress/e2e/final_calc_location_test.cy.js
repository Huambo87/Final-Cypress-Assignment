///<reference types = 'Cypress'/>

import { data } from '../fixtures/final_params.json'

describe('Main Menu Test', () => {

    const province = '[name="nastates"]'
    const city = '[name="stage2"]'

    Cypress.on('uncaught:exception', (err, runnable) => {
        //Returning false here prevents Cypress
        //from failing the test
        return false
    })

    beforeEach(() => {
        cy.visit('/savings-calculator/')
    })

    it('calc_location_list_test', () => {

        data.forEach(element => {
            // cy.screenshot('Screenshot Test')
            cy.get(province).select(element.province).invoke('val').should('not.be.null', 'eq', element.province)
            cy.get(city).invoke('val').should('not.be.null')

        })
    })
})