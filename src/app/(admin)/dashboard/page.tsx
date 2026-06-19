'use client'

import { CardDetails } from '@/components/CardDetails';
import { useRelatorio } from '@/services/AdminService';
import { Card, CardContent, Grid, Skeleton, Typography } from '@mui/material';
import Box from '@mui/material/Box'
import { BarChart, PieChart } from '@mui/x-charts';
import { BiSolidBriefcase, BiSolidStar } from 'react-icons/bi';
import { BsFillShareFill } from 'react-icons/bs';
import { CgInsights } from 'react-icons/cg';
import { FaUserTie } from 'react-icons/fa';

import { TbUserStar } from 'react-icons/tb';

export default function AdminDashboard() {
    
    const { data, isLoading } = useRelatorio();




    return (
        <div className="flex flex-col">
            <Typography className='p-4' variant='h5'>Bem vindo, Administrador</Typography>
            <Grid spacing={1} container>
                <Grid container size={8}>
                    {/* Artistas cadastrados */}
                    <Grid size={4}>
                        <Box component={"span"}>
                            {data ? (
                                <CardDetails insight={data.artistasCadastrados} elevation={1} label="Artistas cadastrados" acessory={<BiSolidStar className="text-lg text-azul-400" />}>
                                    <TbUserStar />
                                </CardDetails>
                            ):(
                                <Skeleton variant="rectangular" width={210} height={60} />
                            )}
                        </Box>
                    </Grid>

                    {/* CONTRATANTES CADASTRADOS */}
                    <Grid size={4}>
                        <Box component={"span"}>
                            {data ? (
                                <CardDetails insight={data.contratantesCadastrados} elevation={1} label='Contratantes cadastrados' acessory={<BiSolidBriefcase className="text-lg text-azul-500 " />}>
                                    <FaUserTie />
                                </CardDetails>
                            ): (
                                <>
                                    <Skeleton />
                                    <Skeleton />
                                    <Skeleton />
                                </>
                            )}
                        </Box>
                    </Grid>
                    {/* Publicações Compartilhadas */}
                    <Grid size={4}>
                        <Box component={"span"}>
                            {data ? (
                                <CardDetails insight={0} elevation={1} label='Publicações compartilhadas' acessory={<BsFillShareFill className="text-lg text-azul-500 " />}>
                                    <CgInsights />
                                </CardDetails>
                            ): (
                                <>
                                    <Skeleton variant="circular" width={40} height={40} />
                                    <Skeleton />
                                    <Skeleton />
                                </>
                            )}
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
                                data: data ? data?.artes.map(arte=>({
                                    value: arte.quantidadeArtistas,
                                    id: arte.arte.id,
                                    label: arte.arte.nomeArte
                                })): []
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