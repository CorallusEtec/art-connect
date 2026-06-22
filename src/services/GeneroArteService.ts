import axios from "axios";
import { config } from "./config";
import { GeneroArteEditRequest } from "@/models/request/GeneroArteEditRequest";
import { useMutation } from "@tanstack/react-query";

export function useDeleteGeneroArte() {
  const mutate = useMutation({
    mutationFn: (id: number) => GeneroArteService.deleteById(id),
    onMutate: () => {},
  });
  return mutate;
}

class GeneroArteService {
  static async deleteById(id: number) {
    const response = await axios.delete(`/api/generoArte/${id}`);
    return response;
  }

  static async editById(editRequest: GeneroArteEditRequest, id: number) {
    const response = await axios.put(`/api/arte/${id}`, editRequest);
    return response;
  }
}
