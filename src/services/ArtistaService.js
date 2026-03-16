import config from "./config";
import { ErroValidacao } from "./ErroValidacao";
import GlobalService from "./GlobalService";

// Validações de dados e CRUDS do artista

export default class ArtistaService {

    static cpfPattern = /([0-9]{3})\.([0-9]{3})\.([0-9]{3})\-([0-9]{2})/g;

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
        let valido = new ErroValidacao();

        for(let i=0; i<campos.length; i++) {
            
            if(typeof artista[campos[i]] == 'string') {
                if(artista[campos[i]].toString().trim() == "") {
                    return valido.invalido("Há campos não preenchidos");
                }
                if(campos[i] == 'email') {
                    if(GlobalService.emailPattern.test(artista.email.trim())==false) {
                        if(GlobalService.emailPattern.test(artista.email.trim())==false) {
                            return valido.invalido("E-mail inválido");
                        }
                    }
                } else if(campos[i] == "senha") {
                    if(senhaConfirm.trim() != artista.senha.trim()) {
                        return valido.invalido("As senhas não se conhecidem");
                    }
                    if(artista.senha.length < 6) {
                        return valido.invalido("A senha deve conter no mínino 6 caracteres");
                    }
                } 
            } else if (typeof artista[campos[i]] == 'object') {
                    if(campos[i] == 'dataNasc') {
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
                        return valido.invalido("O artista deve ser maior de idade");
                    }
                }
            }
        }
        return valido;
    }
}