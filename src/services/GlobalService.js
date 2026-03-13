//Utilitário de validações de formuçários 


export default class GlobalService {
    static emailPattern = /([a-z0-9]{2,})\@([a-z0-9]{2,})\.([a-z0-9]{2,})(\.([a-z0-9]{2,}))?/g;
    
    // maior ou igual a 6 char;
    static senhaPattern = /[\S]{6,}/g;


    static nomeValidator(nome) {
        return nome.length>2;
    }


    static validarCampo(campo, valor) {
        if(campo == "email") {
            return this.emailPattern.test(valor);
        } else if(campo == "nome") {
            return this.nomeValidator(valor);
        }
    }
}