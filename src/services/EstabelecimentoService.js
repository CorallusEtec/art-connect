import config from "./config";

export default class EstabelecimentoService {

    static cnpjPattern = /([A-Z0-9]{2})\.([A-Z0-9]{3})\.([A-Z0-9]{3})\/([A-Z0-9]{4})\-([0-9]{2})/g

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

    static async alter(id, parceiro) {
        try {
            const data = await fetch(`${config.apiKey}/parceiros/alterar/${id}`,{
                body: JSON.stringify(parceiro),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                method: 'PUT'
            });
        } catch (e) {
            console.error(e);
        }
    }
}