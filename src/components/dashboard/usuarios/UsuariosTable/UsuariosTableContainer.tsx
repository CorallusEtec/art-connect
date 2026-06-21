import {
  CircularProgress,
  Pagination,
  Paper,
  Stack,
  Table,
  TableContainer,
  Typography,
} from "@mui/material";
import {
  UsuariosTableHeader,
  UsuarioTableSearch,
  UsuariosTableBody,
  UsuariosTablePagination,
} from "@/components/dashboard/usuarios/UsuariosTable";
import { useUsuarioList } from "@/services/UsuarioService";
import { useRef, useState } from "react";
import { UsuarioEditModal } from "../UsuarioEditModal";
export function UsuariosTableContainer() {
  const [edit, setEdit] = useState(false);
  const usuarioId = useRef<number>(undefined);
  const { isLoading } = useUsuarioList();

  if (isLoading) return <CircularProgress />;

  return (
    <>
      <UsuarioEditModal
        usuarioId={usuarioId.current}
        open={edit}
        setOpen={setEdit}
      />
      <TableContainer component={Paper} className="p-5">
        <Stack className="mb-5">
          <Typography align="center" variant="h4">
            Usuarios do sistema
          </Typography>
        </Stack>
        <UsuarioTableSearch />
        <UsuariosTablePagination />
        <Table>
          <UsuariosTableHeader />
          <UsuariosTableBody />
        </Table>
        <UsuariosTablePagination />
      </TableContainer>
    </>
  );
}
