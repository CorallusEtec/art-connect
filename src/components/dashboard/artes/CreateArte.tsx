import { addArteSchema } from "@/schemas/addArteSchema";
import { useAddArte } from "@/services/ArteService";
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

export function CreateArte({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  const { mutate } = useAddArte();

  const { control, handleSubmit, resetDefaultValues } = useForm({
    resolver: zodResolver(addArteSchema),
    defaultValues: { nomeArte: "" },
  });

  function create(data: z.infer<typeof addArteSchema>) {
    mutate(data);

    resetDefaultValues({ nomeArte: "" });
    setOpen(false);
  }

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Adicionar uma nova arte</DialogTitle>
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
