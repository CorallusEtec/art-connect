'use client'

import { CardDetails } from '@/components/CardDetails';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box'
import { BarChart, LineChart, PieChart } from '@mui/x-charts';
import { BiSolidBriefcase, BiSolidStar, BiSolidUserPin } from 'react-icons/bi';
import { BsFillShareFill } from 'react-icons/bs';
import { CgInsights } from 'react-icons/cg';
import { FaUserClock, FaUserTie } from 'react-icons/fa';
import { IoMdChatbubbles } from 'react-icons/io';
import { MdOutlinePendingActions } from 'react-icons/md';
import { TbUserStar } from 'react-icons/tb';

export default function AdminDashboard() {
    
    return (
 
        
        <div className="flex flex-col">
            
                <Typography className='p-4' variant='h5'>Bem vindo, Administrador</Typography>

            
            
            <Grid spacing={1} container>
                <Grid container size={8}>
                    {/* Artistas cadastrados */}
                    <Grid size={4}>
                        <Box component={"span"}>
                            <CardDetails elevation={1} label="Artistas cadastrados" acessory={<BiSolidStar className="text-lg text-azul-400" />}>
                                <TbUserStar />
                            </CardDetails>
                        </Box>
                    </Grid>

                    {/* CONTRATANTES CADASTRADOS */}
                    <Grid size={4}>
                        <Box component={"span"}>
                            <CardDetails elevation={1} label='Contratantes cadastrados' acessory={<BiSolidBriefcase className="text-lg text-azul-500 " />}>
                                <FaUserTie />
                            </CardDetails>
                        </Box>
                    </Grid>
                    {/* Publicações Compartilhadas */}
                    <Grid size={4}>
                        <Box component={"span"}>
                            <CardDetails elevation={1} label='Publicações compartilhadas' acessory={<BsFillShareFill className="text-lg text-azul-500 " />}>
                                <CgInsights />
                            </CardDetails>
                        </Box>
                    </Grid>
                    {/* PUBLICAÇÕES NAS ULTIMAS SEMANAS */}
                    <Grid size={12}>
                        <Box>
                            <Card>
                                <CardContent>
                                    <BarChart
                                    xAxis={[{ data: ['group A', 'group B', 'group C'] }]}
                                    series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                                    width={600}
                                    height={220}
                                    />
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>
                {/* (ARTES E SUBGENEROS PROXIMA PRÉVIA 18/06) Publicações nos ultimos 7 dias  */}
                <Grid size={4}> 
                    
                    <Box>
                        <Card>
                            <CardContent>
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
                            height={200}
                            />
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>

        </div>

    )
}