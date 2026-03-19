import config from "./config";

export class StatusContaService {

    static async findById(id) {
        try {
            const status = await fetch(`${config.apiKey}/statusConta/${id}`);
            return status.json();
        } catch(e) {

        }
    }
}