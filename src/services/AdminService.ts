import axios from "axios";
import { config } from "./config";
import { RelatorioResponse } from "@/models/response/RelatorioResponse";
import {
  useMutation,
  useMutationState,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import z, { email } from "zod";
import { usuarioEditSchema } from "@/schemas/usuarioEditSchema";
import { UsuarioAdminEditRequest } from "@/models/request/UsuarioAdminEditRequest";
import { useUsuarioEdit } from "@/contexts/UsuarioEditContext";
import { useSearchParams } from "next/navigation";
import { TipoStatus } from "@/models/enumeration/enums";

export function useRelatorio() {
  const query = useQuery({
    queryFn: AdminService.getRelatorios,
    queryKey: ["relatorio"],
  });

  return query;
}

export function useMutateUsuario() {
  const { usuarioId } = useUsuarioEdit();
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const mutate = useMutation({
    mutationFn: (editData: UsuarioAdminEditRequest) =>
      AdminService.editUsuario(usuarioId.current, editData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["usuario", usuarioId.current],
      });
      queryClient.invalidateQueries({
        queryKey: ["listaUsuarios", params.toString()],
      });
    },
  });

  return mutate;
}

export function useDeletePublicacao() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: ({
      idPublicacao,
      tipoStatus,
    }: {
      idPublicacao: number;
      tipoStatus: TipoStatus;
    }) => AdminService.alterStatusPublicacao({ idPublicacao, tipoStatus }),
    onSettled: () => {
      queryClient.invalidateQueries();
    },
  });
  return mutate;
}

class AdminService {
  static async getRelatorios(): Promise<RelatorioResponse> {
    const response = await fetch("/api/dados");

    return await response.json();
  }

  static async editUsuario(id: number, editData: UsuarioAdminEditRequest) {
    const response = await axios.put(`/api/usuario/${id}`, editData);
    return response;
  }

  static async alterStatusPublicacao({
    idPublicacao,
    tipoStatus,
  }: {
    idPublicacao: number;
    tipoStatus: TipoStatus;
  }) {
    const response = await axios.patch(`/api/publicacao/${idPublicacao}`, {
      tipoStatus: tipoStatus,
    });
    return response;
  }
}
