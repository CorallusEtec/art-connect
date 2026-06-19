'use client'
import { UsuariosTableContainer } from '@/components/dashboard/usuarios/UsuariosTable/UsuariosTableContainer';
import { Box, Typography } from '@mui/material';

export default function AdminUsuarios() {
    return (
        <div className="flex flex-col">
            {/* TABELA */}
            
            <Box className="p-20">
                <UsuariosTableContainer />
            </Box>
        </div>
    )
}