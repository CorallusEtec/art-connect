'use client'
import LoginService from "@/services/LoginService";
import { useEffect, useState } from "react"
import { StatusContaService } from "@/services/StatusContaService";
export default function AdminDashboard() {
    const [listaUsuarios, setListaUsuarios] = useState([]);
    const [load, setLoad] = useState(true);
    
    useEffect(()=>{
        try {
            (async ()=>{
                const data = await LoginService.todos();
                const listaCompleta = [...data[0], ...data[1]];
                for(let i=0; i<listaCompleta.length; i++) {
                    let statusNome = await StatusContaService.findById(listaCompleta[i].idStatusConta)
                    listaCompleta[i].nomeStatusConta = statusNome.nomeStatus;
                }
                setListaUsuarios(listaCompleta);
            })();
        } finally {
            setLoad(false);
        }
    }, [])
    if(load) return <span>Carregando...</span>

    return (
        <div className="flex flex-col">
            <div className="flex justify-center p-5">
                <h1 className="text-3xl font-light text-stone-900">Bem vindo de volta, Fulano!</h1>
            </div>

            <div className="grid grid-cols-9">
                {/* CARD USUARIOS */}
                <a href="/admin/usuarios" className="p-2 col-span-2 col-start-3 gap-2 rounded-xl flex text-white flex-col bg-sky-500 border border-sky-600">
                    <div className="flex justify-center">
                        <h2 className="text-2xl">Usuários</h2>
                    </div>
                    <div className="flex items-center justify-center text-2xl gap-3">
                        <span className="text-3xl">{listaUsuarios.length}</span>
                        <i className="text-5xl bi bi-people"></i>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <i className="text-xl bi bi-person"></i>
                            <span className="text-lg">{listaUsuarios.filter(u=>u.tipoUsuario=="ARTISTA").length} Artistas</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <i className="text-xl bi bi-briefcase-fill"></i>
                            <span className="text-lg">{listaUsuarios.filter(u=>u.tipoUsuario=="ESTABELECIMENTO").length} Estabelecimentos</span>
                        </div>
                    </div>
                </a>
                {/* CARD ESTABELECIMENTOS */}
                <div className="p-2 col-span-2 col-end-8 gap-2 rounded-xl flex text-white flex-col bg-red-500 border border-red-600">
                    <div className="flex justify-center">
                        <h2 className="text-2xl">Estabelecimentos</h2>
                    </div>
                    <div className="flex items-center justify-center text-2xl gap-3">
                        <span className="text-3xl">{listaUsuarios.filter(u=>u.tipoUsuario=="ESTABELECIMENTO").length}</span>
                        <i className="text-5xl bi bi-briefcase-fill"></i>
                    </div>
                    <div className="flex justify-center gap-3">
                        <i className="text-lg bi bi-bell"></i>
                        <span>{listaUsuarios.filter(u=>u.nomeStatusConta=="Pendente").length} contas aguardando aprovação</span>
                    </div>
                </div>
            </div>
        </div>
    )
}