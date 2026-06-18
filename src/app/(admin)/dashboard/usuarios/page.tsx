'use client'
import { useUsuarioList } from '@/services/UsuarioService';
import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Container, Divider, Drawer, Grid, IconButton, ListItem, ListItemButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function AdminUsuarios() {

    const [inputFiltro, setInputFiltro] = useState("");
    const [showFiltro, setShowFiltro] = useState(false);
    const [buscaUsuario, setBuscaUsuario] = useState("");
    const { data } = useUsuarioList()


    const route = useRouter();


    return (
        <div className="flex flex-col h-dvh">
            {/* CONTROLES DE BUSCA */}
            <div className="flex flex-col gap-10 mb-7">
                {/* REGISTRO NUMEROS */}
                <div className="flex flex-col items-center p-3 gap-2">
                    <h1 className="text-4xl">Contas Cadastradas</h1>
                    <h2 className="text-xl font-light">Total de registros encontrados: {data?.data.content.length}</h2>
                </div>
                {/* CONTROLES */}
                <div className="flex flex-col items-center gap-5">
                    {/* INPUT COM FILTRO */}
                    <div className="flex gap-2 items-center">
                        <input value={buscaUsuario} onChange={(e)=>setBuscaUsuario(e.target.value)} className="text-xl p-2 outline-none border-b-2 border-b-stone-200"
                        type="text" placeholder="Pesquise por conta"
                        />
                        <div className="flex flex-col gap-3">
                            <div>
                                {/* BOTÃO FILTRAR */}
                                <button onClick={()=>setShowFiltro(!showFiltro)} className="cursor-pointer text-stone-800 hover:bg-stone-200 p-2
                                flex items-center gap-2 rounded-lg bg-stone-100 border-stone-300 border">
                                    <i className="bi bi-filter"></i>
                                    <span>Filtrar</span>
                                </button>
                                
                                {/* MENU FILTRAR */}
                                <div onMouseLeave={()=>setShowFiltro(false)} className={`absolute gap-3 ${showFiltro?"flex":"invisible"} p-3 rounded-xl flex-col bg-stone-100 border border-stone-300`}>
                                    <div>
                                        <span className="text-xl">Filtar por</span>
                                    </div>
                                    <div className="flex">
                                        <button  onClick={()=>{setInputFiltro("Nome"); setShowFiltro(false)}} className="rounded-lg w-full hover:bg-stone-200 cursor-pointer">
                                            <span>Nome</span>
                                        </button>
                                    </div>
                                    <div className="flex gap-3">
                                        <button onClick={()=>{setInputFiltro("Cidade"); setShowFiltro(false)}} className="rounded-lg w-full hover:bg-stone-200 cursor-pointer">
                                            <span>Cidade</span>
                                        </button>
                                    </div>
                                    <div className="flex gap-3">
                                        <button  onClick={()=>{setInputFiltro("Status"); setShowFiltro(false)}} className="rounded-lg w-full hover:bg-stone-200 cursor-pointer">
                                            <span>Status</span>
                                        </button>
                                    </div>
                                </div>
                                
                            </div>
                            {inputFiltro!=""?
                            <button onClick={()=>setInputFiltro("")} className=" bg-stone-200 text-stone-800 cursor-pointer rounded-lg flex gap-2 p-1">
                                <i className="bi bi-x"></i>
                                {inputFiltro}
                            </button>:<></>}
                        </div>
                    </div>
                    <button className="cursor-pointer
                    hover:bg-azul-400 bg-azul-500
                    p-2 w-[15%] rounded-xl border border-azul-700 text-xl text-white"
                    >Buscar</button>
                </div>
            </div>
            {/* TABELA */}
            <div className="flex justify-center">
                <h2 className='font-semibold text-3xl'>Usuários no sistema</h2>
            </div>
            <Divider variant='middle' />
            <TableContainer component={Paper} elevation={1} className='p-5'>
                <Table>
                    <TableHead>
                    <TableRow >
                        <TableCell >Nome</TableCell>
                        <TableCell >Tipo de Conta</TableCell>
                        <TableCell >Email</TableCell>
                        <TableCell >Cidade</TableCell>
                        <TableCell >UF</TableCell>
                        <TableCell >Status da Conta</TableCell>
                        <TableCell ><Button>Editar</Button></TableCell>

                    </TableRow>
                </TableHead>
                <TableBody >
                    {data?.data.content.map(item=>(
                        <TableRow key={item.id}>
                        <TableCell>{item.nome}</TableCell>
                        <TableCell>{item.tipoConta}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>{item.cidade}</TableCell>
                        <TableCell>{item.uf}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}