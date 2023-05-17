class Login{
    setEmail(Email){
        cy.fixture('SignInLocators').then((data)=>{
            cy.get(data.EmailInput).clear({ force: true }).type(Email);
        })
    }
    setPassword(Password){
        cy.fixture('SignInLocators').then((data)=>{
            cy.get(data.PasswordInput).clear({ force: true }).type(Password);
        })
    }
    ClickOnSubmit(){
        cy.fixture('SignInLocators').then((data)=>{
            cy.get(data.ButtonSumbit).click();
        })
    }
    VerifyURL(){
       // cy.url().should('contain', 'https://ignite.mobelite-digital.info/sign-in '); //asserfffftion pour tester que l'url est correcte
    }

}
export default Login;