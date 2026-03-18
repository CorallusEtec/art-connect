'use client'

import Navbar from "@/components/Navbar"
import { useRouter } from "next/navigation"

export default function Error({error, reset}) {
    const route = useRouter();
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center gap-5">

                <img src="/img/logo.svg" alt="Art Connect " className="max-w-1/4" />

                <div className="flex flex-col items-center gap-7">
                    <h1 className="text-2xl text-center">Erro: {error.name}</h1>
                    <button
                    onClick={()=>route.push("/login")}
                    className="cursor-pointer hover:bg-emerald-400 bg-emerald-500 text-white text-2xl p-2 border border-emerald-600 rounded-lg">Voltar</button>
                </div>
            </div>
        
        </>
    )
}