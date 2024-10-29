describe('Покупка аватара', function () {                                
    it('e2e тест на покупку нового аватара для тренера', function () {   
         cy.visit('https://pokemonbattle.ru/');                          
         cy.get('input[type="email"]').type('alulag28@yandex.ru');
         cy.get('input[type="password"]').type('Password123');
         cy.get('button[type="submit"]').click();
         cy.wait(1000);
         cy.get('.header__container > .header__id').click({ force: true });
         cy.get('[href="/shop"]').click();
         cy.get('.available > button').first().click({ force: true });
         cy.get('.credit').type('2202200223948454');
         cy.get('.k_input_date').type('0629');
         cy.get('.k_input_ccv').type('125');
         cy.get('.k_input_name').type('alulag28');
         cy.get('.pay-btn').click();
         cy.wait(1000);
         cy.get('.payment__fielheader').contains('Подтверждение покупки');
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.get('.payment__font-for-success').should('be.visible');
     });
 });