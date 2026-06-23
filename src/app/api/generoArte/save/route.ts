import { GeneroArteSaveRequest } from "@/models/request/GeneroArteSaveRequest";
import { config } from "@/services/config";
import { cookies } from "next/headers";

export async function POST(editRequest: Request) {
  const request: GeneroArteSaveRequest = await editRequest.json();
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;

  // O servidor do Next.js faz a chamada para o backend externo
  const response = await fetch(`${config.apiURL}/generoArte/save`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  console.log(response);
  if (!response.ok) {
    return new Response("Erro ao salvar dados", { status: response.status });
  }

  const dados = await response.json();
  return Response.json(dados);
}
