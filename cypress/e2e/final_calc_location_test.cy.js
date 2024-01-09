///<reference types = 'Cypress'/>

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

    it('calc_alberta_test', () => {
        cy.get(province).select("Alberta").invoke('val').should('eq', "Alberta")
        cy.get('[name="stage2"] option').should('have.length.gt', 1)
    })
    it('calc_british_columbia_test', () => {
        cy.get(province).select("British Columbia").invoke('val').should('eq', "British Columbia")
        cy.get('[name="stage2"] option').should('have.length.gt', 1)
    })
    it('calc_manitoba_test', () => {
        cy.get(province).select("Manitoba").invoke('val').should('eq', "Manitoba")
        cy.get('[name="stage2"] option').should('have.length.gt', 1)
    })
    it('calc_new_brunswick_test', () => {
        cy.get(province).select("NewBrunswick").invoke('val').should('eq', "NewBrunswick")
        cy.get('[name="stage2"] option').should('have.length.gt', 1)
    })
    it('calc_newfoundland_test', () => {
        cy.get(province).select("Newfoundland").invoke('val').should('eq', "Newfoundland")
        cy.get('[name="stage2"] option').should('have.length.gt', 1)
    })
    it('calc_northwest_territory_test', () => {
        cy.get(province).select("NorthwestTerritory").invoke('val').should('eq', "NorthwestTerritory")
        cy.get('[name="stage2"] option').should('have.length.gt', 1)
    })
    it('calc_nova_scotia_test', () => {
        cy.get(province).select("NovaScotia").invoke('val').should('eq', "NovaScotia")
        cy.get('[name="stage2"] option').should('have.length.gt', 1)
    })
    it('calc_nunavut_test', () => {
        cy.get(province).select("Nunavut").invoke('val').should('eq', "Nunavut")
        cy.get('[name="stage2"] option').should('have.length.gt', 1)
    })
    it('calc_ontario_test', () => {
        cy.get(province).select("Ontario").invoke('val').should('eq', "Ontario")
        cy.get('[name="stage2"] option').should('have.length.gt', 1)
    })
    it('calc_prince_edward_island_test', () => {
        cy.get(province).select("Prince Edward Island").invoke('val').should('eq', "Prince Edward Island")
        cy.get('[name="stage2"] option').should('have.length.gt', 1)
    })
    it('calc_quebec_test', () => {
        cy.get(province).select("Quebec").invoke('val').should('eq', "Quebec")
        cy.get('[name="stage2"] option').should('have.length.gt', 1)
    })
    it('calc_saskatechewan_test', () => {
        cy.get(province).select("Saskatechewan").invoke('val').should('eq', "Saskatechewan")
        cy.get('[name="stage2"] option').should('have.length.gt', 1)
    })
    it('calc_yukon_test', () => {
        cy.get(province).select("Yukon").invoke('val').should('eq', "Yukon")
        cy.get('[name="stage2"] option').should('have.length.gt', 1)
    })

})
