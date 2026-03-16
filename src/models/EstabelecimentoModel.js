import UsuarioModel from "./UsuarioModel";

export default class EstabelecimentoModel extends UsuarioModel {
    constructor(data) {
        super(data);
        if(data == null) {
            this.cnpj = "";
            this.razaoSocial = "";

        } else {
            this.cnpj = data.cnpj;
            this.razaoSocial = data.razaoSocial;
        }
    }
}