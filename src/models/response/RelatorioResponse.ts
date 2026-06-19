import { ArteRelatorioResponse } from "./ArteRelatorioResponse"

export interface RelatorioResponse {
    artistasCadastrados: number
    contratantesCadastrados: number
    publicacoesCompartilhadas: number,
    artes: ArteRelatorioResponse[]
}