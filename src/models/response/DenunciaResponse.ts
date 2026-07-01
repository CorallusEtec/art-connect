import { TipoDenuncia } from "../enumeration/enums";
import { AutorResponse } from "./AutorResponse";
import { Status } from "./Status";

export interface DenunciaResponse {
  id: number;
  titulo: string;
  dataEnvio: string;
  idRecurso: number;
  tipoDenuncia: TipoDenuncia;
  autor: AutorResponse;
  status: Status;
}
