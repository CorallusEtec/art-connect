import { Autocomplete, Avatar, Box, Button, CircularProgress, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, InputAdornment, Menu, Pagination, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";
import { UsuariosTableHeader } from "./UsuariosTableHeader";
import { useUsuarioList } from "@/services/UsuarioService";
import { BsSearch } from "react-icons/bs";
import { useRef, useState } from "react";
import { MdClear, MdClose, MdEdit, MdSearch } from "react-icons/md";
import { UsuarioListFilters } from "@/models/request/paged/UsuarioListFilters";
import { IoFilter } from "react-icons/io5";
import { useQueryClient } from "@tanstack/react-query";
import { FaUserEdit } from "react-icons/fa";
import { UsuarioEditModal } from "../UsuarioEditModal";

export function UsuariosTableContainer() {
    const page = useRef(1);
    const [nome, setNome] = useState<string>("");
    const [edit, setEdit] = useState(false);
    const usuarioId = useRef<number>(undefined);
    const { data, refetch, isLoading } = useUsuarioList({page: page.current, nome: nome.trim() || undefined} as UsuarioListFilters)
    function handlePagina(pagina: number) {
        page.current = pagina;
        refetch();
    }

    function handleBuscarNome() {
        if(!nome || nome.trim()!=="") {
            refetch()
        }
    }
    if(isLoading) return <CircularProgress />    

    return (
        <>
        <UsuarioEditModal usuarioId={usuarioId.current} open={edit} setOpen={setEdit} />
        <TableContainer component={Paper} className='p-5'>
            <Stack className="mb-5">
                <Typography align="center" variant='h4' >Usuarios do sistema</Typography>
            </Stack>
                <Grid container spacing={2}>
                    <Grid size={4}>
                        <TextField variant="standard" slotProps={{input:{
                            
                            startAdornment:(
                            <InputAdornment position="start">
                                <IconButton onClick={()=>handleBuscarNome()} ><MdSearch /></IconButton>
                            </InputAdornment>
                        )}}} size="small" fullWidth placeholder="Buscar usuário" value={nome} onChange={(e)=>setNome(e.target.value)}/>
                    </Grid>
                    <Grid size={2}>
                     <Button endIcon={<IoFilter />} variant="outlined">Filtros</Button>
                    </Grid>
                </Grid>
            <Pagination className="mt-5" page={page.current} onChange={(event, page)=>handlePagina(page)} shape="rounded" count={data?.data.totalPages}  />
                <Table>
                    <UsuariosTableHeader />
                    <TableBody >
                        {data?.data.content.map(item=>(
                            <TableRow key={item.id}>
                                <TableCell><IconButton onClick={()=>{
                                    usuarioId.current = item.id
                                    setEdit(true)
                                }}><FaUserEdit /></IconButton></TableCell>
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
            </>
    )
}