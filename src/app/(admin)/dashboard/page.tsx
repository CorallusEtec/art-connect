'use client'
import { Card, CardActionArea, CardActions, CardContent, CardHeader } from '@mui/material';
import Box from '@mui/material/Box'
import { BarChart } from '@mui/x-charts/BarChart';
import { BiSolidBriefcase, BiSolidStar } from 'react-icons/bi';
import { FaUserClock, FaUserTie } from 'react-icons/fa';
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
                    <Card>
                        <CardActionArea>
                            <CardContent className="flex justify-between items-center gap-2">
                                <span className="text-xs text-azul-300">Artistas cadastrados</span>
                                <BiSolidStar className="text-lg text-azul-400" />
                            </CardContent>
                            <CardContent className="flex text-3xl justify-center mb-5 items-center gap-4">
                                <h2 className="font-medium">12</h2>
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
                                <h2 className="font-medium">12</h2>
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
                                <h2 className="font-medium">12</h2>
                                <FaUserClock />
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            </div>
            
            <div className="grid grid-cols-12">
                <div className="col-span-6">
                <BarChart
                xAxis={
                    [{data: ["segunda", "tesça", "quarta"]}]
                }
                series={[{data: [0, 3, 5]}]}
                height={200}
                />
                </div>
            </div>
        </div>
        </>
    )
}