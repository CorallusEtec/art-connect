import { TipoConta } from "@/models/enumeration/enums";

export interface UsuarioListFilters {
    page: number,
    nome?: string,
    tipoConta?: TipoConta,
    cidade?: string,
    uf?: string,
    
}