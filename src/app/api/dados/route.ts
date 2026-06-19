import { cookies } from "next/headers";
import { config } from '@/services/config'

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;

  // O servidor do Next.js faz a chamada para o backend externo
  const response = await fetch(`${config.apiURL}/admin/relatorio`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    return new Response('Erro ao buscar dados', { status: response.status });
  }

  const dados = await response.json();
  return Response.json(dados);
}
