'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function AdminUsuarios() {
    const [listaUsuarios, setListaUsuarios] = useState([]);
    const [listaDisplay, setListaDisplay]=  useState([])
    const [inputFiltro, setInputFiltro] = useState("");
    const [showFiltro, setShowFiltro] = useState(false);
    const [buscaUsuario, setBuscaUsuario] = useState("");
    
    const route = useRouter();


    return (
        <div className="flex flex-col h-dvh">
            {/* CONTROLES DE BUSCA */}
            <div className="flex flex-col gap-10 mb-7">
                {/* REGISTRO NUMEROS */}
                <div className="flex flex-col items-center p-3 gap-2">
                    <h1 className="text-4xl">Contas Cadastradas</h1>
                    <h2 className="text-xl font-light">Total de registros encontrados: {listaUsuarios.length}</h2>
                </div>
                {/* CONTROLES */}
                <div className="flex flex-col items-center gap-5">
                    {/* INPUT COM FILTRO */}
                    <div className="flex gap-2 items-center">
                        <input value={buscaUsuario} onChange={(e)=>setBuscaUsuario(e.target.value)} className="text-xl p-2 outline-none border-b-2 border-b-stone-200"
                        type="text" placeholder="Pesquise por conta"
                        />
                        <div className="flex flex-col gap-3">
                            <div>
                                {/* BOTÃO FILTRAR */}
                                <button onClick={()=>setShowFiltro(!showFiltro)} className="cursor-pointer text-stone-800 hover:bg-stone-200 p-2
                                flex items-center gap-2 rounded-lg bg-stone-100 border-stone-300 border">
                                    <i className="bi bi-filter"></i>
                                    <span>Filtrar</span>
                                </button>
                                
                                {/* MENU FILTRAR */}
                                <div onMouseLeave={()=>setShowFiltro(false)} className={`absolute gap-3 ${showFiltro?"flex":"invisible"} p-3 rounded-xl flex-col bg-stone-100 border border-stone-300`}>
                                    <div>
                                        <span className="text-xl">Filtar por</span>
                                    </div>
                                    <div className="flex">
                                        <button  onClick={()=>{setInputFiltro("Nome"); setShowFiltro(false)}} className="rounded-lg w-full hover:bg-stone-200 cursor-pointer">
                                            <span>Nome</span>
                                        </button>
                                    </div>
                                    <div className="flex gap-3">
                                        <button onClick={()=>{setInputFiltro("Cidade"); setShowFiltro(false)}} className="rounded-lg w-full hover:bg-stone-200 cursor-pointer">
                                            <span>Cidade</span>
                                        </button>
                                    </div>
                                    <div className="flex gap-3">
                                        <button  onClick={()=>{setInputFiltro("Status"); setShowFiltro(false)}} className="rounded-lg w-full hover:bg-stone-200 cursor-pointer">
                                            <span>Status</span>
                                        </button>
                                    </div>
                                </div>
                                
                            </div>
                            {inputFiltro!=""?
                            <button onClick={()=>setInputFiltro("")} className=" bg-stone-200 text-stone-800 cursor-pointer rounded-lg flex gap-2 p-1">
                                <i className="bi bi-x"></i>
                                {inputFiltro}
                            </button>:<></>}
                        </div>
                    </div>
                    <button className="cursor-pointer
                    hover:bg-azul-400 bg-azul-500
                    p-2 w-[15%] rounded-xl border border-azul-700 text-xl text-white"
                    >Buscar</button>
                </div>
            </div>
            {/* TABELA */}
            <div className="grid grid-cols-12">
                <div className="col-start-3 flex flex-col gap-5 col-span-9 p-3 border bg-cinza-100 border-cinza-300 rounded-lg">
                    <div className="flex justify-center">
                        <h2 className="text-2xl text-stone-800">Usuários cadastrados</h2>
                    </div>
                    {listaDisplay.length>0?
                    <table className="border-collapse table-fixed">
                        <thead className="border-b border-b-stone-300">
                            <tr>
                                <th>Tipo Usuário</th>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th>Localidade</th>
                                <th>Status da conta</th>
                                <th >Editar conta</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            {listaDisplay.map(user=>(
                                <tr key={user.email}>
                                    <td className="text-center p-4">{user.tipoUsuario.charAt(0).toUpperCase()+user.tipoUsuario.slice(1).toLowerCase()}</td>
                                    <td className="text-center">{user.nome}</td>
                                    <td className="text-center">{user.email}</td>
                                    <td className="text-center">{user.cidade} - {user.estado}</td>
                                    <td className="text-center">{user.nomeStatusConta}</td>
                                    <td className="text-center">
                                        <button className="cursor-pointer">
                                            <i className="text-2xl text-stone-800 bi bi-pencil-square"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>:
                    <div className="flex justify-center">
                        <h2>Não há usuarios cadastrados no sistema</h2>
                    </div>}
                </div>
            </div>
        </div>
    )
}