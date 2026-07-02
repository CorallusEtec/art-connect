import axios from "axios";
import { config } from "./config";
import { PublicacaoDetailsResponse } from "@/models/response/Publicacao/PublicacaoDetailsResponse";
import { useQuery } from "@tanstack/react-query";

export function useGetPublicacao(id: number) {
  const query = useQuery({
    queryFn: () => PublicacaoService.findById(id),
    queryKey: [id, "denunciaPublicacao"],
    enabled: !!id,
  });
  return query;
}

class PublicacaoService {
  static async findById(id: number) {
    const response = await axios.get<PublicacaoDetailsResponse>(
      `${config.apiURL}/publicacao/${id}`,
    );
    return response;
  }
}
