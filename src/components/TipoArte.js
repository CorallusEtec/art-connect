'use client'
import { useEffect, useState } from "react";
import ArteService from "@/services/ArteService";
export default function TipoArte({ tipoArte, setTipoArte }) {
    const [listaArtes, setListaArtes] = useState([]);
    const [load, setLoad] = useState(true);
    async function carregarListaArtes() {
        const data = await ArteService.todos();
        setListaArtes(data);
    }
    
    useEffect(()=>{
        try {
            carregarListaArtes();
        } catch (e) {
            console.log("Oi")
            setListaArtes([])
        } finally {
            setLoad(false);
        }
    }, [])
        if(load) return <span>Carregando...</span>

    return (
        <select value={tipoArte} onChange={setTipoArte} className="border text-lg rounded-lg p-3 text-stone-600 border-stone-300 bg-stone-200">
            <option>Tipos de arte</option>
            {listaArtes.map(arte=>(
                <option key={arte.id} value={arte.id}>{arte.nomeArte}</option>
            ))}
        </select>
    )
}