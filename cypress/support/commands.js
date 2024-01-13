// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const province = '[name="nastates"]'
const city = '[name="stage2"]'
const stories = ':nth-child(6) > :nth-child(2) > .Slcst'
const square_feet = ':nth-child(6) > :nth-child(3) > .Slcst'
const home_age = '.Txtss'

Cypress.Commands.add('stepOne', (province_name, city_name, number_of_floors, total_area, age) => {
    cy.get(province).select(province_name)
    cy.get(city).select(city_name)
    cy.get(stories).select(number_of_floors)
    cy.get(square_feet).select(total_area)
    cy.get(home_age).type(age)
})