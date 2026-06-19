import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const response = NextResponse.json({ message: 'Logout realizado com sucesso' });
    
    // Remove o cookie definindo a expiração para o passado
    response.cookies.delete("admin_token");
    
    return response;
  }