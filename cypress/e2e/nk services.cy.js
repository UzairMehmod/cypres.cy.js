import loginData from '../fixtures/example.json'

describe('NK Associates Services Webpage', () => {
    beforeEach(() => {
        cy.visit('https://develop.d2vr74cwsk1kb.amplifyapp.com/services');
      });
     it('Assertion of the Services Page', () => {
        cy.url().should('include','amplifyapp')
        cy.url().should('eq','https://develop.d2vr74cwsk1kb.amplifyapp.com/services')
        cy.url().should('contain','services')

        

        cy.get('.mx-auto > :nth-child(1) > a > img').should('be.visible') //logo assertion
        cy.get('.mr-2').should('be.visible')//get in touch button
        cy.get('.justify-between > .relative').should('be.visible')//scroll down button
        cy.get('.text-3xl').should('be.visible')//text heading
        cy.get('.max-w-5xl').should('be.visible')//sub text
        //cy.get('.-left-\[1px\]').should('have.css', 'color', 'red')//contact us button
        cy.get('.text-original').should('be.visible')//contact us Text
        cy.get('.pin-spacer-service_card-0 > .service-card > .left-0 > .text-center > .block > .w-full').should('be.visible')//image
        cy.get('.pin-spacer-service_card-0 > .service-card > .left-0 > .text-center > .py-4 > .font-metropolis-bold').should('be.visible')//bold heading
        cy.get('.pin-spacer-service_card-0 > .service-card > .left-0 > .text-center > .py-4 > .my-2 > .break-words').should('be.visible')//sub heading
        cy.get('.pin-spacer-service_card-0 > .service-card > .left-0 > .text-center > .py-4 > .relative > .object-left').should('be.visible')//logo assertion with text
        cy.get('.pin-spacer-service_card-1 > .service-card > .left-0 > .text-center > .py-4 > .hidden > .transition-all').should('be.visible')//Arrow button
        cy.get('.flex > img').should('be.visible')//footer logo
        cy.get('.font-metropolis-medium > .text-base').should('be.visible')//footer heading download
        cy.get('.mb-5 > .flex > a > .p-3').should('be.visible')//googleplay button
        cy.get('.mb-3 > .flex > a > .p-3').should('be.visible')//playstore button
        cy.get('.min-h-fit > .container > .flex-col > .text-center').should('be.visible')//footer text
        cy.get('[href="/terms-and-conditions"]').should('be.visible')//term of use text
        cy.get('[href="/privacy-policy"]').should('be.visible')//privacy policy text
    })

        it.skip('functionality of the Services Page', () => {
            
            cy.get('.mx-auto > :nth-child(1) > a > img').click()//logo functionality
            cy.get('.mr-2').click()//get in touch button
            cy.get('.justify-between > .relative').click()//scroll down button
            cy.get('.fixed > .flex > :nth-child(5) > a').click()//click on services
            cy.get('.text-original').click()//contact us on services page
            cy.get(':nth-child(1) > .font-metropolis-light').type(loginData['urname'])
            cy.get('.grid > :nth-child(2) > .font-metropolis-light').type(loginData['uremail'])
            cy.get(':nth-child(3) > .font-metropolis-light').type(loginData['urphone'])
            cy.get(':nth-child(4) > .font-metropolis-light').type(loginData.ursubject)
            cy.get('div.relative > .mt-1').select('buy')
        
            cy.get('[name="message"]').click().type(loginData.urmessage)
            cy.get('button[type="submit"]').click()
        
            cy.get('.justify-between > .relative').click()//menu button
            cy.get('.fixed > .flex > :nth-child(5) > a').click()//click on services
            cy.get('.pin-spacer-service_card-1 > .service-card > .left-0 > .text-center > .block > .w-full').click()//services next page
            cy.get('.mb-5 > .flex > a > .p-3').click()//googleplay button 
            cy.get('.mb-3 > .flex > a > .p-3').click()//playstore button
            cy.get('[href="/terms-and-conditions"]').click()//terms and conditions
            cy.get('[href="/privacy-policy"]').click()//privacy policy
            




        })
    })
