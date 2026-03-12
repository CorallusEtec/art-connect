'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function EditarPerfil() {
    const route = useRouter()
    useEffect(()=>{
        if(JSON.parse(sessionStorage.getItem('@login')) == null) {
            route.push("/login");
        } else {
            const usuario = JSON.parse(sessionStorage.getItem('@login'));
            if(usuario.tipoUsuario == "ARTISTA") {
                route.push("editarPerfil/artista");
            } else {
                route.push("editarPerfil/parceiro");

            }
        }
    }, [])    
    
    return (
        <span>Carregando...</span>
    )
}