import { ArteRelatorioResponse } from "./ArteRelatorioResponse";

export interface RelatorioResponse {
  artistasCadastrados: number;
  contratantesCadastrados: number;
  publicacoesRealizadas: number;
  artes: ArteRelatorioResponse[];
  publicacaoSemana: [[string, number]];
}
