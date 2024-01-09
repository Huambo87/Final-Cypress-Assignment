///<reference types = 'Cypress'/>

import { data } from '../fixtures/final_params.json'

describe('Main Menu Test', () => {

    const province = '[name="nastates"]'
    // const city = '[name="stage2"]'

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
            try {
                cy.get(province)
                    .select(element.province)
                    .invoke('val')
                    .should('eq', element.province);
    
                // Log success or any additional actions after the successful selection
                cy.log(`Selected province: ${element.province}`);
    
                // Continue with other actions or assertions within the try block if needed
                cy.get('[name="stage2"] option').should('have.length.gt', 1);
            } catch (error) {
                // Log the error
                cy.log(`Failed to select province: ${element.province}`);
                cy.log(error);
    
                // Prevent Cypress from failing the entire test
                Cypress.on('uncaught:exception', (err, runnable) => {
                    return false;
                });
            }
        })
    })
})