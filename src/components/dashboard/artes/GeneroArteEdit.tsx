import { useGeneroArteEdit } from "@/contexts/GeneroEditContext";
import { addGeneroArteSchema } from "@/schemas/addGeneroArteSchema";
import {
  useEditGeneroArte,
  useGetGeneroArte,
} from "@/services/GeneroArteService";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";

export function GeneroArteEdit() {
  const { mutate, isPending } = useEditGeneroArte();
  const { open, setOpen, generoArteId } = useGeneroArteEdit();
  const { data, isLoading } = useGetGeneroArte(generoArteId.current);

  const {
    control,
    formState: { errors },
    reset,
    handleSubmit,
    resetDefaultValues,
  } = useForm({
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
            <TextField
              error={!!errors.nomeGeneroArte}
              helperText={errors.nomeGeneroArte?.message}
              size="small"
              label="Nome da arte"
              {...field}
            />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleSubmit(edit)}
          variant="contained"
          color="primary"
        >
          Salvar alterações
        </Button>
        <Button
          onClick={() => {
            setOpen(false);
            generoArteId.current = 0;
          }}
          color="success"
          variant="outlined"
        >
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
