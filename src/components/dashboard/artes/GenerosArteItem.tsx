import { GeneroArte } from "@/models/response/GeneroArteResponse";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { GeneroArteEdit } from "./GeneroArteEdit";
import { useGeneroArteEdit } from "@/contexts/GeneroEditContext";
import { useDeleteGeneroArte } from "@/services/GeneroArteService";

export function GenerosArteItem({ g }: { g: GeneroArte }) {
  const [deleteDialog, setDeleteDialog] = useState(false);
  const { generoArteId, setOpen } = useGeneroArteEdit();
  const { mutate, isPending } = useDeleteGeneroArte();
  return (
    <>
      <Dialog open={deleteDialog} onClose={() => setDeleteDialog(false)}>
        <DialogTitle variant="subtitle1">
          Deseja mesmo excluir {g.nomeGeneroArte}?
        </DialogTitle>
        <DialogActions>
          <Button
            onClick={() => setDeleteDialog(false)}
            variant="outlined"
            color="primary"
          >
            Cancelar
          </Button>
          <Button
            onClick={() => {
              mutate(g.id);
              setDeleteDialog(false);
            }}
            variant="contained"
            color="error"
            disabled={isPending}
            loading={isPending}
          >
            Sim
          </Button>
        </DialogActions>
      </Dialog>

      <ListItem divider key={g.id}>
        <Box component={"div"} className="flex w-full justify-between">
          <ListItemText>
            <Typography variant="caption">{g.nomeGeneroArte}</Typography>
          </ListItemText>
          <Box>
            <IconButton
              onClick={() => {
                generoArteId.current = g.id;
                setOpen(true);
              }}
            >
              <MdEdit />
            </IconButton>
            <IconButton onClick={() => setDeleteDialog(true)} color="error">
              <MdDelete />
            </IconButton>
          </Box>
        </Box>
      </ListItem>
    </>
  );
}
