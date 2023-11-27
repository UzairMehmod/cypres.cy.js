describe('NK Associates Projects Webpage', () => {
    beforeEach(() => {
        cy.visit('https://develop.d2vr74cwsk1kb.amplifyapp.com/projects');
      });
    it('Assertion of the Project Page', () => {
        cy.get('.mx-auto > :nth-child(1) > a > img').should('be.visible') //logo assertion
        cy.get('.mr-2').should('be.visible') //get in touch button
        cy.get('.justify-between > .relative').should('be.visible') // menu button
        cy.get('.mb-7').should('be.visible') // text heading
        cy.get('.scrollbar-hide > :nth-child(1)').should('be.visible') //1st clickable button after heading
        cy.get('.scrollbar-hide > :nth-child(2)').should('be.visible') //2nd clickable button after heading
        cy.get('.scrollbar-hide > :nth-child(3)').should('be.visible') //3rd clickable button after heading
        cy.get('.scrollbar-hide > .bg-gradient-to-b').should('be.visible') //4th clickable button after heading
        cy.contains('.mr-2','Get in touch').should('be.visible') //get in touch button
        cy.contains('.mb-7','NK Projects').should('be.visible') // text heading
        cy.contains('.scrollbar-hide > :nth-child(1)','Residential').should('be.visible') //1st clickable button after heading
        cy.contains('.scrollbar-hide > :nth-child(2)','Commercial').should('be.visible') //2nd clickable button after heading
        cy.contains('.scrollbar-hide > :nth-child(3)','Hotel').should('be.visible') //3rd clickable button after heading
        cy.contains('.scrollbar-hide > .bg-gradient-to-b','All').should('be.visible') //4th clickable button after heading
    })
  })
   //cy.get('.w-\[15\] > .mb-2').then('be.visible')//footer text heading
        //cy.get('.w-\[15\] > ul > :nth-child(1) > .inline-block').should('be.visible')//footer text home
        //cy.get('.w-\[15\] > ul > :nth-child(2) > .inline-block').should('be.visible')//footer text about
        //cy.get('.w-\[15\] > ul > :nth-child(3) > .inline-block').should('be.visible')//footer text property
        //cy.get(':nth-child(4) > .inline-block').should('be.visible')//footer text project
        //cy.get(':nth-child(5) > .inline-block').should('be.visible')//footer text contact us