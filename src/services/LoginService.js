import config from "./config";

export default class LoginService {
    static async login(email, senha) {
        
        try {
            const data = await fetch(`${config.apiKey}/login/logar?email=${email}&senha=${senha}`);
            return data.json();
        } catch(erro) {
        }
    }


    static async todos() {
        try {
            const data = await fetch(`${config.apiKey}/login/todos`);
            const lista = data.json();

            return lista;
        } catch(e) {
            
        }
    }
}