import {
  CircularProgress,
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
import { UsuarioEditProvider } from "@/contexts/UsuarioEditContext";
export function UsuariosTableContainer() {
  const { isLoading } = useUsuarioList();

  if (isLoading) return <CircularProgress />;

  return (
    <>
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
          <UsuarioEditProvider>
            <UsuariosTableBody />
          </UsuarioEditProvider>
        </Table>
        <UsuariosTablePagination />
      </TableContainer>
    </>
  );
}
