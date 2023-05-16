
class config {
    GetURL() {
        let envi = Cypress.env('ENV');
            switch (envi) 
            {
                case 'production':
                    URL = "";
                case 'staging':
                    URL = "";
                case "dev": 
                    URL= "https://ignite.mobelite-digital.info/ ";
                    
            }
            return(URL)
    }
}export default config;