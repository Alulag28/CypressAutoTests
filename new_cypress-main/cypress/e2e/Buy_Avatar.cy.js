describe('Покупка аватара', function () {                                
    it('e2e тест на покупку нового аватара для тренера', function () {   
         cy.visit('https://pokemonbattle.ru/');                          
         cy.get('input[type="email"]').type('USER_LOGIN');
         cy.get('input[type="password"]').type('PASSWORD');
         cy.get('button[type="submit"]').click();
         cy.wait(1000);
         cy.get('.header__container > .header__id').click({ force: true });
         cy.get('[href="/shop"]').click();
         cy.get('.available > button').first().click({ force: true });
         cy.get('.credit').type('TEST_CARDNUMBER');
         cy.get('.k_input_date').type('TEST_DATE');
         cy.get('.k_input_ccv').type('TEST_CVV');
         cy.get('.k_input_name').type('TEST_NAME');
         cy.get('.pay-btn').click();
         cy.wait(1000);
         cy.get('.payment__fielheader').contains('Подтверждение покупки');
         cy.get('#cardnumber').type('TEST_AUTH_CODE');
         cy.get('.payment__submit-button').click();
         cy.get('.payment__font-for-success').should('be.visible');
     });
 });
