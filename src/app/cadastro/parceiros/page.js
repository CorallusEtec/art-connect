'use client'

import { useState } from "react"
import InputSenha from "@/components/InputSenha";
import EstabelecimentoModel from "@/models/EstabelecimentoModel";
import { useRouter } from "next/navigation";
import EstabelecimentoService from "@/services/EstabelecimentoService";
import { ErroValidacao } from "@/services/ErroValidacao";
import { InputMask } from "@react-input/mask";
export default function CadastroParceiro() {
    const [senhaConfirm, setSenhaConfirm] = useState("");
    const [parceiro, setParceiro] = useState(new EstabelecimentoModel(null));
    const route = useRouter();
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


    function save() {
        let valido = EstabelecimentoService.validarCampos(parceiro, senhaConfirm, ['nome', 'razaoSocial', 'email', 'senha', 'cnpj'])
        if(!valido.valido) {
            fadeFeedback(valido, 2500);
        } else {
            sessionStorage.setItem('@parceiro', JSON.stringify(parceiro));
            route.push('parceiros/cadastroEndereco');
        }
    }

    function handleUsuario(event, campo) {
        switch(campo) {
            default:
                setParceiro(dados=>({
                    ...dados,
                    [campo]: event.target.value
                }))
        }
    }

    return (
        <div className="h-screen grid grid-cols-12">
            {/* FORM */}
            <div className="flex justify-start items-center flex-col col-span-4">
                <div className="flex flex-col p-5 w-[75%] gap-3">
                    <div className="flex flex-col items-center">
                        <h2 className="text-4xl text-center mb-3 font-light">É estabelecimento? Crie uma conta</h2>
                        <p className="font-light">Já tem uma conta? <a className="underline text-emerald-600" href="/login">Faça Login</a></p>
                    </div>
                    {/* CAMPOS */}
                    <div className="flex flex-col mb-3 gap-2">
                        {!validoVisual.valido?<span className="text-red-600">* {validoVisual.msg}</span>:<></>}
                        {/* NOME EMPRESA */}
                        <div className="flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-briefcase text-2xl"></i>
                            <input
                            value={parceiro.nome}
                            onChange={(e)=>handleUsuario(e, 'nome')}
                            type="text" className="text-lg w-full outline-none" placeholder="Nome da empresa" />
                        </div>
                        {/* RAZÂO SOCIAL */}
                        <div className="flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-at text-2xl"></i>
                            <input
                            value={parceiro.razaoSocial}
                            onChange={(e)=>handleUsuario(e, 'razaoSocial')}
                            type="text" className="text-lg w-full outline-none" placeholder="Razão Social" />
                        </div>
                        {/* EMAIL */}
                        <div className=" flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-envelope text-2xl"></i>
                            <input
                            value={parceiro.email}
                            onChange={(e)=>handleUsuario(e, 'email')}
                            type="text" className="text-lg w-full outline-none" placeholder="E-mail" />
                        </div>
                        {/* SENHA */}
                        <InputSenha value={parceiro.senha} setValue={(e)=>handleUsuario(e, 'senha')} placeholder="Senha"/>
                        {/* CONFIRMAR SENHA */}
                        <InputSenha value={senhaConfirm} setValue={(e)=>setSenhaConfirm(e.target.value)}  placeholder="Confirme a senha"/>
                        {/* CNPJ */}
                        <div className=" flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-key text-2xl"></i>
                            <InputMask
                            onChange={(e)=>handleUsuario(e, 'cnpj')}
                            mask="__.___.___/____-__"
                            replacement={{_:/\d/}}
                            value={parceiro.cnpj}
                            type="text" className="text-lg w-full outline-none" placeholder="CNPJ" />
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
                    <h1 className="text-4xl text-white font-light">Artistas talentosos para o seu evento ou espaço.</h1>
                    <p className="w-[70%] text-center text-2xl text-white font-extralight">Conecte-se com artistas independentes e transforme seu estabelecimento em um palco para novas experiências.</p>
                </div>
            </div>
        </div>
    )
}