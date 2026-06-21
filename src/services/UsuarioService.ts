import { useQuery, keepPreviousData } from "@tanstack/react-query";
import axios from "axios";
import { config } from "./config";
import { PagedResponse } from "@/models/response/PagedResponse";
import { UsuarioResponse } from "@/models/response/UsuarioResponse";
import { UsuarioListFilters } from "@/models/request/paged/UsuarioListFilters";
import { useSearchParams } from "next/navigation";

export function useUsuarioList() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const query = useQuery({
    queryKey: ["listaUsuarios", params.toString()],
    staleTime: 1000 * 60 * 5,
    placeholderData: keepPreviousData,
    queryFn: () =>
      UsuarioService.listaUsuarios(Object.fromEntries(searchParams.entries())),
  });
  return query;
}

class UsuarioService {
  // Métodos de consumo da API

  static async listaUsuarios(
    params?: UsuarioListFilters | string[] | { [ket: string]: string },
  ) {
    const request = await axios.get<PagedResponse<UsuarioResponse>>(
      `${config.apiURL}/usuario/findAll`,
      {
        params: params,
      },
    );

    return request;
  }
}
