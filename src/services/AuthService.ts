import { AuthLoginRequest } from "@/models/request/AuthLoginRequest";
import axios from "axios";
import { config } from "./config";

export class AuthService {
    static async login(loginRequest: AuthLoginRequest) {
        const response = await fetch('/api/auth/login', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginRequest)
        });
            if(!response.ok) {
                if(response.status == 401) {
                    return "Email e/ou senha invállidos";
                } else if(response.status == 500) {
                    return "Falha na conexão com o servidor";
                } else {
                    return response.statusText;
                }
            }
            return response.json();
    }
}
