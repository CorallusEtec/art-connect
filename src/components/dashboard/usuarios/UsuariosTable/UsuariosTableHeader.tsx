import { Button, TableCell, TableHead, TableRow } from "@mui/material";

export function UsuariosTableHeader() {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Editar</TableCell>
                <TableCell><Button variant="text">Foto</Button></TableCell>
                <TableCell><Button>Nome</Button></TableCell>
                <TableCell>Tipo de Conta</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Cidade</TableCell>
                <TableCell>UF</TableCell>
                <TableCell>Data de cadastro</TableCell>
                <TableCell>Status da Conta</TableCell>
            </TableRow>
        </TableHead>
    )
}