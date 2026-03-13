import config from "./config";
import GlobalService from "./GlobalService";

// Validações de dados e CRUDS do artista

export default class ArtistaService {

    // Perssistir o artista no banco de dados e na sessão

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

    // Alterar o artista no banco de dados e na sessão
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

    // Validar Campos da primeira página de cadastro do artista
    static validarCampos(artista, senhaConfirm, campos) {
        let valido = true;
        let msg = "";
        for(let i=0; i<campos.length; i++) {
            if(campos[i] != 'dataNasc') {
                if(artista[campos[i]].toString().trim() == "") {
                    valido = false;
                    msg = "Há campos não preenchidos";
                    
                    break;
                }
            } else {
                const hoje = new Date();
                const nascimento = new Date(artista.dataNasc);
                
                // Calcula a diferença de idade
                let idade = hoje.getFullYear() - nascimento.getFullYear();
                const mes = hoje.getMonth() - nascimento.getMonth();
                
                // Ajusta se o aniversário ainda não ocorreu este ano
                if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
                    idade--;
                }
                if(idade<18) {
                    valido = false;
                    msg = "O artista deve ser maior de idade";
                    break;
                }
            }
            
            if(GlobalService.emailPattern.test(artista.email.trim())==false) {
                if(GlobalService.emailPattern.test(artista.email.trim()) ==false) {
                    valido = false;
                    msg = "E-mail inválido";
                    
                    break;
                }
            }
            if(campos[i] == "senha") {
                if(senhaConfirm.trim() != artista.senha.trim()) {
                    valido = false;
                    msg = "As senhas não se conhecidem";
                    
                    break;
                }
                if(artista.senha.length < 6) {
                    valido = false;
                    msg = "A senha deve conter no mínino 6 caracteres";
                    
                    break;
                }
            }
        }
        return {valido: valido, msg: msg};
    }
}