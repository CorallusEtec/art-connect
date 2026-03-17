'use client'

import SelectUf from "@/components/SelectUf"
import TipoArte from "@/components/TipoArte";
import ArtistaModel from "@/models/ArtistaModel";
import UsuarioModel from "@/models/UsuarioModel";
import ArtistaService from "@/services/ArtistaService";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function EditarArtista() {
    const [load, setLoad] = useState(true);
    const route = useRouter();
    const [artista, setArtista] = useState(new ArtistaModel(null));
    const [nome, setNome] = useState("");
    const [tipoArte, setTipoArte] = useState(1);
    const [sexo, setSexo] = useState("f")
    const [log, setLog] = useState("");
    const [num, setNum] = useState("");
    const [comp, setComp] = useState("");
    const [cep, setCep] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");

    useEffect(()=>{
        if(JSON.parse(sessionStorage.getItem("@login")) == null) {
            route.push("/login");
        } else {
            try {
                setArtista(JSON.parse(sessionStorage.getItem('@login')))
            } catch (e) {
                console.error(e);
            } finally {
                setLoad(false);
            }
        }
    }, [])
    console.log(artista);
    async function alter() {
 
        sessionStorage.setItem("@login", JSON.stringify(artista));
        await ArtistaService.alter(artista.id, artista);
        route.push("/home/seuPerfil");
    }

    function handleArtista(evento, campo) {
        switch(campo) {
            default:
                setArtista(st=>({
                    ...st,
                    [campo]: evento.target.value
                }));
                break;
        }
    }

    if(load) return <span>Carregando...</span>

    return (
        <div className="mt-7">
            <div className="flex justify-center">
                <h1 className="text-4xl text-stone-800">Editar Perfil</h1>
            </div>
            {/* FOTO */}
            <div className="flex justify-center mb-15">
                <div className="flex items-center gap-5">
                    <i className="text-7xl bi bi-person-circle"></i>
                    <div className="flex flex-col gap-1.5">
                        <button className="flex items-center gap-1 border border-stone-200 rounded-lg p-2">
                            <i className="bi bi-pencil-fill"></i>
                            <span>Alterar foto</span>
                        </button>
                        <button className="flex items-center gap-1 border border-red-600 rounded-lg p-2">
                            <i className="text-red-600 bi bi-trash"></i>
                            <span className="text-red-600" >Remover foto</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 mb-10">
                {/* CONTATOS GERAL */}
                <div className="flex flex-col justify-center col-span-4 col-start-2 gap-4">
                    {/* NOME */}
                    <div className="flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                        <i className="bi bi-person text-2xl"></i>
                        <input
                        value={artista.nome} onChange={(e)=>handleArtista(e, 'nome')}
                        type="text" className="text-lg w-full outline-none" placeholder="Nome Completo" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg">Sexo</span>
                        <select
                        value={artista.sexo}
                        onChange={(e)=>handleArtista(e, 'sexo')}
                        className="bg-stone-200 p-3 border border-stone-300 rounded-lg text-lg text-stone-600 cursor-pointer">
                            <option value="f">Feminino</option>
                            <option value="m">Masculino</option>
                        </select>
                    </div>
                    {/* TIPO DE ARTE */}
                    <div className="flex flex-col">
                        <span className="text-lg">Tipo de arte</span>
                        <TipoArte tipoArte={artista.idArte} setTipoArte={(e)=>handleArtista(e, 'idArte')} />
                    </div>
                    {/* CONTATOS */}
                    <div className="flex flex-col p-2">
                        {/* EMAIL */}
                        <div className="flex flex-col">
                            <span>Emails</span>
                        </div>
                    </div>
                </div>
                {/* ENDEREÇO */}
                <div className="flex flex-col col-start-8 col-span-4
                ">
                    <span className="text-lg">Endereço</span>
                    <div className="flex flex-col mb-3 gap-2">
                        {/* LOGRADOURO */}
                        <div className="grid grid-cols-12 gap-2">
                            {/* LOGRADOURO */}
                            <div className="col-span-8 flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                                <i className="bi bi-pin-map text-lg"></i>
                                <input value={artista.nomeLog} onChange={(e)=>handleArtista(e, 'nomeLog')} type="text" className="text-lg w-full outline-none" placeholder="Logradouro" />
                            </div>
                            {/* NUM */}
                            <div className="col-span-4 flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                                <i className="bi bi-hash text-lg"></i>
                                <input value={artista.numLog} onChange={(e)=>handleArtista(e, 'numLog')} type="text" className="text-lg w-full outline-none" placeholder="Numero" />
                            </div>
                        </div>
                        {/* COMPLEMENTO */}
                        <div className=" flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-map text-lg"></i>
                            <input value={artista.complemento} onChange={(e)=>handleArtista(e, 'complemento')} type="text" className="text-lg w-full outline-none" placeholder="Complemento" />
                        </div>
                        {/* CEP E BAIRRO */}
                        <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-4 flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                                <i className="bi bi-geo-alt text-lg"></i>
                                <input value={artista.cep} onChange={(e)=>handleArtista(e, 'cep')} type="text" className="text-lg w-full outline-none" placeholder="CEP" maxLength="9" />
                            </div>
                            <div className="col-span-8 flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                                <input value={artista.bairro} onChange={(e)=>handleArtista(e, 'bairro')} type="text" className="text-lg w-full outline-none" placeholder="Bairro" />
                            </div>
                        </div>
                        {/* CIDADE */}
                        <div className=" flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-buildings text-lg"></i>
                            <input value={artista.cidade} onChange={(e)=>handleArtista(e, 'cidade')} type="text" className="text-lg w-full outline-none" placeholder="Cidade" />
                        </div>
                        {/* UF */}
                        <div className="flex flex-col items-center">
                            <SelectUf value={artista.estado} setValue={(e)=>handleArtista(e, 'estado')} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button onClick={()=>alter()} className="cursor-pointer bg-emerald-500 text-xl text-white p-2 border rounded-lg border-emerald-700">Salvar Alterações</button>
            </div>
        </div>
    )


}