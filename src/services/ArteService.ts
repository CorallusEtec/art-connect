import axios from "axios";
import { config } from "./config";
import { useQuery } from "@tanstack/react-query";
import { ArteResponse } from "@/models/response/ArteResponse";
import { PagedResponse } from "@/models/response/PagedResponse";

export function useListarArtes() {
  const query = useQuery({
    queryKey: ["artes"],
    queryFn: ArteService.listarArtes,
  });
  return query;
}

class ArteService {
  static async listarArtes() {
    const response = await axios.get<PagedResponse<ArteResponse>>(
      `${config.apiURL}/arte/findAll`,
    );
    return response;
  }
}
