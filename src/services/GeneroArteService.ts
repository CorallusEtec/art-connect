import axios from "axios";
import { config } from "./config";
import { GeneroArteEditRequest } from "@/models/request/GeneroArteEditRequest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { GeneroArte } from "@/models/response/GeneroArteResponse";
import { useGeneroArteEdit } from "@/contexts/GeneroEditContext";
import { GeneroArteSaveRequest } from "@/models/request/GeneroArteSaveRequest";

export function useGetGeneroArte(id: number) {
  const query = useQuery({
    queryKey: ["generoArte", id],
    enabled: id != 0,
    queryFn: () => GeneroArteService.getById(id),
  });
  return query;
}

export function useEditGeneroArte() {
  const { generoArteId } = useGeneroArteEdit();
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: (editRequest: GeneroArteEditRequest) =>
      GeneroArteService.editById(editRequest, generoArteId.current),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["relatorio"] });
      queryClient.invalidateQueries({ queryKey: ["artes"] });
    },
  });
  return mutate;
}

export function useSaveGeneroArte() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: (saveRequest: GeneroArteSaveRequest) =>
      GeneroArteService.save(saveRequest),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["relatorio"] });
      queryClient.invalidateQueries({ queryKey: ["artes"] });
    },
  });
  return mutate;
}

export function useDeleteGeneroArte() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: (id: number) => GeneroArteService.deleteById(id),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["relatorio"] });
      queryClient.invalidateQueries({ queryKey: ["artes"] });
    },
  });
  return mutate;
}

class GeneroArteService {
  static async deleteById(id: number) {
    const response = await axios.delete(`/api/generoArte/${id}`);
    return response;
  }

  static async save(saveRequest: GeneroArteSaveRequest) {
    const response = await axios.post("/api/generoArte/save", saveRequest);
    return response;
  }

  static async editById(editRequest: GeneroArteEditRequest, id: number) {
    const response = await axios.put(`/api/generoArte/${id}`, editRequest);
    return response;
  }

  static async getById(id: number) {
    const response = await axios.get<GeneroArte>(
      `${config.apiURL}/generoArte/${id}`,
    );
    return response;
  }
}
