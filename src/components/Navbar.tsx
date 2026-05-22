'use client'

import { useState } from "react"

export default function Navbar() {

    const [showCadastro, setShowCadastro] = useState(false);
    const [mouseOn, setMouseOn] = useState(false);

    return (
        <>
            <header className="flex justify-between bg-azul-400 p-2 px-5 text-white items-center">
                <img className="max-w-32 invert" src="/img/logo.svg" />
                <div className="flex gap-20 items-center text-xl">
                    <a href="/">Sobre o Art Connect</a>
                    <div className="">
                        <a className="border-2 rounded-lg p-3 px-8  bg-azul-300 border-azul-600" href="/login">Entrar</a>
                    </div>
                    
                    
                </div>
                
            </header>
        </>
    )
}