import config from "./config";

export default class ArteService {

    static async todos() {
        try {
            const data = await fetch(`${config.apiKey}/arte/todos`);
            return data.json();
        } catch(e) {
            console.error(e);
        }
    }

    static async getArte(idArte) {
        try {
            const data = await fetch(`${config.apiKey}/arte/${idArte}`);

            return data.json();
        } catch (e) {
            console.error(e);
        }
    }
}