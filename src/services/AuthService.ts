import { AuthLoginRequest } from "@/models/request/AuthLoginRequest";

export class AuthService {
    static async login(loginRequest: AuthLoginRequest) {
        try {
            const response = await fetch('/api/auth/login', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginRequest)
        });
            
            return response.json();
        } catch (error) {
            console.error(error);
        }
    }
}
