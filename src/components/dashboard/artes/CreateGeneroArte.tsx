import { addArteSchema } from "@/schemas/addArteSchema";
import { addGeneroArteSchema } from "@/schemas/addGeneroArteSchema";
import { useAddArte } from "@/services/ArteService";
import { useSaveGeneroArte } from "@/services/GeneroArteService";
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
import { Controller, useForm } from "react-hook-form";
import z from "zod";

export function CreateGeneroArte({
  arteId,
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  arteId: number;
}) {
  const { mutate } = useSaveGeneroArte();

  const { control, handleSubmit, setValue } = useForm({
    resolver: zodResolver(addGeneroArteSchema),
    defaultValues: { nomeGeneroArte: "" },
  });

  function create(data: z.infer<typeof addGeneroArteSchema>) {
    mutate({
      nomeGeneroArte: data.nomeGeneroArte,
      arteId: arteId,
    });

    setValue("nomeGeneroArte", "");
    setOpen(false);
  }

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Adicionar um novo gênero</DialogTitle>
      <DialogContent className="p-4!">
        <Controller
          control={control}
          name="nomeGeneroArte"
          render={({ field }) => (
            <TextField size="small" label="Nome do genero de arte" {...field} />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleSubmit(create)}
          variant="contained"
          color="primary"
        >
          Adicionar
        </Button>
        <Button
          color="success"
          onClick={() => setOpen(false)}
          variant="outlined"
        >
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
