export default class UsuarioModel {
    constructor(data) {
        if(data==null) {
            this.nome = "";
            this.email = "";
            this.senha = "";
            this.tipoLog = "";
            this.nomeLog = "";
            this.numLog = 1;
            this.complemento = "";
            this.cep = "";
            this.bairro = "";
            this.cidade = "";
            this.estado = "";
        } else {
            this.id = data.id
            this.nome = data.nome;
            this.email = data.email;
            this.senha = data.senha;
            this.tipoLog = data.tipoLog;
            this.nomeLog = data.nomeLog;
            this.numLog = data.numLog;
            this.complemento = data.complemento;
            this.cep = data.cep;
            this.bairro = data.bairro;
            this.cidade = data.cidade;
            this.estado = data.estado;
        }
        
    }
}