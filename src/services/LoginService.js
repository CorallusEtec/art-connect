import config from "./config";

export default class LoginService {
    static async login(email, senha) {
        try {
            const data = await fetch(`${config.apiKey}/login/logar?email=${email}&senha=${senha}`);
            if(data.status == 302) {

            }
            return data.json();
        } catch(erro) {
            console.error('Erro ao buscar artistas:', erro);
        }
    }
}