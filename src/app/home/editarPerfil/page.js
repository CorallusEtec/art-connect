'use client'

import LoginService from "@/services/LoginService"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function EditarPerfil() {
    const route = useRouter()
    useEffect(()=>{
        if(JSON.parse(sessionStorage.getItem('@login')) == null) {
            route.push("/login");
        } else {
            const data = JSON.parse(sessionStorage.getItem('@login'));
            (async()=>{
                const usuario = await LoginService.login(data.email, data.senha);
                if(usuario.tipoUsuario == "ARTISTA") {
                    route.push("editarPerfil/artista");
                } else {
                    route.push("editarPerfil/parceiros");

                }
            })();
        }
    }, [])    
    
    return <span>Carregando...</span>
}