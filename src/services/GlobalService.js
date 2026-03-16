//Utilitário de validações de formuçários 
import { ErroValidacao } from "./ErroValidacao";

export default class GlobalService {
    static emailPattern = /([a-z0-9]{2,})\@([a-z0-9]{2,})\.([a-z0-9]{2,})(\.([a-z0-9]{2,}))?/g;
    
    // maior ou igual a 6 char;
    static senhaPattern = /[\S]{6,}/g;


    static validarLogin(campos) {
        let valido = new ErroValidacao();
        for(let i=0; i<campos.length; i++) {
            if(typeof campos[i] == 'string') {
                if(campos[i].trim() == "") {
                    return valido.invalido("Há campos não preenchidos");
                }
                
            }
        }
        return valido;
    }
}
