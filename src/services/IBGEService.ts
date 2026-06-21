import { UfResponse } from "@/models/response/UfResponse";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useUfList() {
  const query = useQuery({
    queryKey: ["uf"],
    queryFn: IBGEService.getUfs,
  });
  return query;
}

class IBGEService {
  static async getUfs() {
    const response = await axios.get<UfResponse[]>(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome",
    );
    return response;
  }
}
