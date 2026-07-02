import { config } from "@/services/config";
import { cookies } from "next/headers";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { tipoStatus } = await request.json();
  const { id } = await params;
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;

  // O servidor do Next.js faz a chamada para o backend externo
  const response = await fetch(`${config.apiURL}/admin/publicacao/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ tipoStatus: tipoStatus }),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return new Response("Erro ao alterar dados", { status: response.status });
  }

  const dados = await response.json();
  return Response.json(dados);
}
