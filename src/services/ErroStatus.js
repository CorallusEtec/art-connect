export default class ErroStatus {
    constructor() {
        this.erro = false;
        this.msg = "";
    }


    gerarErro(msg) {
        this.erro = true;
        this.msg = msg;
        return this;
    }
}