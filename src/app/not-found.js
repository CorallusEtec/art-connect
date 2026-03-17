'use client'
import { useRouter } from "next/navigation";

import Navbar from "@/components/Navbar";

export default function Erro404() {
    const route = useRouter();
    return (
        <>
        <Navbar />
            <div className="flex justify-center items-center gap-5">

                <img src="/img/logo.svg" alt="Art Connect " className="max-w-1/4" />

                <div className="flex flex-col items-center gap-7">
                    <h1 className="text-7xl">Erro 404</h1>
                    <p className="text-xl">O endereço que você está tentando acessar não existe.</p>
                    <button
                    onClick={()=>route.push("/home")}
                    className="cursor-pointer hover:bg-emerald-400 bg-emerald-500 text-white text-2xl p-2 w-[30%] border border-emerald-600 rounded-lg">Voltar</button>
                </div>
            </div>
        </>
    )
}