'use client'

import { CardDetails } from '@/components/CardDetails';
import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Container, Divider, Drawer, Grid, IconButton, ListItem, ListItemButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Box from '@mui/material/Box'
import { BarChart, LineChart, PieChart } from '@mui/x-charts';
import { BiSolidBriefcase, BiSolidStar, BiSolidUserPin } from 'react-icons/bi';
import { FaUserClock, FaUserTie } from 'react-icons/fa';
import { IoMdChatbubbles } from 'react-icons/io';
import { MdOutlinePendingActions } from 'react-icons/md';
import { TbUserStar } from 'react-icons/tb';

export default function AdminDashboard() {
    
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
                    <CardDetails label="Artistas cadastrados" acessory={<BiSolidStar className="text-lg text-azul-400" />}>
                        <TbUserStar />
                    </CardDetails>
                </Box>

                {/* CONTRATANTES CADASTRADOS */}
                <Box component={"span"} className="col-span-3">
                    <CardDetails label='Contratantes cadastrados' acessory={<BiSolidBriefcase className="text-lg text-azul-500 " />}>
                        <FaUserTie />
                    </CardDetails>
                </Box>

                {/* CONTRATANTES PENDENTES */}
                <Box component={"span"} className="col-span-3">
                    <CardDetails label='Mensagem dos usuários' acessory={<IoMdChatbubbles />}>
                    <BiSolidUserPin />
                    </CardDetails>
                </Box>
            </div>
            
            <div className="grid grid-cols-12 mt-10">
                {/* PUBLICAÇÕES NAS ULTIMAS SEMANAS */}
                <div className=" col-span-6">
                    <Box component={"div"} className='flex flex-col justify-center'>
                    <BarChart
                    xAxis={[{ data: ['group A', 'group B', 'group C'] }]}
                    series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                    height={250}
                    />
                    </Box>
                </div>
                {/* (ARTES E SUBGENEROS PROXIMA PRÉVIA 18/06) Publicações nos ultimos 7 dias  */}
                <div className="col-span-6">
                    <PieChart
                        series={[
                            {
                            data: [
                                { id: 0, value: 10, label: 'series A' },
                                { id: 1, value: 15, label: 'series B' },
                                { id: 2, value: 20, label: 'series C' },
                            ]
                            },
                        ]}
                        width={200}

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
              
                        </TableBody>
                        </Table>
                    </TableContainer>
            
           
        </div>
        </>
    )
}