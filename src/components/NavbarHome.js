'use client'

import { useRouter } from "next/navigation";
import { useState } from "react"

export default function NavbarHome() {
    const [config, setConfig] = useState(false);
    const route = useRouter();
    function logout() {
        sessionStorage.clear();
        route.push('/login');
    }

    return (
        <>
            <header className="grid grid-cols-12 bg-teal-400 p-1 text-white items-center">
                <div className="col-span-4 flex items-center gap-10">
                    <a href="/home">
                        <img className="max-w-32 invert" src="/img/logo.svg" />
                    </a>
                    <div className="flex w-full bg-stone-100 border gap-1 rounded-2xl border-stone-300 p-2">
                        <input
                        placeholder="Pesquisar"
                        className="outline-none w-full placeholder:text-stone-400 text-stone-800 font-normal"
                        type="text" />
                        <button className="cursor-pointer">
                            <i className="text-black bi bi-search"></i>
                        </button>
                    </div>
                </div>
                <div className="col-span-7 flex justify-center gap-10 text-2xl">
                    <a href="" className="flex gap-2">
                        <i className="bi bi-plus-lg"></i>
                        <span>Criar Postagem</span>
                    </a>
                    <a href="" className="flex gap-2">
                        <i className="bi bi-chat"></i>
                        <span>Mensagens</span>
                    </a>
                    <a href="" className="flex gap-2">
                        <i className="bi bi-bell"></i>
                        <span>Notificações</span>
                    </a>
                </div>            

                <div className="col-span-1 flex pr-5 justify-end">
                    <button onClick={()=>setConfig(!config)} className="cursor-pointer">
                        <i className="text-4xl bi bi-person-circle"></i>
                    </button>
                    
                </div>
            </header>
            <div className="flex justify-end p-3 absolute right-0">
                <div className={`bg-stone-100 border text-lg font-light p-2 ${config?"visible":"invisible"} border-stone-300 rounded-lg gap-3 flex flex-col`}>
                    <a href="/home/seuPerfil" className="flex gap-2">
                        <i className="bi bi-person"></i>
                        <span>Meu Perfil</span>
                    </a>
                    <a href="" className="flex gap-2">
                        <i className="bi bi-gear"></i>
                        <span>Configurações</span>
                    </a>
                    <a href="" className="flex gap-2">
                        <i className="bi bi-book"></i>
                        <span>Sobre o Art Connect</span>
                    </a>
                    <a href="" className="flex gap-2">
                        <i className="bi bi-question-circle"></i>
                        <span>Suporte</span>
                    </a>
                    <button onClick={()=>logout()} className="cursor-pointer text-red-500 gap-2 justify-center flex">
                        <i className="bi bi-box-arrow-left"></i>
                        <span>Sair</span>
                    </button>
                </div>
            </div>
        </>
    )
}