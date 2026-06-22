import { useArteEdit } from "@/contexts/ArteEditContext";
import { addArteSchema } from "@/schemas/addArteSchema";
import { useAddArte, useEditArte, useGetArte } from "@/services/ArteService";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";

export function EditArte() {
  const { mutate } = useEditArte();
  const { open, setOpen, arteId } = useArteEdit();
  const { data, isLoading } = useGetArte(arteId.current);

  const { control, reset, handleSubmit, resetDefaultValues } = useForm({
    resolver: zodResolver(addArteSchema),
    defaultValues: { nomeArte: "" },
  });

  function edit(data: z.infer<typeof addArteSchema>) {
    mutate(data);

    resetDefaultValues({ nomeArte: "" });
    setOpen(false);
  }

  useEffect(() => {
    if (data) {
      reset({
        nomeArte: data.data.nomeArte || "",
      });
    }
  }, [data, reset]);
  if (isLoading) return <></>;

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Editar {data?.data.nomeArte}</DialogTitle>
      <DialogContent className="p-4!">
        <Controller
          control={control}
          name="nomeArte"
          render={({ field }) => (
            <TextField size="small" label="Nome da arte" {...field} />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleSubmit(edit)}
          variant="contained"
          color="secondary"
        >
          Salvar alterações
        </Button>
        <Button onClick={() => setOpen(false)} variant="outlined">
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
