import config from "./config";

export default class ArtistaService {

    static async save(artista) {
        try {
            const data = await fetch(`${config.apiKey}/artista/cadastro`, {
                body: JSON.stringify(artista),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                method: 'POST'
            });
        } catch (erro) {

        }
    }

}