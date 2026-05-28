import { UsuarioResponse } from "./UsuarioResponse"

interface PublicacaoData {
    dataPublicacao: string
}
interface ArteQuantidade {
    id: number,
    [key: string]: number
}

export interface RelatorioResponse {
    artistasCadastrados: number
    contratantesCadastrados: number
    contratantesPendentes: number
    publicacoesSemanal: PublicacaoData[],

    usuarios: UsuarioResponse[]
    listaArtes: ArteQuantidade[]
}