'use client'

import { useState } from "react"

export default function Navbar() {

    const [showCadastro, setShowCadastro] = useState(false);
    const [mouseOn, setMouseOn] = useState(false);

    return (
        <>
            <header className="flex justify-between bg-teal-500 p-2 px-5 text-white items-center">
                <img className="max-w-32 invert" src="/img/logo.svg" />
                <div className="flex gap-20 items-center text-xl">
                    <a href="/">Sobre o Art Connect</a>
                    <a href="/login">Entrar</a>
                    <button onClick={()=>setShowCadastro(!showCadastro)}
                    className="bg-teal-700 border cursor-pointer border-emerald-800 p-2 rounded-md">Crie uma Conta</button>
                    
                </div>
                
            </header>
            <div onMouseLeave={()=>setShowCadastro(false)} className={`${showCadastro?"flex":"invisible"} flex-col rounded-xl justify-end p-3 absolute right-0 gap-5 bg-stone-100`}>
                <a className="hover:bg-stone-200 rounded-xl p-2" href="/cadastro/artista"><span>Cadastro de Artistas</span></a>
                <a className="hover:bg-stone-200 rounded-xl p-2" href="/cadastro/parceiros"><span>Cadastro de Estabelecimentos</span></a>
            </div>
        </>
    )
}