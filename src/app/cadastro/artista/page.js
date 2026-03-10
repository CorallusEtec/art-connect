'use client'

import InputDate from "@/components/InputDate";
import InputSenha from "@/components/InputSenha";
import { useState } from "react";

export default function CadastroArtista() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConfirm, setSenhaConfirm] = useState("");
    const [cpf, setCpf] = useState("");
    const [dataNasc, setDataNasc] = useState(new Date("2000-01-01T03:24:00"));
    const [sexo, setSexo] = useState("");

    return (
        <div className="h-screen grid grid-cols-12">
            {/* FORM */}
            <div className="flex justify-start items-center flex-col col-span-4">
                <div className="flex flex-col p-5 w-[75%] gap-3">
                    <div className="flex flex-col items-center">
                        <h2 className="text-4xl mb-3 font-light">É Artista? Crie uma conta</h2>
                        <p className="font-light">Já tem uma conta? <a className="underline text-emerald-600" href="/login">Faça Login</a></p>
                    </div>
                    {/* CAMPOS */}
                    <div className="flex flex-col mb-3 gap-2">
                        {/* NOME */}
                        <div className="flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-person text-2xl"></i>
                            <input
                            value={nome}
                            onChange={(e)=>setNome(e.target.value)}
                            type="text" className="text-lg w-full outline-none" placeholder="Nome Completo" />
                        </div>
                        {/* EMAIL */}
                        <div className=" flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-envelope text-2xl"></i>
                            <input
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            type="text" className="text-lg w-full outline-none" placeholder="E-mail" />
                        </div>
                        {/* SENHA */}
                        <InputSenha value={senha} setValue={(e)=>setSenha(e.target.value)} placeholder="Senha"/>
                        {/* CONFIRMAR SENHA */}
                        <InputSenha value={senhaConfirm} setValue={(e)=>setSenhaConfirm(e.target.value)} placeholder="Confirme a senha"/>
                        {/* CPF */}
                        <div className=" flex flex-row border text-xl rounded-lg border-stone-300 gap-1.5 p-2 bg-stone-200">
                            <i className="bi bi-key text-2xl"></i>
                            <input
                            onChange={(e)=>setCpf(e.target.value)}
                            value={cpf}
                            type="text" className="text-lg w-full outline-none" placeholder="CPF" />
                        </div>
                        {/* DATA NASC E SEXO */}
                        <div className="grid grid-cols-12">
                            {/* DATA NASC */}
                            <div className="flex col-span-7 flex-col">
                                <span className="text-lg">Data de Nascimento</span>
                                <InputDate value={dataNasc} setValue={setDataNasc} />
                            </div>
                            {/* SEXO */}
                            <div className="flex col-span-4 col-start-9 flex-col">
                                <span className="text-lg">Sexo</span>
                                <select
                                value={sexo}
                                onChange={(e)=>setSexo(e.target.value)}
                                className="bg-stone-200 p-3 border border-stone-300 rounded-lg text-lg text-stone-600 cursor-pointer">
                                    <option value="f">Feminino</option>
                                    <option value="m">Masculino</option>
                                </select>
                            </div>
                        </div>
                   
                    </div>
                   
                    {/* BOTÕES */}
                     <div className="flex flex-col items-center gap-5">
                        <a href="cadastroEndereco" className="w-[50%] rounded-lg bg-teal-400 border border-teal-600 text-white p-2 text-center">
                            <i className="bi bi-arrow-right text-2xl"></i>
                        </a>
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