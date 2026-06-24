import axios from "axios";
import { config } from "./config";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ArteResponse } from "@/models/response/ArteResponse";
import { PagedResponse } from "@/models/response/PagedResponse";
import { ArteEditRequest } from "@/models/request/ArteEditRequest";
import { useArteEdit } from "@/contexts/ArteEditContext";

export function useListarArtes() {
  const query = useQuery({
    queryKey: ["artes"],
    queryFn: ArteService.listarArtes,
  });
  return query;
}
export function useAddArte() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: (saveRequest: ArteEditRequest) =>
      ArteService.saveArte(saveRequest),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["relatorio"] });
    },
  });

  return mutate;
}

export function useGetArte(id: number) {
  const query = useQuery({
    queryKey: ["arte", id],
    queryFn: () => ArteService.getArteById(id),
    enabled: !!id,
  });
  return query;
}

export function useDeleteArte() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: (id: number) => ArteService.deletar(id),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["relatorio"] });
    },
  });
  return mutate;
}

export function useEditArte() {
  const { arteId } = useArteEdit();
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: (editRequest: ArteEditRequest) =>
      ArteService.editById(editRequest, arteId.current),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["relatorio"] });
      queryClient.invalidateQueries({ queryKey: ["artes"] });
    },
  });
  return mutate;
}

class ArteService {
  static async listarArtes() {
    const response = await axios.get<PagedResponse<ArteResponse>>(
      `${config.apiURL}/arte/findAll`,
    );
    return response;
  }

  static async getArteById(id: number) {
    const response = await axios.get<ArteResponse>(
      `${config.apiURL}/arte/${id}`,
    );
    return response;
  }
  static async saveArte(saveRequest: ArteEditRequest) {
    const request = await axios.post(`/api/arte/save`, saveRequest);
    return request;
  }

  static async deletar(id: number) {
    const response = await axios.delete(`/api/arte/delete/${id}`);
    return response;
  }
  static async editById(editRequest: ArteEditRequest, id: number) {
    const response = await axios.put(`/api/arte/edit/${id}`, editRequest);
    return response;
  }
}
