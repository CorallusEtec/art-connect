import { AuthLoginRequest } from "@/models/request/AuthLoginRequest";

export class AuthService {
    static async login(loginRequest: AuthLoginRequest) {
        try {
            const response = await fetch('/api/auth/login', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginRequest)
        });
            if(!response.ok) {
                if(response.status == 401) {
                    return "Email e/ou senha invállidos";
                } else {
                    return response.statusText;
                }
            }
            return response.json();
        } catch (error) {
            console.error(error);
        }
    }
}
