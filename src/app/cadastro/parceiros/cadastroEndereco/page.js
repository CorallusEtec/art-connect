'use client'

import SelectUf from "@/components/SelectUf";
import EstabelecimentoModel from "@/models/EstabelecimentoModel";
import { ErroValidacao } from "@/services/ErroValidacao";
import EstabelecimentoService from "@/services/EstabelecimentoService";
import { InputMask } from "@react-input/mask";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function CadastroParceiroEndereco() {
    
    const [parceiro, setParceiro] = useState(new EstabelecimentoModel(null));
    const [load, setLoad] = useState(true);
    const route = useRouter();
    let valido = new ErroValidacao();
    
    /* ESTADO E FUNÇÃO QUE MOSTRA FEEDBACK DE VALIDAÇÃO NA TELA */
    const [validoVisual, setValidoVisual] = useState(valido);

    function refreshValido(status, tempo) {
        setValidoVisual(status);
        setTimeout(()=>{
            setValidoVisual(st=>({
                ...st,
                valido: true
            }))
        }, tempo)
    }

    useEffect(()=>{
        if(JSON.parse(sessionStorage.getItem('@parceiro')) == null) {
            route.back();
        } else {
            setParceiro(JSON.parse(sessionStorage.getItem('@parceiro')));
            setLoad(false);
        }
    }, [])
    
    async function save() {
        valido = EstabelecimentoService.validarCampos(parceiro, undefined, ['nomeLog', 'numLog', 'cep', 'bairro', 'cidade', 'estado'])
        if(!valido.valido) {
            refreshValido(valido, 2500);
        } else {
            await EstabelecimentoService.save(parceiro);
            sessionStorage.clear();
            route.push('/login');
        }
    }


    function handleUsuario(event, campo) {
        switch(campo) {
            case 'nomeLog':
                setParceiro(att=>({
                    ...att,
                    [campo]: event.target.value
                }));
                setParceiro(att=>({
                    ...att,
                    ['tipoLog']: event.target.value.split(' ')[0]
                }));
                break;
            case 'numLog':
                setParceiro(att=>({
                    ...att,
                    [campo]: Number(event.target.value)
                }));
                break;
            case 'cep':
                if(event.target.value.length ==9) {
                    setLoad(true);
                    (async ()=>{
                        const data = await attPeloCEP(event.target.value);
                        if(data != undefined) {
                            setParceiro(att=>({
                                ...att,
                                ['bairro']: data.bairro,
                                ['estado']: data.uf,
                                ['nomeLog']: data.logradouro,
                                ['tipoLog']: data.logradouro.split(' ')[0],
                                ['cidade']: data.localidade
                            }));
                        }
                    })();  
                } else {
                    setParceiro(att=>({
                        ...att,
                        [campo]: event.target.value
                    }));
                }
                setParceiro(att=>({
                    ...att,
                    [campo]: event.target.value
                }));
            break
            default:
                setParceiro(att=>({
                    ...att,
                    [campo]: event.target.value
                }));
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
    if(load) return <span>Carregando...</span>

    return (
        <div className="h-dvh grid grid-cols-12">
            {/* FORM */}
            <div className="flex justify-start items-center flex-col col-span-4">
                <div className="flex flex-col p-5 w-[95%] gap-3">
                    <div className="flex flex-col items-center">
                        <h2 className="text-4xl mb-3 font-light">Quase lá</h2>
                        <p className="font-light">Confirme seu endereço abaixo</p>
                    </div>
                    {/* EMAIL E SENHA */}
                    <span className="text-lg">Endereço</span>
                    <div className="flex flex-col mb-3 gap-2">
                    {!validoVisual.valido?<span className="text-red-500">* {validoVisual.msg}</span>:<></>}
                        {/* LOGRADOURO */}
                        <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-8 flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                                <i className="bi bi-pin-map text-lg"></i>
                                <input onChange={(e)=>handleUsuario(e, 'nomeLog')} value={parceiro.nomeLog} type="text" className="text-lg w-full outline-none" placeholder="Logradouro" />
                            </div>
                            <div className="col-span-4 flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                                <i className="bi bi-hash text-lg"></i>
                                <input value={parceiro.numLog} onChange={(e)=>handleUsuario(e, 'numLog')} type="text" className="text-lg w-full outline-none" placeholder="Numero" />
                            </div>
                        </div>
                        {/* COMPLEMENTO */}
                        <div className=" flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-map text-lg"></i>
                            <input value={parceiro.complemento} onChange={(e)=>handleUsuario(e, 'complemento')} type="text" className="text-lg w-full outline-none" placeholder="Complemento" />
                        </div>
                        {/* CEP E BAIRRO */}
                        <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-4 flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                                <i className="bi bi-geo-alt text-lg"></i>
                                <InputMask
                                value={parceiro.cep}
                                onChange={(e)=>handleUsuario(e, 'cep')}
                                mask="_____-___"
                                replacement={{_:/\d/}}
                                type="text"
                                className="text-lg w-full outline-none" placeholder="CEP" maxLength="9" />
                            </div>
                            <div className="col-span-8 flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                                <input value={parceiro.bairro} onChange={(e)=>handleUsuario(e, 'bairro')} type="text" className="text-lg w-full outline-none" placeholder="Bairro" />
                            </div>
                        </div>
                        {/* CIDADE */}
                        <div className=" flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-buildings text-lg"></i>
                            <input value={parceiro.cidade} onChange={(e)=>handleUsuario(e, 'cidade')} type="text" className="text-lg w-full outline-none" placeholder="Cidade" />
                        </div>
                        {/* UF */}
                        <div className="flex flex-col items-center">
                            <SelectUf value={parceiro.estado} setValue={(e)=>handleUsuario(e, 'estado')} />
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
            <div className="col-span-8 bg-[url(/img/mic.jpg)] flex flex-col">
                <div className="flex flex-col items-center gap-3 p-4">
                    <h1 className="text-4xl text-white font-light">O mundo precisa da sua arte</h1>
                    <p className="w-[70%] text-center text-2xl text-white font-extralight">Conecte sua arte a oportunidades reais e encontre estabelecimentos que estão procurando exatamente o que você faz.</p>
                </div>
            </div>
        </div>
    )
}