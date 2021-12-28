/// <reference types="cypress" />

import { uuid } from 'uuidv4';

describe('Home', () => {

  const textActions = [
    "Dados da mensagem",
    "Responder",
    "Encaminhar mensagem",
    "Favoritar mensagem",
    "Apagar mensagem"
  ]

    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    it('must contain initial text and button', () => {
      cy.contains('Mantenha seu celular conectado')
      cy.get('form > input[type=text]').type("testing")
      cy.get('div.messageCard')
    })

    it('must send message', () => {

      const message = `This is the secret code: ${uuid()}`

      cy.get('div.messageCard').first().click()

      cy.get('.conversation_footer > form > input[type=text]')
        .type(message)
        .type('{enter}')

      cy.get('.conversation_footer > form > input[type=text]')
        .should('have.value', '')

      cy.get('.messageWrap').first().contains(message)
    })

    it('must not see message options at first', () => {

      const message = `This is the secret code: ${uuid()}`

      cy.get('div.messageCard').first().click()

      cy.get('.conversation_footer > form > input[type=text]')
        .type(message)
        .type('{enter}')

      cy.get('.messageWrap').first().get('.messageOption').should('not.be.visible')
      cy.get('.messageWrap').first().get('.textActions').should('not.be.visible')
    })

    it('must see message options after hovering and clicking on the icon', () => {

      const message = `This is the secret code: ${uuid()}`

      cy.get('div.messageCard').first().click()

      cy.get('.conversation_footer > form > input[type=text]')
        .type(message)
        .type('{enter}')

      cy.get('.messageWrap').first().get('.messageOption').should('not.be.visible').invoke('show')

      cy.get('.messageWrap').first().get('.messageOption').first().click()
      cy.get('.messageWrap').first().get('.textActions').should('be.visible')

      for (let i = 0; i < textActions.length; i++) {
        cy.get('.messageWrap').first().get('.textActions > span').eq(i).contains(textActions[i])
      }

    })

    it("must delete a message", () => {

      const message = `This is the secret code: ${uuid()}`

      cy.get('div.messageCard').first().click()

      cy.get('.conversation_footer > form > input[type=text]')
        .type(message)
        .type('{enter}')

      cy.get('.messageWrap').first().contains(message)

      cy.get('.messageWrap').first().get('.messageOption').should('not.be.visible').invoke('show')
      cy.get('.messageWrap').first().get('.messageOption').first().click()


      cy.get('.messageWrap').first().get('.textActions').contains("Apagar").click()
      cy.get('.messageWrap').first().should('not.contain', message)
    })
  })
