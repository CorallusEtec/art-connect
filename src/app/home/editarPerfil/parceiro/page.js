'use client'

import SelectUf from "@/components/SelectUf"
import EstabelecimentoService from "@/services/EstabelecimentoService";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function EditarParceiro() {
    const [load, setLoad] = useState(true);
    const route = useRouter();
    
    const [nome, setNome] = useState("");
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
                const usuario = JSON.parse(sessionStorage.getItem('@login'));
                setNome(usuario.nome);
                setLog(usuario.nomeLog==null?"":usuario.nomeLog);
                setNum(usuario.numLog==null?"":usuario.numLog);
                setComp(usuario.complemento==null?"":usuario.complemento);
                setCep(usuario.cep==null?"":usuario.cep);
                setBairro(usuario.bairro==null?"":usuario.bairro);
                setCidade(usuario.cidade==null?"":usuario.cidade);
                setUf(usuario.estado==null?"":usuario.estado);
            } catch (e) {
                console.error(e);
            } finally {
                setLoad(false);
            }
        }
    }, [])

    async function alter() {
        
        const usuario = JSON.parse(sessionStorage.getItem("@login"));
        usuario.nome = nome;
        usuario.nomeLog = log;
        usuario.numLog = num,
        usuario.tipoLog = log.split(" ")[0];
        usuario.complemento = comp;
        usuario.cep = cep;
        usuario.bairro = bairro;
        usuario.cidade = cidade;
        usuario.estado = uf;
        sessionStorage.setItem("@login", JSON.stringify(usuario));
        await EstabelecimentoService.alter(usuario.id, usuario);
        route.push("/home/seuPerfil");
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
                {/* ENDEREÇO */}
                <div className="flex flex-col col-start-4 col-span-6
                ">
                    {/* NOME */}
                    <div className="flex mb-10 flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                        <i className="bi bi-person text-2xl"></i>
                        <input
                        value={nome} onChange={(e)=>setNome(e.target.value)}
                        type="text" className="text-lg w-full outline-none" placeholder="Nome Completo" />
                    </div>
                    <span className="text-lg">Endereço</span>
                    <div className="flex flex-col mb-3 gap-2">
                        {/* LOGRADOURO */}
                        <div className="grid grid-cols-12 gap-2">
                            {/* LOGRADOURO */}
                            <div className="col-span-8 flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                                <i className="bi bi-pin-map text-lg"></i>
                                <input value={log} onChange={(e)=>setLog(e.target.value)} type="text" className="text-lg w-full outline-none" placeholder="Logradouro" />
                            </div>
                            {/* NUM */}
                            <div className="col-span-4 flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                                <i className="bi bi-hash text-lg"></i>
                                <input value={num} onChange={(e)=>setNum(e.target.value)} type="text" className="text-lg w-full outline-none" placeholder="Numero" />
                            </div>
                        </div>
                        {/* COMPLEMENTO */}
                        <div className=" flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-map text-lg"></i>
                            <input value={comp} onChange={(e)=>setComp(e.target.value)} type="text" className="text-lg w-full outline-none" placeholder="Complemento" />
                        </div>
                        {/* CEP E BAIRRO */}
                        <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-4 flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                                <i className="bi bi-geo-alt text-lg"></i>
                                <input value={cep} onChange={(e)=>setCep(e.target.value)} type="text" className="text-lg w-full outline-none" placeholder="CEP" maxLength="9" />
                            </div>
                            <div className="col-span-8 flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                                <input value={bairro} onChange={(e)=>setBairro(e.target.value)} type="text" className="text-lg w-full outline-none" placeholder="Bairro" />
                            </div>
                        </div>
                        {/* CIDADE */}
                        <div className=" flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-buildings text-lg"></i>
                            <input value={cidade} onChange={(e)=>setCidade(e.target.value)} type="text" className="text-lg w-full outline-none" placeholder="Cidade" />
                        </div>
                        {/* UF */}
                        <div className="flex flex-col items-center">
                            <SelectUf value={uf} setValue={setUf} />
                        </div>
                    </div>
                    <div className="flex flex-col p-2">
                        {/* EMAIL */}
                        <div className="flex flex-col">
                            <span>Emails</span>
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