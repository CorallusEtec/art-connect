import { useUsuarioEdit } from "@/contexts/UsuarioEditContext";
import { useUsuarioById } from "@/services/UsuarioService";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { MdClose } from "react-icons/md";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usuarioEditSchema } from "@/schemas/usuarioEditSchema";
import { status } from "@/models/enumeration/enums";
import { useEffect, useState } from "react";
import z from "zod";
import { UsuarioAdminEditRequest } from "@/models/request/UsuarioAdminEditRequest";
import { useMutateUsuario } from "@/services/AdminService";
export function UsuarioEditModal() {
  const { open, setOpen, usuarioId, setAlert, alert } = useUsuarioEdit();
  const { data, isLoading } = useUsuarioById(usuarioId.current);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(usuarioEditSchema),
  });
  const {
    mutate,
    isPending,
    error: requestError,
    isSuccess,
  } = useMutateUsuario();
  const [confirmAlert, setConfirmAlert] = useState(false);
  function getStatusList() {
    return status;
  }

  useEffect(() => {
    if (data) {
      reset({
        status: data.data.status.tipoStatus || "ATIVO",
        nome: data.data.nome || "",
        email: data.data.email || "",
      });
    }
  }, [data, reset]);
  if (isLoading) return <></>;

  const saveEdits = (edit: z.infer<typeof usuarioEditSchema>) => {
    const editRequest: UsuarioAdminEditRequest = {
      email: edit.email,
      nome: edit.nome,
      status: {
        ...data!.data.status,
        descricao: edit.descricao,
        tipoStatus: edit.status,
      },
    };
    mutate(editRequest);

    setConfirmAlert(false);
    setOpen(false);
    setAlert(true);
  };

  return (
    <>
      <caption>
        <Snackbar
          open={alert}
          onClose={() => setAlert(false)}
          autoHideDuration={3000}
        >
          <Alert
            variant="filled"
            onClose={() => setAlert(false)}
            severity="success"
          >
            Dados alterados com sucesso!
          </Alert>
        </Snackbar>
      </caption>
      <Dialog aria-hidden open={confirmAlert}>
        <DialogTitle>
          <Typography variant="body2">
            Deseja mesmo salvar essas alterações
          </Typography>
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => setConfirmAlert(false)}>Cancelar</Button>
          <Button
            onClick={handleSubmit(saveEdits)}
            variant="outlined"
            disabled={isPending}
            loading={isPending}
            color="error"
          >
            Salvar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog fullWidth hideBackdrop open={open}>
        <div className="flex items-center p-2 justify-between">
          <DialogTitle>Editar: {data?.data.nome}</DialogTitle>
          <IconButton onClick={() => setOpen(false)}>
            <MdClose />
          </IconButton>
        </div>
        <DialogContent className="flex flex-col gap-5">
          <Grid container spacing={2}>
            <Grid size={6}>
              <Controller
                name="nome"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Nome"
                    variant="outlined"
                    fullWidth
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid size={6}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField fullWidth label="Email" {...field} />
                )}
              />
            </Grid>
          </Grid>
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Status</InputLabel>
                <Select label="Status" {...field}>
                  {getStatusList().map((status) => (
                    <MenuItem value={status} key={status}>
                      {status}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
          <Controller
            name="descricao"
            control={control}
            render={({ field }) => (
              <TextField
                rows={3}
                label="Descrição do status"
                placeholder="Mensagem do status"
                multiline
                {...field}
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} variant="outlined">
            Cancelar
          </Button>
          <Button onClick={() => setConfirmAlert(true)} variant="contained">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
