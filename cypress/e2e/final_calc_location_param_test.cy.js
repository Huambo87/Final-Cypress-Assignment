///<reference types = 'Cypress'/>

import { data } from '../fixtures/final_params.json'

describe('Parametrized Location Test', () => {

    const province = '[name="nastates"]'

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    beforeEach(() => {
        cy.visit('/savings-calculator/')
    })

    it('calc_location_list_test', () => {
        data.forEach(element => {
            try {
                cy.get(province)
                    .select(element.province)
                    .invoke('val')
                    .should('eq', element.province)

                cy.log(`Selected province: ${element.province}`)

                cy.get('[name="stage2"] option').should('have.length.gt', 1)
            } catch (error) {
                cy.log(`Failed to select province: ${element.province}`)
                cy.log(error)

                Cypress.on('uncaught:exception', (err, runnable) => {
                    return false;
                })
            }
        })
    })
})