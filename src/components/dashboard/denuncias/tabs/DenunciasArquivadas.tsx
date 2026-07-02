import {
  useListDenunciaArquivada,
  useMutateStatusDenuncia,
} from "@/services/DenunciaService";
import { DenunciaCard } from "../DenunciaCard";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { MdDelete, MdDeleteOutline } from "react-icons/md";
import { useRef, useState } from "react";

type DenunciasArquivadasTabProps = {
  index: number;
  value: number;
};

export function DenunciasArquivadasTab({
  index,
  value,
}: DenunciasArquivadasTabProps) {
  const { data, isLoading } = useListDenunciaArquivada();
  const [confirmAlert, setConfirmAlert] = useState(false);
  const { mutate, isPending } = useMutateStatusDenuncia();
  const denunciaExcluir = useRef<number>(0);
  if (isLoading) return <></>;

  function toggleExcluir(idDenuncia: number) {
    setConfirmAlert((prev) => !prev);
    denunciaExcluir.current = idDenuncia;
  }

  return (
    <>
      <Dialog aria-hidden open={confirmAlert}>
        <DialogTitle>
          <Typography variant="body2">
            Deseja mesmo excluir essa denúncia?
          </Typography>
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => setConfirmAlert(false)}>Cancelar</Button>
          <Button
            onClick={() => {
              mutate({
                idDenuncia: denunciaExcluir.current,
                tipoStatus: "CONCLUIDO",
              });
              setConfirmAlert(false);
            }}
            loading={isPending}
            disabled={isPending}
            variant="outlined"
            color="error"
          >
            Excluir
          </Button>
        </DialogActions>
      </Dialog>
      <Box component="div" hidden={index != value}>
        {data!.data.content.length > 0 ? (
          data?.data.content.map((d, index) => (
            <Box key={index}>
              <Button
                variant="text"
                onClick={() => toggleExcluir(d.id)}
                color="error"
                size="small"
              >
                Excluir Denúncia
              </Button>
              <Box component="div" className="my-5">
                <DenunciaCard data={d} />
              </Box>
            </Box>
          ))
        ) : (
          <Typography align="center" variant="subtitle1" color="textDisabled">
            Nenhuma denúncia arquivada
          </Typography>
        )}
      </Box>
    </>
  );
}
