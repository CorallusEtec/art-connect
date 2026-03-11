import UsuarioModel from "./UsuarioModel";

export default class EstabelecimentoModel extends UsuarioModel {
    constructor(data) {
        super(data);
        this.id = data.id;
        this.cnpj = data.cnpj;
        this.razaoSocial = data.razaoSocial;
        this.telefone = data.telefone;
    }
}