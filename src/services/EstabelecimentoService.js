import config from "./config";

export default class EstabelecimentoService {
    static async save(estab) {
        try {
            const data = await fetch(`${config.apiKey}/parceiros/cadastro`,{
                body: JSON.stringify(estab),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                method: 'POST'
            });
            console.log(data.status);
        } catch(e) {
            console.error(e);
        }
    }
}