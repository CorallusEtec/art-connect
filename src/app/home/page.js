'use client'

import CriarPost from "@/components/CriarPost";
import PostText from "@/components/PostText";
import UsuarioModel from "@/models/UsuarioModel";
import LoginService from "@/services/LoginService";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function Home() {
    const route = useRouter();
    const [usuario, setUsuario] = useState(new UsuarioModel(null));
    const [load, setLoad] = useState(true);
    useEffect(()=>{
        if(sessionStorage.getItem('@login') == null) {
            route.push("/login");
        } else {
            const data = JSON.parse(sessionStorage.getItem('@login'));
            (async()=>{
                const login = await LoginService.login(data.email, data.senha);
                setUsuario(login);
            })();
            setLoad(false);
        }
    }, [])

    if(load) return <span>Carregando</span>

    return (
        <div className="grid grid-cols-3 mt-3">
            <div className="flex flex-col col-start-2 gap-4">
                <h1 className="text-3xl font-medium">Olá {usuario.nome}! </h1>
                <CriarPost />
                <PostText />
            </div>
        </div>
    )
}