import config from "./config";
import GlobalService from "./GlobalService";

export default class ArtistaService {

    static async save(artista) {
        try {
            const data = await fetch(`${config.apiKey}/artista/cadastro`, {
                body: JSON.stringify(artista),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                method: 'POST'
            });
        } catch (erro) {
            console.error(e);
        }
    }

    static async alter(id, artista) {
        try {
            const data = await fetch(`${config.apiKey}/artista/alterar/${id}`,{
                body: JSON.stringify(artista),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                method: 'PUT'
            });
        } catch (e) {
            console.error(e);
        }
    }


    static validarCampos(artista, senhaConfirm) {
        let valido = true;
        let msg = "";
        const campos = ["nome", "email", "senha", "cpf"];
        for(let i=0; i<campos.length; i++) {
            if(artista[campos[i]] == "") {
                valido = false;
                msg = "Há campos não preenchidos";
                break;
            }
            if(GlobalService.emailPattern.test(artista.email)==false) {
                if(!GlobalService.emailPattern.test(artista.email)) {
                    valido = false;
                    msg = "E-mail inválido";
                    break;
                }
            }
            if(campos[i] == "senha") {
                if(senhaConfirm != artista.senha) {
                    valido = false;
                    msg = "As senhas não se conhecidem";
                    break;
                }
            }
        }
        return {valido: valido, msg: msg};
    }
}