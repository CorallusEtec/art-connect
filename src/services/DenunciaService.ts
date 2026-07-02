import axios from "axios";
import { config } from "./config";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PagedResponse } from "@/models/response/PagedResponse";
import { DenunciaResponse } from "@/models/response/DenunciaResponse";
import { TipoStatus } from "@/models/enumeration/enums";
import { id } from "zod/v4/locales";

export function useListDenunciaArquivada() {
  const query = useQuery({
    queryKey: ["denunciasArquivadas"],
    queryFn: DenunciaService.findAllDenunciasArquivadas,
  });
  return query;
}

export function useListDenunciaPendente() {
  const query = useQuery({
    queryKey: ["denunciasPendentes"],
    queryFn: DenunciaService.findAllDenunciasPendentes,
  });
  return query;
}

export function useMutateStatusDenuncia() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: ({
      idDenuncia,
      tipoStatus,
    }: {
      idDenuncia: number;
      tipoStatus: TipoStatus;
    }) => DenunciaService.alterStatusById({ idDenuncia, tipoStatus }),
    onSettled: () => {
      queryClient.invalidateQueries();
    },
  });
  return mutate;
}
class DenunciaService {
  static async findAllDenunciasPendentes() {
    const response = await axios.get<PagedResponse<DenunciaResponse>>(
      "/api/denuncia/denunciasPendentes",
    );
    return response;
  }

  static async findAllDenunciasArquivadas() {
    const response = await axios.get<PagedResponse<DenunciaResponse>>(
      "/api/denuncia/denunciasArquivadas",
    );
    return response;
  }

  static async alterStatusById({
    idDenuncia,
    tipoStatus,
  }: {
    idDenuncia: number;
    tipoStatus: TipoStatus;
  }) {
    const response = await axios.patch(`/api/denuncia/${idDenuncia}`, {
      tipoStatus: tipoStatus,
    });
    return response;
  }
}
