import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { config } from "./config";
import { PagedResponse } from "@/models/response/PagedResponse";
import { UsuarioResponse } from "@/models/response/UsuarioResponse";

export function useUsuarioList() {
    const query = useQuery({
        queryKey: ["listaUsuarios"],
        queryFn: UsuarioService.listaUsuarios
    });
    return query
}


class UsuarioService {
    // Métodos de consumo da API

    static async listaUsuarios() {
        const request = await axios.get<PagedResponse<UsuarioResponse>>(`${config.apiURL}/usuario/findAll`);

        return request;
    }
    

}