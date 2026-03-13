'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import ArtistaService from "@/services/ArtistaService"
import ArtistaModel from "@/models/ArtistaModel";
import SelectUf from "@/components/SelectUf";
import { InputMask } from "@react-input/mask";

export default function CadastroArtistaEndereco() {
    const [artista, setArtista] = useState();
    const [load, setLoad] = useState(true);
    const route = useRouter()
    let erro = {valido: false, msg:""}
    const [erroVisual, setErroVisual] = useState(erro);

    useEffect(()=>{
        if(sessionStorage.getItem('@artista') == null) {
            route.back()
        } else {
            setArtista(new ArtistaModel(JSON.parse(sessionStorage.getItem('@artista'))));
        }
        setLoad(false);
    }, [])
    function handleUsuario(campo, event) {
        switch(campo) {
            case 'nomeLog':
                setArtista(att=>({
                    ...att,
                    [campo]: event.target.value
                }));
                setArtista(att=>({
                    ...att,
                    ['tipoLog']: event.target.value.split(' ')[0]
                }));
                break;
            case 'numLog':
                setArtista(att=>({
                    ...att,
                    [campo]: Number(event.target.value)
                }));
                break;
            default:
                setArtista(att=>({
                    ...att,
                    [campo]: event.target.value
                }));
        }   
    }
    async function attPeloCEP(cep) {
        if(cep.length ==9) {
            const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            console.log(data.json());
        }
    }
    async function save() {
        erro = ArtistaService.validarCampos(artista, undefined, ['nomeLog', 'numLog', 'cep', 'bairro', 'cidade', 'estado'])
        setErroVisual(erro);
        if(erro.valido) {
            artista.dataNasc = artista.dataNasc.split('T')[0];
            await ArtistaService.save(artista);

            sessionStorage.clear();
            route.push('/login');
        }
    }

    if(load) return <span>Carregando...</span>

    return (
        <div className="h-dvh grid grid-cols-12">
            {/* FORM */}
            <div className="flex justify-start items-center flex-col col-span-4">
                <div className="flex flex-col p-5 w-full gap-3">
                    <div className="flex flex-col items-center">
                        <h2 className="text-4xl mb-3 font-light">Quase lá</h2>
                        <p className="font-light">Confirme seu endereço abaixo</p>
                    </div>
                    {/* ENDERECO */}
                    <span className="text-lg">Endereço</span>
                    {!erroVisual.valido?<span className="text-red-600">* {erroVisual.msg}</span>:<></>}
                    <div className="flex flex-col mb-3 gap-2">
                        {/* LOGRADOURO */}
                        <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-8 flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                                <i className="bi bi-pin-map text-lg"></i>
                                <input onChange={(e)=>handleUsuario('nomeLog',e)} value={artista.nomeLog} type="text" className="text-lg w-full outline-none" placeholder="Logradouro" />
                            </div>
                            <div className="col-span-4 flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                                <i className="bi bi-hash text-lg"></i>
                                <input value={artista.numLog} onChange={(e)=>handleUsuario('numLog', e)} type="text" className="text-lg w-full outline-none" placeholder="Numero" />
                            </div>
                        </div>
                        {/* COMPLEMENTO */}
                        <div className=" flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-map text-lg"></i>
                            <input value={artista.complemento} onChange={(e)=>handleUsuario('complemento', e)} type="text" className="text-lg w-full outline-none" placeholder="Complemento" />
                        </div>
                        {/* CEP E BAIRRO */}
                        <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-4 flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                                <i className="bi bi-geo-alt text-lg"></i>
                                <InputMask value={artista.cep} mask="_____-___" replacement={{_:/\d/}} onChange={(e)=>handleUsuario('cep', e)} type="text" className="text-lg w-full outline-none" placeholder="CEP" maxLength="9" />
                            </div>
                            <div className="col-span-8 flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                                <input value={artista.bairro} onChange={(e)=>handleUsuario('bairro', e)} type="text" className="text-lg w-full outline-none" placeholder="Bairro" />
                            </div>
                        </div>
                        {/* CIDADE */}
                        <div className=" flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-buildings text-lg"></i>
                            <input value={artista.cidade} onChange={(e)=>handleUsuario('cidade', e)} type="text" className="text-lg w-full outline-none" placeholder="Cidade" />
                        </div>
                        {/* UF */}
                        <div className="flex flex-col items-center">
                            <SelectUf value={artista.estado} setValue={(e)=>handleUsuario('estado', e)} />
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