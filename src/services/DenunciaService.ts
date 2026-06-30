import axios from "axios";
import { config } from "./config";
import { useQuery } from "@tanstack/react-query";
import { PagedResponse } from "@/models/response/PagedResponse";
import { DenunciaResponse } from "@/models/response/DenunciaResponse";

export function useListDenuncia() {
  const query = useQuery({
    queryKey: ["denuncias"],
    queryFn: DenunciaService.findAllDenuncias,
  });
  return query;
}

class DenunciaService {
  static async findAllDenuncias() {
    const response =
      await axios.get<PagedResponse<DenunciaResponse>>("/api/denuncia");
    return response;
  }
}
