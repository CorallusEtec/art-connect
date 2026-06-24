import { useUsuarioList } from "@/services/UsuarioService";
import {
  Avatar,
  IconButton,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { FaUserEdit } from "react-icons/fa";
import { UsuarioEditModal } from "../UsuarioEditModal";
import { useRef, useState } from "react";
import { useUsuarioEdit } from "@/contexts/UsuarioEditContext";

export function UsuariosTableBody() {
  const { open, setOpen, usuarioId } = useUsuarioEdit();
  const { data } = useUsuarioList();
  return (
    <>
      <UsuarioEditModal />
      <TableBody>
        {data?.data.content.map((item) => (
          <TableRow hover key={item.id}>
            <TableCell>
              <IconButton
                onClick={() => {
                  usuarioId.current = item.id;
                  setOpen(true);
                }}
              >
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
            <TableCell>
              {item?.status ? item.status.tipoStatus : "---"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
}
