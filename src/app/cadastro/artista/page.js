'use client'

import InputDate from "@/components/InputDate";
import InputSenha from "@/components/InputSenha";
import { useState } from "react";
import ArtistaModel from "@/models/ArtistaModel";
import { useRouter } from "next/navigation";
import TipoArte from "@/components/TipoArte";
import { InputMask } from "@react-input/mask";
import ArtistaService from "@/services/ArtistaService";
import { ErroValidacao } from "@/services/ErroValidacao";

export default function CadastroArtista() {
    const [artista, setArtista] = useState(new ArtistaModel(null));
    const [senhaConfirm, setSenhaConfirm] = useState("");
    const router = useRouter();

    // Estado do Feedback de erro
    let erro = new ErroValidacao();
    function refreshValido(status, tempo) {
        setErroMsg(status);
        setTimeout(()=>{
            setErroMsg(st=>({
                ...st,
                valido: true
            }))
        }, tempo)
    }
    const [erroMsg, setErroMsg] = useState(erro);

    function save() {
        erro = ArtistaService.validarCampos(artista, senhaConfirm, ["nome", "email", "senha", "cpf", "dataNasc"]);
        refreshValido(erro, 2000);
        if(erro.valido) {
            sessionStorage.setItem('@artista', JSON.stringify(artista));
            router.push("artista/cadastroEndereco")
        }
        
    }


    function handleUsuario(campo, event) {
        switch (campo) {
            case 'idArte':
                setArtista(att=>({
                    ...att,
                    [campo]: Number(event.target.value)
                }));
                break;
            case 'dataNasc':
                setArtista(att=>({
                    ...att,
                    [campo]: event
                }));
                break;
            default:
                setArtista(att=>({
                    ...att,
                    [campo]: event.target.value
                }));
        }
        
    }
    return (
        <div className="h-screen grid grid-cols-12">
            {/* FORM */}
            <div className="flex justify-start items-center flex-col col-span-4">
                <div className="flex flex-col p-5 w-[80%]">
                    <div className="flex flex-col items-center mb-12">
                        <h2 className="text-4xl mb-3 font-light">É Artista? Crie uma conta</h2>
                        <p className="font-light">Já tem uma conta? <a className="underline text-emerald-600" href="/login">Faça Login</a></p>
                    </div>
                    {/* CAMPOS */}
                    <div className="flex flex-col mb-10 gap-2">
                        {!erroMsg.valido?<span className=" ease-in-out duration-500 text-red-500">* {erroMsg.msg}</span>:<></>}
                        {/* NOME */}
                        <div className="flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-person text-2xl"></i>
                            <input
                            value={artista.nome}
                            onChange={(e)=>handleUsuario('nome', e)}
                            type="text" className="text-lg w-full outline-none" placeholder="Nome" />
                        </div>
                        {/* EMAIL */}
                        <div className="flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-envelope text-2xl"></i>
                            <input
                            value={artista.email}
                            onChange={(e)=>handleUsuario('email', e)}
                            type="email" className="text-lg w-full outline-none" placeholder="E-mail" />
                        </div>
                        {/* SENHA */}
                        <InputSenha value={artista.senha} setValue={(e)=>handleUsuario('senha', e)} placeholder="Senha"/>
                        {/* CONFIRMAR SENHA */}
                        <InputSenha value={senhaConfirm} setValue={(e)=>setSenhaConfirm(e.target.value)} placeholder="Confirme a senha"/>
                        {/* CPF */}
                        <div className=" flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-key text-2xl"></i>
                            <InputMask
                            mask="___.___.___-__"
                            replacement={{_:/\d/}}
                            onChange={(e)=>handleUsuario('cpf', e)}
                            value={artista.cpf}
                            type="text" placeholder="CPF" className="text-lg w-full outline-none"/>
                        </div>
                        {/* DATA NASC E SEXO */}
                        <div className="grid grid-cols-12">
                            {/* DATA NASC */}
                            <div className="flex col-span-7 flex-col">
                                <span className="text-lg">Data de Nascimento</span>
                                <InputDate value={artista.dataNasc} setValue={(e)=>handleUsuario('dataNasc', e)} />
                            </div>
                            {/* SEXO */}
                            <div className="flex col-span-4 col-start-9 flex-col">
                                <span className="text-lg">Sexo</span>
                                <select
                                value={artista.sexo}
                                onChange={(e)=>handleUsuario('sexo', e)}
                                className="bg-stone-200 p-3 border border-stone-300 rounded-lg text-lg text-stone-600 cursor-pointer">
                                    <option value="f">Feminino</option>
                                    <option value="m">Masculino</option>
                                    <option value="n">Não-Binário</option>
                                    <option value="">Prefiro Não dizer</option>
                                </select>
                            </div>
                        </div>
                        {/* TIPO ARTE */}
                        <div className="grid grid-cols-12 justify-center">
                            <div className="flex col-span-8 col-start-3 flex-col">
                                <span className="text-lg">Qual o seu tipo de arte?</span>
                                <TipoArte tipoArte={artista.idArte} setTipoArte={(e)=>handleUsuario('idArte', e)} />
                            </div>
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