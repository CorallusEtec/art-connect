import UsuarioModel from './UsuarioModel';

export default class ArtistaModel extends UsuarioModel {
    constructor(data) {
        super(data);
        this.id = data.id;
        this.cpf = data.cpf;
        this.dataNasc = data.dataNasc;
        this.sexo = data.sexo;
        this.idArte = data.idArte;
    }
}