import { NextResponse } from "next/server";
import { config } from '@/services/config';
import { cookies } from "next/headers";
export async function  POST(request: Request) {
    try {
        const { email, senha } = await request.json();

        const response = await fetch(`${config.apiURL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({email, senha})
        })

        if(!response.ok) {
            return NextResponse.json(
                {messagem: response.statusText},
                {status: response.status}
            )
        }

        const data = await response.json();
        const token = data.token;

        const cookieStore = await cookies();

        cookieStore.set("admin_token", token, {
            httpOnly: true,
            secure: false, // EM PRODUÇÃO REAL DEIXAR TRUE PARA HTTPS
            sameSite: "lax",
            maxAge: 60*60*2,
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