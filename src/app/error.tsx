'use client'

import Navbar from "@/components/Navbar"
import { Button } from "@mui/material";
import { useRouter } from "next/navigation"
import { IoWarning } from "react-icons/io5";

export default function Error({error, reset}: {error: Error & {digest?: string}, reset: ()=>void}) {
    const route = useRouter();
    return (
        <div className="h-screen overflow-y-hidden">
            <Navbar />
            <div className="flex justify-center items-center gap-5 h-full">
                <div className="flex flex-col items-center gap-7">
                    <div className="flex items-center gap-4">
                        <IoWarning className="text-4xl text-vermelho-300" />
                        <h1 className="text-3xl font-medium text-center">Ocorreu um erro</h1>
                    </div>
                    <p>Não foi possível processar o conteúdo solicitado. Por favor tente mais tarde</p>
                    <Button
                    onClick={()=>route.push("/login")}
                    className="bg-azul-600">Voltar</Button>
                </div>
            </div>
        
        </div>
    )
}