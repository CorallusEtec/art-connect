'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import ArtistaService from "@/services/ArtistaService"
import ArtistaModel from "@/models/ArtistaModel";

export default function CadastroArtistaEndereco() {
    
    const [log, setLog] = useState("");
    const [num, setNum] = useState("");
    const [comp, setComp] = useState("");
    const [cep, setCep] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");
    const [load, setLoad] = useState(true);
    const [listaEstados, setListaEstados] = useState([]);
    const route = useRouter()
    useEffect(()=>{
        if(sessionStorage.getItem('@artista') == null) {
            route.back()
        }
        carregarUfs()
    }, [])

    async function carregarUfs() {
        try {
            const dados = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
            const json = await dados.json();
            setListaEstados(json);
        } catch(e) {
            console.error(e);
        } finally {
            setLoad(false);
        }
    }

    async function save() {
        const artista = new ArtistaModel(JSON.parse(sessionStorage.getItem('@artista')));
        artista.tipoLog = log.split(' ')[0];
        artista.nomeLog = log;
        artista.numLog = num;
        artista.complemento = comp;
        artista.bairro = bairro;
        artista.cep = cep
        artista.cidade = cidade;
        artista.estado = uf;

        await ArtistaService.save(artista);

        sessionStorage.clear();
        route.push('/login');
    }

    if(load) return <span>Carregando</span>

    return (
        <div className="h-dvh grid grid-cols-12">
            {/* FORM */}
            <div className="flex justify-start items-center flex-col col-span-4">
                <div className="flex flex-col p-5 w-[95%] gap-3">
                    <div className="flex flex-col items-center">
                        <h2 className="text-4xl mb-3 font-light">Quase lá</h2>
                        <p className="font-light">Confirme seu endereço abaixo</p>
                    </div>
                    {/* ENDERECO */}
                    <span className="text-lg">Endereço</span>
                    <div className="flex flex-col mb-3 gap-2">
                        {/* LOGRADOURO */}
                        <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-8 flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                                <i className="bi bi-pin-map text-lg"></i>
                                <input onChange={(e)=>setLog(e.target.value)} value={log} type="text" className="text-lg w-full outline-none" placeholder="Logradouro" />
                            </div>
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
                            <select value={uf} onChange={(e)=>setUf(e.target.value)} name="" id="" className="w-[70%] text-stone-500 border text-xl rounded-lg border-stone-300 p-2 bg-stone-200">
                                <option value="">Selecione UF</option>
                                {listaEstados.map(uf=> (
                                    <option key={uf.id} value={uf.sigla}>{uf.nome}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                   
                    {/* BOTÕES */}
                     <div className="flex flex-col items-center gap-5">
                        <button onClick={()=>save()} className="cursor-pointer w-[50%] rounded-lg bg-teal-400 border border-teal-600 text-white p-2 text-center">
                            <i className="bi bi-arrow-right text-2xl"></i>
                        </button>
                     </div>
                </div>
            </div>
            
            {/* IMG COM FRASE */}
            <div className="col-span-8 bg-[url(/img/violao.jpeg)] flex flex-col">
                <div className="flex flex-col items-center gap-3 p-4">
                    <h1 className="text-4xl text-white font-light">O mundo precisa da sua arte</h1>
                    <p className="w-[70%] text-center text-2xl text-white font-extralight">Conecte sua arte a oportunidades reais e encontre estabelecimentos que estão procurando exatamente o que você faz.</p>
                </div>
            </div>
        </div>
    )
}