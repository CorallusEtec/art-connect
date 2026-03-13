import UsuarioModel from './UsuarioModel';

export default class ArtistaModel extends UsuarioModel {
    constructor(data) {
        super(data);
        if(data==null) {
            this.cpf = "";
            this.dataNasc = new Date(new Date().getFullYear(),0,1,0,0);
            this.sexo = "";
            this.idArte = 0;
        } else {
            this.id = data.id;
            this.cpf = data.cpf;
            this.dataNasc = data.dataNasc;
            this.sexo = data.sexo;
            this.idArte = data.idArte;
        }  
    }
}