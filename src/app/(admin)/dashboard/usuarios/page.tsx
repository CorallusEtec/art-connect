"use client";
import { UsuariosTableContainer } from "@/components/dashboard/usuarios/UsuariosTable/UsuariosTableContainer";
import { useMutateUsuario } from "@/services/AdminService";
import { Alert, Box, Snackbar, Typography } from "@mui/material";
import { is } from "zod/v4/locales";

export default function AdminUsuarios() {
  return (
    <div className="flex flex-col">
      {/* TABELA */}

      <Box className="p-20">
        <UsuariosTableContainer />
      </Box>
    </div>
  );
}
