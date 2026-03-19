import config from "./config";
import GlobalService from "./GlobalService";
import { ErroValidacao } from "./ErroValidacao";
export default class EstabelecimentoService {

    static cnpjPattern = /([A-Z0-9]{2})\.([A-Z0-9]{3})\.([A-Z0-9]{3})\/([A-Z0-9]{4})\-([0-9]{2})/g

    static async save(estab) {
        try {
            const data = await fetch(`${config.apiKey}/parceiros/cadastro`,{
                body: JSON.stringify(estab),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                method: 'POST'
            });
            console.log(data.status);
        } catch(e) {
            console.error(e);
        }
    }

    static async alter(id, parceiro) {
        try {
            const data = await fetch(`${config.apiKey}/parceiros/alterar/${id}`,{
                body: JSON.stringify(parceiro),
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

    static async findById(id) {
        try {
            const data = await fetch(`${config.apiKey}/parceiros/${id}`);
            return data.json();
        } catch(e) {

        }
    }

      static async addContato(idParceiro, contato) {
        try {
            await fetch(`${config.apiKey}/parceiros/criar-contato/${idParceiro}`,{
                body: JSON.stringify(contato),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                method: 'POST'
            })
        } catch(e) {

        }
    }

    static async deleteContato(idContato) {
        try {
            await fetch(`${config.apiKey}/parceiros/deletar-contato/${idContato}`,{
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                method: 'DELETE'
            })
        } catch(e) {
            
        }
    }



    static async todosContatos(idParceiro) {
        try {
            const data = await fetch(`${config.apiKey}/parceiros/${idParceiro}/todos`)
            return data.json();
        } catch(e) {

        }
    }

    static validarCampos(parceiro, senhaConfirm, campos) {
        let valido = new ErroValidacao();

        for(let i=0; i<campos.length; i++) {
            
            if(typeof parceiro[campos[i]] == 'string') {
                if(parceiro[campos[i]].toString().trim() == "") {
                    return valido.invalido("Há campos não preenchidos");
                }
                if(campos[i] == 'email') {
                    if(GlobalService.emailPattern.test(parceiro.email.trim())==false) {
                        if(GlobalService.emailPattern.test(parceiro.email.trim())==false) {
                            return valido.invalido("E-mail inválido");
                        }
                    }
                } else if(campos[i] == "senha") {
                    if(senhaConfirm.trim() != parceiro.senha.trim()) {
                        return valido.invalido("As senhas não se conhecidem");
                    }
                    if(parceiro.senha.length < 6) {
                        return valido.invalido("A senha deve conter no mínino 6 caracteres");
                    }
                } else if(campos[i] == 'cnpj') {
                    if(EstabelecimentoService.cnpjPattern.test(parceiro[campos[i]]) == false) {
                        if(EstabelecimentoService.cnpjPattern.test(parceiro[campos[i]]) == false) {
                            return valido.invalido("Insira um CNPJ válido")
                        }
                    }
                }
            } 
        }
        return valido;
    }
}