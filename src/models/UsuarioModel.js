export default class UsuarioModel {
    constructor(data) {
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