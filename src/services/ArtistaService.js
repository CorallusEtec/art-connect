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
            console.error(e);
        }
    }

    static async alter(id, artista) {
        try {
            const data = await fetch(`${config.apiKey}/artista/alterar/${id}`,{
                body: JSON.stringify(artista),
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