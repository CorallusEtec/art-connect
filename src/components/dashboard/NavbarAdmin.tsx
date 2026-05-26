'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { SideBarAdmin } from "./SideBarAdmin";
export default function NavbarAdmin() {

    const [config, setConfig] = useState(false);
    const route = useRouter();
    const [showMenu, setShowMenu] = useState(false);
    function logout() {
        sessionStorage.clear();
        route.push('/login');
    }

    return (
        <>
            <header className=" bg-azul-400 p-1 text-white items-center px-3">
                <div className="grid grid-cols-12 items-center gap-10">
                    {/* MENU */}
                    <div className="col-span-2 flex justify-between">
                        <button className="cursor-pointer" onClick={()=>setShowMenu(!showMenu)}>
                            <i className="text-2xl bi bi-list"></i>
                        </button>
                        {/* LOGO */}
                        <a href="/dashboard">
                            <img className="max-w-20 invert" src="/assets/icons/artConnect-logo.svg" />
                        </a>
                    </div>
                   
                    {/* PERFIL */}
                    <div className="col-end-13 flex justify-end">
                        <button onClick={()=>setConfig(!config)} className="cursor-pointer">
                            <i className="text-3xl bi bi-person-circle"></i>
                        </button>
                    </div>
                </div>
            </header>            

            <SideBarAdmin showMenu={showMenu} />

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