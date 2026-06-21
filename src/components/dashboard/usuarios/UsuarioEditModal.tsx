import { useUsuarioEdit } from "@/contexts/UsuarioEditContext";
import { useUsuarioById } from "@/services/UsuarioService";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { MdClose } from "react-icons/md";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usuarioEditSchema } from "@/schemas/usuarioEditSchema";
export function UsuarioEditModal() {
  const { open, setOpen, usuarioId } = useUsuarioEdit();
  const { data } = useUsuarioById(usuarioId.current);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(usuarioEditSchema),
  });
  function getStatusList() {
    return ["ATIVO", "SUSPENSO", "BANIDO"] as const;
  }

  console.log(data?.data.status.tipoStatus);
  return (
    <Dialog fullWidth hideBackdrop open={open}>
      <div className="flex items-center p-2 justify-between">
        <DialogTitle>Editar: {data?.data.nome}</DialogTitle>
        <IconButton onClick={() => setOpen(false)}>
          <MdClose />
        </IconButton>
      </div>
      <DialogContent>
        <Controller
          name="nome"
          control={control}
          render={() => (
            <TextField label="Nome" defaultValue={data?.data.nome} />
          )}
        />

        <Controller
          name="status"
          control={control}
          render={({ field: { value, onChange, onBlur } }) => (
            <Select
              onBlur={onBlur}
              value={value}
              onChange={onChange}
              defaultValue={data?.data.status.tipoStatus}
              fullWidth
            >
              {getStatusList().map((status) => (
                <MenuItem key={status}>{status}</MenuItem>
              ))}
            </Select>
          )}
        />
      </DialogContent>
    </Dialog>
  );
}
