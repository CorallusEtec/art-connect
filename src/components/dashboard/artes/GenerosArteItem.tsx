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

export function GenerosArteItem({ g }: { g: GeneroArte }) {
  const [deleteDialog, setDeleteDialog] = useState(false);
  return (
    <>
      <Dialog open={deleteDialog} onClose={() => setDeleteDialog(false)}>
        <DialogTitle variant="subtitle1">Deseja mesmo excluir?</DialogTitle>
        <DialogActions>
          <Button
            onClick={() => setDeleteDialog(false)}
            variant="outlined"
            color="primary"
          >
            Cancelar
          </Button>
          <Button variant="contained" color="error">
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
            <IconButton>
              <MdEdit />
            </IconButton>
            <IconButton color="error">
              <MdDelete />
            </IconButton>
          </Box>
        </Box>
      </ListItem>
    </>
  );
}
