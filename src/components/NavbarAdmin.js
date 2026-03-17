'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
export default function NavbarAdmin() {

    const [config, setConfig] = useState(false);
    const route = useRouter();
    const [showMenu, setShowMenu] = useState(true);
    function logout() {
        sessionStorage.clear();
        route.push('/login');
    }

    return (
        <>
            <header className=" bg-teal-400 p-1 text-white items-center px-7">
                <div className="grid grid-cols-12 items-center gap-10">
                    {/* MENU */}
                    <div className="col-span-2 flex justify-between">
                        <button className="cursor-pointer" onClick={()=>setShowMenu(!showMenu)}>
                            <i className="text-4xl bi bi-list"></i>
                        </button>
                        {/* LOGO */}
                        <a href="/admin">
                            <img className="max-w-32 invert" src="/img/logo.svg" />
                        </a>
                    </div>
                    {/* INPUT */}
                    <div className="col-span-7 flex justify-center ">
                        <div className=" w-[60%] flex bg-stone-100 border gap-1 rounded-2xl border-stone-300 p-2">
                            <input
                            placeholder="Pesquisar"
                            className="outline-none w-full placeholder:text-stone-400 text-stone-800 font-normal"
                            type="text" />
                            <button className="cursor-pointer">
                                <i className="text-black bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                    {/* PERFIL */}
                    <div className="col-span-3 flex justify-end">
                        <button onClick={()=>setConfig(!config)} className="cursor-pointer">
                            <i className="text-4xl bi bi-person-circle"></i>
                        </button>
                    </div>
                </div>
            </header>            

            <div className={`bg-teal-600 h-full absolute ease-in-out duration-500 ${showMenu?"translate-x-0":"-translate-x-full"}`}>
                <ul className="text-white flex flex-col gap-2 text-lg">
                    <li>
                        <a href="/admin" className="cursor-pointer flex gap-2 hover:bg-teal-500 p-3">
                            <i className="bi bi-stack"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/usuarios" className="cursor-pointer flex hover:bg-teal-500 gap-2 p-3">
                            <i className="bi bi-people-fill"></i>
                            <span>Contas</span>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/parceiros" className="cursor-pointer flex hover:bg-teal-500 gap-2 p-3">
                            <i className="bi bi-briefcase-fill"></i>
                            <span>Estabelecimentos</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div onMouseLeave={()=>setConfig(false)} className={`m-3 p-3 absolute right-0 bg-stone-100 border text-lg font-light ${config?"flex":"invisible"} border-stone-300 rounded-lg gap-3 flex-col`}>
                <a href="/home/seuPerfil" className="flex gap-2">
                    <i className="bi bi-person"></i>
                    <span>Dados e credenciais</span>
                </a>
                <a href="" className="flex gap-2">
                    <i className="bi bi-gear"></i>
                    <span>Configurações</span>
                </a>
                <a href="" className="flex gap-2">
                    <i className="bi bi-book"></i>
                    <span>Sobre o Art Connect</span>
                </a>
                <button onClick={()=>logout()} className="cursor-pointer text-red-500 gap-2 justify-center flex">
                    <i className="bi bi-box-arrow-left"></i>
                    <span>Sair</span>
                </button>
            </div>
        </>
    )
}