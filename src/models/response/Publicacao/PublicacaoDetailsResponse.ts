import { PublicacaoResponse } from "./PublicacaoResponse";

export interface PublicacaoDetailsResponse {
  publicacao: PublicacaoResponse;
  likes: number;
  dislikes: number;
  // reacaUsuario: string,
  totalComentarios: number;
}
