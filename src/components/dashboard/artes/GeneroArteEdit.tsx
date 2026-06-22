import { useArteEdit } from "@/contexts/ArteEditContext";
import { useGeneroArteEdit } from "@/contexts/GeneroEditContext";
import { addArteSchema } from "@/schemas/addArteSchema";
import { addGeneroArteSchema } from "@/schemas/addGeneroArteSchema";
import { useAddArte, useEditArte, useGetArte } from "@/services/ArteService";
import {
  useEditGeneroArte,
  useGetGeneroArte,
} from "@/services/GeneroArteService";
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

export function GeneroArteEdit() {
  const { mutate } = useEditGeneroArte();
  const { open, setOpen, generoArteId } = useGeneroArteEdit();
  const { data, isLoading } = useGetGeneroArte(generoArteId.current);

  const { control, reset, handleSubmit, resetDefaultValues } = useForm({
    resolver: zodResolver(addGeneroArteSchema),
    defaultValues: { nomeGeneroArte: "" },
  });

  function edit(data: z.infer<typeof addGeneroArteSchema>) {
    mutate(data);

    resetDefaultValues({ nomeGeneroArte: "" });
    setOpen(false);
  }

  useEffect(() => {
    if (data) {
      reset({
        nomeGeneroArte: data.data.nomeGeneroArte || "",
      });
    }
  }, [data, reset]);
  if (isLoading) return <></>;

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Editar {data?.data.nomeGeneroArte}</DialogTitle>
      <DialogContent className="p-4!">
        <Controller
          control={control}
          name="nomeGeneroArte"
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
