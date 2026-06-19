import { useQuery, keepPreviousData } from "@tanstack/react-query";
import axios from "axios";
import { config } from "./config";
import { PagedResponse } from "@/models/response/PagedResponse";
import { UsuarioResponse } from "@/models/response/UsuarioResponse";
import { UsuarioListFilters } from "@/models/request/paged/UsuarioListFilters";

export function useUsuarioList(params: UsuarioListFilters) {
    const query = useQuery({
        queryKey: ["listaUsuarios", params.page],
        staleTime: 1000 * 60 * 5,
        placeholderData: keepPreviousData,
        queryFn:()=> UsuarioService.listaUsuarios(params)
    });
    return query
}


class UsuarioService {
    // Métodos de consumo da API

    static async listaUsuarios(params?: UsuarioListFilters) {
        let numPage = 0
        if(params) {
            numPage = params.page - 1;
        }
        const request = await axios.get<PagedResponse<UsuarioResponse>>(`${config.apiURL}/usuario/findAll`,{
            params: {...params, page: numPage}
        });

        return request;
    }
    

}