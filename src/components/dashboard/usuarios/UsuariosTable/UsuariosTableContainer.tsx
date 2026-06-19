import { Autocomplete, Avatar, Box, CircularProgress, Container, InputAdornment, Pagination, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";
import { UsuariosTableHeader } from "./UsuariosTableHeader";
import { useUsuarioList } from "@/services/UsuarioService";
import { BsSearch } from "react-icons/bs";
import { useRef, useState } from "react";

export function UsuariosTableContainer() {
    const page = useRef(1);
    const { data, refetch, isLoading } = useUsuarioList({page: page.current})
    
    function handlePagina(pagina: number) {
        page.current = pagina;
        refetch();
    }

    if(isLoading) return <CircularProgress />    

    return (
        <TableContainer component={Paper} className='p-5'>
            <Stack>
                <Typography align="center" variant='h4' >Usuarios do sistema</Typography>
            </Stack>
                <Autocomplete
                options={data?.data.content ? data?.data.content.map(user=>user.nome):[]}
                
                renderInput={({ size = "small", ...params})=> (<TextField placeholder="Buscar usuário" size={size} {...params}/>)}
                />
            <Pagination  className="mt-5" page={page.current} onChange={(event, page)=>handlePagina(page)} shape="rounded" count={data?.data.totalPages}  />
                <Table>
                    <UsuariosTableHeader />
                    <TableBody >
                        {data?.data.content.map(item=>(
                            <TableRow key={item.id}>
                                <TableCell>
                                    <Avatar
                                    sx={{backgroundColor: "#0067EA"}}
                                    src={item?.fotoPerfilUrl}
                                    alt={"Foto de perfil de "+item.nome}
                                    >
                                        {item.nome.charAt(0)}
                                    </Avatar>
                                </TableCell>
                                <TableCell>{item.nome}</TableCell>
                                <TableCell>{item.tipoConta}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item?.cidade || "---"}</TableCell>
                                <TableCell>{item?.uf || "---"}</TableCell>
                                <TableCell>{new Date(item.dataCriacao).toLocaleDateString()}</TableCell>
                                <TableCell>{item?.status ? item.status.tipoStatus: "---"}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Pagination className="mt-5" page={page.current} onChange={(event, page)=>handlePagina(page)} shape="rounded" count={data?.data.totalPages}  />
            </TableContainer>
    )
}