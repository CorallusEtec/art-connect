
// 3. Interface para o objeto interno de Status

import { TipoConta } from "../enumeration/enums";
import { Status } from "./Status";


export interface UsuarioResponse {
  id: number;
  nome: string;
  email: string;
  tipoConta: TipoConta;
  status: Status;
  dataCriacao: string;
  fotoPerfilUrl?: string;
  nomeLog?: string;
  numLog?: number;
  cep?: string;
  bairro?: string;
  complemento?: string;
  cidade?: string;
  uf?: string;
  textoBio?: string; 
}
