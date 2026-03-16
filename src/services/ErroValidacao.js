export class ErroValidacao {
    constructor() {
        this.valido = true;
        this.msg = "";
    }
    invalido(msg) {
        this.msg = msg;
        this.valido = false;
        return this;
    }
}