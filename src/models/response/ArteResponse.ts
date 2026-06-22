import { GeneroArte } from "./GeneroArteResponse";

export interface ArteResponse {
  id: number;
  nomeArte: string;
  generosArte: GeneroArte[];
}
