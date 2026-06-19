import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { config } from "./config";
import { PagedResponse } from "@/models/response/PagedResponse";
import { UsuarioResponse } from "@/models/response/UsuarioResponse";

export function useUsuarioList(params: {page: number}) {
    const query = useQuery({
        queryKey: ["listaUsuarios"],
        staleTime: 1000 * 60 * 5,
        queryFn:()=> UsuarioService.listaUsuarios(params)
    });
    return query
}


class UsuarioService {
    // Métodos de consumo da API

    static async listaUsuarios(params?: {page: number}) {
        let pageNumber = 0;
        if(params) {
            pageNumber = params.page - 1;
        }
        const request = await axios.get<PagedResponse<UsuarioResponse>>(`${config.apiURL}/usuario/findAll`,{
            params: {page: pageNumber}
        });

        return request;
    }
    

}