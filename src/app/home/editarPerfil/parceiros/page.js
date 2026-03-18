'use client'

import SelectUf from "@/components/SelectUf"
import EstabelecimentoModel from "@/models/EstabelecimentoModel";
import { ErroValidacao } from "@/services/ErroValidacao";
import EstabelecimentoService from "@/services/EstabelecimentoService";
import LoginService from "@/services/LoginService";
import { InputMask } from "@react-input/mask";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function EditarParceiro() {
    const route = useRouter();
    const [load, setLoad] = useState(true);
    const [parceiro, setParceiro] = useState(new EstabelecimentoModel(null));
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
        valido = EstabelecimentoService.validarCampos(parceiro, undefined, ['nome', 'nomeLog', 'numLog', 'cep', 'bairro', 'cidade', 'estado'])
        setValidoVisual(valido);
        if(valido.valido) {
            await EstabelecimentoService.alter(parceiro.id, parceiro);
            route.push("/home/seuPerfil");
        } else {
            fadeFeedback(valido, 2500);
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
    function handleParceiro(event, campo) {
        switch(campo) {
            case 'cep':
                if(event.target.value.length==9) {
                    setLoad(true);
                    (async ()=>{
                        const data = await attPeloCEP(event.target.value);
                        if(data != undefined) {
                            setParceiro(att=>({
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
                    setParceiro(st=>({
                    ...st,
                    [campo]: event.target.value
                }));
                }
                break;
            case 'nomeLog':
                setParceiro(st=>({
                    ...st,
                    [campo]: event.target.value,
                    ['tipoLog']: event.target.value.split(" ")[0]
                }));
                break;
            case 'numLog':
                setParceiro(st=>({
                    ...st,
                    [campo]: Number(event.target.value),
                }));
                break;
            default:
                setParceiro(st=>({
                    ...st,
                    [campo]: event.target.value
                }));
                break;
        }
    }

    useEffect(()=>{
        if(JSON.parse(sessionStorage.getItem("@login")) == null) {
            route.push("/login");
        } else {
            try {
                const data = JSON.parse(sessionStorage.getItem('@login'));
                (async()=>{
                    const parceiro = await LoginService.login(data.email, data.senha);
                    setParceiro(parceiro);
                })();
            } finally {
                setLoad(false);
            }
        }
    }, [])

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
                    {!validoVisual.valido?<span className="text-base text-red-500">* {validoVisual.msg}</span>:<></>}
                    {/* NOME */}
                    <div className="flex mb-10 flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                        <i className="bi bi-briefcase text-2xl"></i>
                        <input
                        value={parceiro.nome} onChange={(e)=>handleParceiro(e, 'nome')}
                        type="text" className="text-lg w-full outline-none" placeholder="Nome da Empresa" />
                    </div>
                    <span className="text-lg">Endereço</span>
                    <div className="flex flex-col mb-3 gap-2">
                        {/* LOGRADOURO */}
                        <div className="grid grid-cols-12 gap-2">
                            {/* LOGRADOURO */}
                            <div className="col-span-8 flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                                <i className="bi bi-pin-map text-lg"></i>
                                <input value={parceiro.nomeLog} onChange={(e)=>handleParceiro(e, 'nomeLog')} type="text" className="text-lg w-full outline-none" placeholder="Logradouro" />
                            </div>
                            {/* NUM */}
                            <div className="col-span-4 flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                                <i className="bi bi-hash text-lg"></i>
                                <input value={parceiro.numLog} onChange={(e)=>handleParceiro(e, 'numLog')} type="text" className="text-lg w-full outline-none" placeholder="Numero" />
                            </div>
                        </div>
                        {/* COMPLEMENTO */}
                        <div className=" flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-map text-lg"></i>
                            <input value={parceiro.complemento} onChange={(e)=>handleParceiro(e, 'complemento')} type="text" className="text-lg w-full outline-none" placeholder="Complemento" />
                        </div>
                        {/* CEP E BAIRRO */}
                        <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-4 flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                                <i className="bi bi-geo-alt text-lg"></i>
                                <InputMask value={parceiro.cep}
                                mask="_____-___" replacement={{_:/\d/}} onChange={(e)=>handleParceiro(e, 'cep')} type="text" className="text-lg w-full outline-none" placeholder="CEP" maxLength="9" />
                            </div>
                            <div className="col-span-8 flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                                <input value={parceiro.bairro} onChange={(e)=>handleParceiro(e, 'bairro')} type="text" className="text-lg w-full outline-none" placeholder="Bairro" />
                            </div>
                        </div>
                        {/* CIDADE */}
                        <div className=" flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-buildings text-lg"></i>
                            <input value={parceiro.cidade} onChange={(e)=>handleParceiro(e, 'cidade')} type="text" className="text-lg w-full outline-none" placeholder="Cidade" />
                        </div>
                        {/* UF */}
                        <div className="flex flex-col items-center">
                            <SelectUf value={parceiro.estado} setValue={(e)=>handleParceiro(e, 'estado')} />
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