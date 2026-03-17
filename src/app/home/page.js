'use client'

import CriarPost from "@/components/CriarPost";
import PostText from "@/components/PostText";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function Home() {
    const route = useRouter();
    const [usuario, setUsuario] = useState(null);
    const [load, setLoad] = useState(true);
    useEffect(()=>{
        if(sessionStorage.getItem('@login') == null) {
            route.push("/login");
        } else {
            const data = JSON.parse(sessionStorage.getItem('@login'));
            setUsuario(data);
            setLoad(false);
        }
    }, [])

    if(load) return <span>Carregando</span>

    return (
        <div className="grid grid-cols-3 mt-3">
            <div className="flex flex-col col-start-2 gap-4">
                <h1 className="text-3xl font-medium">Olá {usuario.nome}! </h1>
                <CriarPost />
                <PostText content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ipsum nisi. Pellentesque id nisi sed orci aliquam vehicula et id leo. Etiam rutrum, arcu at egestas iaculis, libero lorem aliquet ligula, quis molestie sapien velit at enim. Aliquam et massa eu lectus eleifend facilisis quis a lectus. Praesent et gravida sapien. Proin ex mi, eleifend eget consectetur id, rutrum sit amet nibh."} />
            </div>
        </div>
    )
}