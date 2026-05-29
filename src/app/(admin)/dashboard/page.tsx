'use client'

import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Container, Divider, Drawer, Grid, IconButton, ListItem, ListItemButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Box from '@mui/material/Box'
import { LineChart, PieChart } from '@mui/x-charts';
import { BiSolidBriefcase, BiSolidStar } from 'react-icons/bi';
import { FaUserClock, FaUserTie } from 'react-icons/fa';
import { MdOutlinePendingActions } from 'react-icons/md';
import { TbUserStar } from 'react-icons/tb';
import { useRelatorio } from '@/contexts/RelatorioContext';
import { useState } from 'react';
import { BsPencilFill, BsPenFill } from 'react-icons/bs';

export default function AdminDashboard() {
    


    const { relatorio } = useRelatorio();
    return (
        <>
        
        <div className="flex flex-col">
            <div className="grid grid-cols-11 p-4">
                <h1 className="col-start-2 col-span-10 text-2xl font-light text-stone-900">Bem vindo de volta, Administrador</h1>
            </div>
            {/* CARDS */}
            <div className="grid grid-cols-11 gap-7 mx-5 pb-7 border-b border-cinza-100">
                {/* ARTISTAS CADASTRADOS */}
                <Box component={"span"} className="col-start-2 col-span-3">
                    <Card>
                        <CardActionArea>
                            <CardContent className="flex justify-between items-center gap-2">
                                <span className="text-xs text-azul-300">Artistas cadastrados</span>
                                <BiSolidStar className="text-lg text-azul-400" />
                            </CardContent>
                            <CardContent className="flex text-3xl justify-center mb-5 items-center gap-4">
                                <h2 className="font-medium">{relatorio.artistasCadastrados}</h2>
                                <TbUserStar />
                            </CardContent>
                            
                        </CardActionArea>
                    </Card>
                </Box>

                {/* CONTRATANTES CADASTRADOS */}
                <Box component={"span"} className="col-span-3">
                    <Card>
                        <CardActionArea>
                            <CardContent className="flex justify-between items-center gap-2">
                                <span className="text-xs text-azul-500">Contratantes cadastrados</span>
                                <BiSolidBriefcase className="text-lg text-azul-500 " />
                            </CardContent>
                            <CardContent className="flex text-3xl mb-5 justify-center items-center gap-4">
                                <h2 className="font-medium">{relatorio.contratantesCadastrados}</h2>
                                <FaUserTie />
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>

                {/* CONTRATANTES PENDENTES */}
                <Box component={"span"} className="col-span-3">
                    <Card>
                        <CardActionArea>
                            <CardContent className="flex justify-between items-center gap-2">
                                <span className="text-xs text-vermelho-500">Contratantes pendentes</span>
                                <MdOutlinePendingActions className='text-lg text-vermelho-300' />
                            </CardContent>
                            <CardContent className="flex text-3xl text-vermelho-300 mb-5 justify-center items-center gap-4">
                                <h2 className="font-medium">{relatorio.contratantesPendentes}</h2>
                                <FaUserClock />
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            </div>
            
            <div className="grid grid-cols-12">
                {/* ARTISTAS E CONTRATANTES CADASTROS */}
                <div className="col-span-6">
                    <Box sx={{ width: '100%', height: 300 }}>
                        
                    </Box>
                </div>
                {/* (ARTES E SUBGENEROS PROXIMA PRÉVIA 18/06) Publicações nos ultimos 7 dias  */}
                <div className="col-span-6">
                    <PieChart
                        series={[
                            {
                            data: relatorio.listaArtes.map(arte=> ({
                                id: arte.id,
                                label: Object.keys(arte).filter(k=>k!=="id")[0],
                                value: arte[Object.keys(arte).filter(k=>k!=="id")[0]],
                            })),
                            },
                        ]}
                        width={200}
                        height={200}
                        />
                </div>
            </div>
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
                            {relatorio.usuarios.map(user=>(
                                <TableRow key={user.id}>
                                    <TableCell >{user.nome}</TableCell>
                                    <TableCell >{user.tipoConta}</TableCell>
                                    <TableCell >{user.email}</TableCell>
                                    <TableCell >{user.cidade}</TableCell>
                                    <TableCell >{user.uf}</TableCell>
                                    <TableCell >{user.status?.tipoStatus.nomeTipoStatus}</TableCell>
                                    <TableCell >
                                        <IconButton >
                                            <BsPencilFill />
                                        </IconButton>
                                        </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        </Table>
                    </TableContainer>
            
           
        </div>
        </>
    )
}