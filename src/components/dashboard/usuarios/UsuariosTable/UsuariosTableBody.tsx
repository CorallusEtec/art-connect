import { useUsuarioList } from "@/services/UsuarioService";
import {
  Avatar,
  IconButton,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { FaUserEdit } from "react-icons/fa";

export function UsuariosTableBody() {
  const { data } = useUsuarioList();

  return (
    <TableBody>
      {data?.data.content.map((item) => (
        <TableRow hover key={item.id}>
          <TableCell>
            <IconButton>
              <FaUserEdit />
            </IconButton>
          </TableCell>
          <TableCell>
            <Avatar
              sx={{ backgroundColor: "#0067EA" }}
              src={item?.fotoPerfilUrl}
              alt={"Foto de perfil de " + item.nome}
            >
              {item.nome.charAt(0)}
            </Avatar>
          </TableCell>
          <TableCell>{item.nome}</TableCell>
          <TableCell>{item.tipoConta}</TableCell>
          <TableCell>{item.email}</TableCell>
          <TableCell>{item?.cidade || "---"}</TableCell>
          <TableCell>{item?.uf || "---"}</TableCell>
          <TableCell>
            {new Date(item.dataCriacao).toLocaleDateString()}
          </TableCell>
          <TableCell>{item?.status ? item.status.tipoStatus : "---"}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
