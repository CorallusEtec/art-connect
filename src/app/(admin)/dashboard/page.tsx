'use client'

import { CardDetails } from '@/components/CardDetails';
import { useRelatorio } from '@/services/AdminService';
import { Card, CardActionArea, CardContent, Grid, Skeleton, Typography } from '@mui/material';
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
                                <CardDetails insight={data.artistasCadastrados} label="Artistas cadastrados" acessory={<BiSolidStar className="text-lg text-azul-400" />}>
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
                                <CardDetails insight={data.contratantesCadastrados} label='Contratantes cadastrados' acessory={<BiSolidBriefcase className="text-lg text-azul-500 " />}>
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
                                <CardDetails insight={0} label='Publicações compartilhadas' acessory={<BsFillShareFill className="text-lg text-azul-500 " />}>
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
                                    <Typography variant='h6'>Publicações nessa semana</Typography>
                                </CardContent>
                                <CardContent>
                                    <BarChart
                                    xAxis={[{ data: ['group A', 'group B', 'group C'] }]}
                                    series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                                    width={800}
                                    height={270}
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
                            <CardActionArea>
                                <CardContent>
                                <Typography variant='h6'>Artes mais selecionadas</Typography>
                            </CardContent>
                            <CardContent>
                                <PieChart
                                
                            series={[{
                                data: data ? data?.artes.map(arte=>({
                                    value: arte.quantidadeArtistas,
                                    id: arte.arte.id,
                                    label: arte.arte.nomeArte
                                })): [],
                                innerRadius: 70,
                                outerRadius: 100
                                },
                            
                            ]}
                            height={200}
                            />
                            </CardContent>
                            </CardActionArea>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}