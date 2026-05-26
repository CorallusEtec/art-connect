'use client'
import { Card, CardActions, CardContent } from '@mui/material';
import Box from '@mui/material/Box'
import { useState } from "react"
export default function AdminDashboard() {
    const [listaUsuarios, setListaUsuarios] = useState([]);

    return (
        <>
        <div className="flex flex-col">
            <div className="flex p-7">
                <h1 className="text-2xl font-light text-stone-900">Bem vindo de volta, Administrador</h1>
            </div>
            <div className="grid grid-cols-9">
                <Box component={"small"}>
                    <Card>
                        <CardContent>
                            <span>Artistas Cadastrados</span>
                        </CardContent>
                        <CardActions>

                        </CardActions>

                    </Card>
                </Box>
            </div>
            
        </div>
        </>
    )
}