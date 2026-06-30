import { TipoConta } from "../enumeration/enums";

export interface AutorResponse {
  id: number;
  nome: string;
  tipoConta: TipoConta;
  fotoPerfilUrl: string;
}
