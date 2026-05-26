import {  z } from "zod"

// Validações de Login
export const loginSchema = z.object({
    email: z.email("insira um email válido")
    .min(1, "O email é obrigatório"),
    senha: z.string()
    .min(6, "A senha deve conter no mínimo 6 caracteres")     
});
export type AuthLoginRequest = z.infer<typeof loginSchema>