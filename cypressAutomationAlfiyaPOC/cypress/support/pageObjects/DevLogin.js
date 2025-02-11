class DevLogin{

    login(email, password){
        cy.get('#email').type(email, { delay: 100 });
        cy.wait(2000); // Wait for any validation or event to complete
        cy.get('input[name=password]').type(password);
        cy.get('#email').should('have.value', 'alfiya+20C@appexert.com'); // Ensure email persists
        cy.get('.mt-4 > .ant-btn').click();
        cy.wait(2000)
    }
}
export default DevLogin;


