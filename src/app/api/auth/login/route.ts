import { NextResponse } from "next/server";
import { config } from '@/services/config';
import { cookies } from "next/headers";

export async function POST(loginRequest: Request) {
    try {

            const {email, senha} = await loginRequest.json();
            
            // FAZ O LOGIN NA API
            const response = await fetch(`${config.apiURL}/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({email, senha})
            })

            // SE DER ERRO DE AUTENTICAÇÃO
            if(!response.ok) {
                return NextResponse.json(
                    {messagem: "Erro aqui"},
                    {status: response.status}
                )
            }

            const data = await response.json();
            const token = data.token;

            const cookieStore = await cookies();

            // SALVA TOKEN EM COOKIES SEGUROS COM HTTPONLY
            cookieStore.set("admin_token", token, {
                httpOnly: true, // PREVINE SCRIPTS DO CLIENT-SIDE
                secure: false, // EM PRODUÇÃO REAL DEIXAR TRUE PARA HTTPS
                sameSite: "lax",
                maxAge: 60*60*2, // EXPIRA EM 2 HORAS
                path: "/",
            });

            return NextResponse.json({success: true});

        } catch(error) {
            return NextResponse.json(
                { mensagem: "Erro interno ao tentar se comunicar com o servidor" },
                { status: 500 }
                
            )
        }
}
