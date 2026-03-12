'use client'

import ArteService from "@/services/ArteService";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function Page() {
    const [user, setUser] = useState(null);
    const [load, setLoad] = useState(true);
    const route = useRouter();
    
    useEffect(()=>{
        if(sessionStorage.getItem('@login') == null) {
            route.push("/login");
        } else {
            const data = JSON.parse(sessionStorage.getItem('@login'));
            if(data.tipoUsuario=="ARTISTA") {
                data.nomeArte = getArte(data.idArte)
            } else {
                data.nomeArte = data.razaoSocial;
            }
            setUser(data);
            setLoad(false);
        }
    }, [])
    async function getArte(idArte) {
        const data = await ArteService.getArte(idArte);
        return data.nomeArte ;
    }

    if(load) return <span>Carregando</span>

    return (
        <div className="grid grid-cols-12">

            <div className="col-start-4 mt-4 p-4 col-span-6 border border-stone-300 bg-stone-100 rounded-lg">
                {/* DADOS E FOTO */}
                <div className="grid grid-cols-12 p-3">
                    {/* IMAGEM */}
                    <div className="col-span-1">
                        <i className="text-7xl bi bi-person-circle"></i>
                    </div>
                    {/* NOME LOG E ETC */}
                    <div className="col-span-11">
                        {/* NOME */}
                        <div className="flex gap-3 justify-center">
                            <span>{user.nome}</span>
                            <a href="/home/editarPerfil">
                                <i className="bi bi-pencil-square"></i>
                            </a>
                        </div>
                        {/* ARTE E LOG */}
                        <div className="flex justify-around">
                            <span>{user.nomeArte}</span>
                            <span>{user.cidade} - {user.estado}</span>
                        </div>
                        {/* POST E SEG */}
                        <div className="flex justify-around">
                            <div className="flex gap-2">
                                <span>3</span>
                                <span>postagens</span>
                            </div>
                            <div className="flex gap-2">
                                <span>2</span>
                                <span>seguidores</span>
                            </div>
                            <div className="flex gap-2">
                                <span>0</span>
                                <span>seguindo</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Contatos */}
                <div className="flex flex-col">
                    <div className="flex gap-2 justify-center">
                        <i className="bi bi-paperclip"></i>
                        <h2>Contatos</h2>
                    </div>

                    {/* LISTA DE CONTATOS */}
                    <div className="flex justify-around">
                        {/* EMAIL */}
                        <div className="flex flex-col">
                            <div className="flex gap-2">
                                <i className="bi bi-envelope"></i>
                                <h3>E-mail</h3>
                            </div>
                            <ul>
                                <li>email@gmail.com</li>
                                <li>outroe@gmail.com</li>
                            </ul>
                        </div>

                        {/* TELEFONE */}
                        <div className="flex flex-col">
                            <div className="flex gap-2">
                                <i className="bi bi-telephone"></i>
                                <h3>Telefone</h3>
                            </div>
                            <ul>
                                <li>(11) 99999-9999</li>
                                <li>(11) 99999-9999</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}