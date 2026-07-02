import { TipoMidia } from "@/models/enumeration/enums";
import { AutorResponse } from "../AutorResponse";
import { Status } from "../Status";

export interface PublicacaoResponse {
  id: number;
  legenda: string;
  urlMidia: string;
  tipoMidia: TipoMidia;
  dataPublicacao: string;
  statusPublicacao: Status;
  autor: AutorResponse;
}
