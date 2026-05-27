import { UsuarioResponse } from "./UsuarioResponse"
export type PublicacaoData = {
    dataPublicacao: string;
}

export interface RelatorioResponse {
    artistasCadastrados: number
    contratantesCadastrados: number
    contratantesPendentes: number
    publicacoesSemanal: PublicacaoData[],

    usuarios: UsuarioResponse[]
}