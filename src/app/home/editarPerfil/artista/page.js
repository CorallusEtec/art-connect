'use client'

import SelectUf from "@/components/SelectUf"
import TipoArte from "@/components/TipoArte";
import ArtistaModel from "@/models/ArtistaModel";

import { ErroValidacao } from "@/services/ErroValidacao";
import ArtistaService from "@/services/ArtistaService";
import LoginService from "@/services/LoginService";
import { InputMask } from "@react-input/mask";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function EditarArtista() {
    const [load, setLoad] = useState(true);
    const route = useRouter();
    const [inputContato, setInputContato] = useState("");
    const [listaContatos, setListaContatos] = useState([]);
    const [artista, setArtista] = useState(new ArtistaModel(null));
    let valido = new ErroValidacao();
    const [validoVisual, setValidoVisual] = useState(valido);
    
    function fadeFeedback(state, tempo) {
        setValidoVisual(state);
        setTimeout(()=>{
            setValidoVisual(st=>({
                ...st,
                valido: true
            }));
        }, tempo)
    }

    async function alter() {
        valido = ArtistaService.validarCampos(artista, undefined, ['nome', 'sexo', 'idArte', 'nomeLog', 'numLog', 'cep', 'bairro', 'cidade', 'estado']);
        setValidoVisual(valido);
        if(valido.valido) {
            const status = await ArtistaService.alter(artista.id, artista);

            route.push("/home/seuPerfil");
        } else {
            fadeFeedback(valido, 2500);
        }
    }

    function handleArtista(evento, campo) {
        switch(campo) {
            case 'cep':
                if(evento.target.value.length==9) {
                    setLoad(true);
                    (async ()=>{
                        const data = await attPeloCEP(evento.target.value);
                        if(data != undefined) {
                            setArtista(att=>({
                                ...att,
                                ['bairro']: data.bairro,
                                ['estado']: data.uf,
                                [campo]: data.cep,
                                ['nomeLog']: data.logradouro,
                                ['tipoLog']: data.logradouro.split(' ')[0],
                                ['cidade']: data.localidade
                            }));
                        }
                    })();
                    setLoad(false);
                } else {
                    setArtista(st=>({
                    ...st,
                    [campo]: evento.target.value
                }));
                }
                break;
            case 'numLog':
                setArtista(st=>({
                    ...st,
                    [campo]: Number(evento.target.value)
                }));
                break;
            case 'idArte':
                setArtista(st=>({
                    ...st,
                    [campo]: Number(evento.target.value)
                }));
                break;
            default:
                setArtista(st=>({
                    ...st,
                    [campo]: evento.target.value
                }));
                break;
        }
    }

    async function attPeloCEP(cep) {
        if(cep.length ==9) {
            try {
                setLoad(true);
                const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
                return data.json();
            } catch (e) {

            } finally {
                setLoad(false);
            }
        }
    }
    useEffect(()=>{
        if(JSON.parse(sessionStorage.getItem("@login")) == null) {
            route.push("/login");
        } else {
            try {
                const login = JSON.parse(sessionStorage.getItem("@login"));
                (async()=>{
                    const a = await LoginService.login(login.email, login.senha);
                    setArtista(a);
                    const lista = await ArtistaService.todosContatos(a.id);
                    setListaContatos(lista);
                })();
            } finally {
                setLoad(false);
            }
        }
    }, []);

    if(load) return <span>Carregando...</span>

    function addContato() {
        setLoad(true);
        const contato = {
            valorContato: inputContato,
            idArtista: artista.id
        }
        try {
            (async()=>{
                await ArtistaService.addContato(artista.id, contato);
                const data = await ArtistaService.todosContatos(artista.id);
                setListaContatos(data);
            })();
        } finally {
            setLoad(false);
            setInputContato("");
        }

    }

    function deleteContato(idContato) {
        setLoad(true);
        
        try {
            (async()=>{
                await ArtistaService.deleteContato(idContato);
                const data = await ArtistaService.todosContatos(artista.id);
                setListaContatos(data);
            })();
        } finally {
            setLoad(false);
            setInputContato("");
        }
    }

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
            <div className="flex justify-center mb-7">
                {!validoVisual.valido?<span className="text-base, text-red-500">* {validoVisual.msg}</span>:<></>}
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
                    {/* SEXO */}
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
                    <div>
                        <span className="text-lg">Contatos</span>
                        <div className="flex flex-col gap-5 p-2 mb-2">
                            {listaContatos.map(c=>(
                            <div key={c.id} className="rounded-lg flex justify-between items-center bg-stone-200">
                                <span className="p-2">{c.valorContato}</span>
                                <button onClick={()=>deleteContato(c.id)} className="rounded-r-lg cursor-pointer p-2 bg-red-600">
                                    <i className="text-white bi bi-trash-fill"></i>
                                </button>
                            </div>
                        ))}
                        {listaContatos<=0?<span>Nenhum contato adicionado</span>:<></>}
                        </div>
                        <div className="flex border border-stone-300 text-lg bg-stone-200 rounded-lg">
                            <input value={inputContato} onChange={(e)=>setInputContato(e.target.value)} className="w-full p-2 outline-none" type="text" placeholder="Contato" />
                            <button onClick={()=>addContato()} className=" rounded-r-lg cursor-pointer w-[20%] bg-emerald-700 text-white"><i className="text-4xl bi bi-plus"></i></button>
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
                                <InputMask mask="_____-___" replacement={{_:/\d/}} value={artista.cep} onChange={(e)=>handleArtista(e, 'cep')} type="text" className="text-lg w-full outline-none" placeholder="CEP" maxLength="9" />
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