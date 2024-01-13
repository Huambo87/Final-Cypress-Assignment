//<reference types = 'Cypress'/>

describe('Main Menu Test', () => {

    // const province = '[name="nastates"]'
    // const city = '[name="stage2"]'
    // const stories = ':nth-child(6) > :nth-child(2) > .Slcst'
    // const square_feet = ':nth-child(6) > :nth-child(3) > .Slcst'
    // const home_age = '.Txtss'


    Cypress.on('uncaught:exception', (err, runnable) => {
        //Returning false here prevents Cypress
        //from failing the test
        return false
    })

    beforeEach(() => {
        cy.visit('/savings-calculator/')
    })

    // it('calc_ontario_test', () => {
    //     cy.get(province).select('Ontario').invoke('val').should('eq', 'Ontario')
    //     cy.get(city).select('Toronto').should('contain.text', 'Toronto')
    //     cy.get(stories).select('1 + Basement').should('contain.text', '1 + Basement')
    //     cy.get(square_feet).select('1750').invoke('val').should('eq', '1750')
    //     cy.get(home_age).type('45').invoke('val').should('eq', '45')
    // })

    it('calc_heat_cost_test', () => {
        cy.stepOne('Ontario', 'Toronto', '1 + Basement', '1750', '45')
    })

})