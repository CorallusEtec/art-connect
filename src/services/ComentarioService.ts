import { ComentarioResponse } from "@/models/response/ComentarioResponse";
import axios from "axios";
import { config } from "./config";
import { useQuery } from "@tanstack/react-query";

export function useGetComentario(idComentario: number) {
  const query = useQuery({
    queryKey: [idComentario, "comentario"],
    queryFn: () => ComentarioService.findById(idComentario),
    enabled: !!idComentario,
  });
  return query;
}

class ComentarioService {
  static async findById(idComentario: number) {
    const response = await axios.get<ComentarioResponse>(
      `/api/comentario/${idComentario}`,
    );
    return response;
  }
}
